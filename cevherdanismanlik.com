server {
    server_name cevherdanismanlik.com www.cevherdanismanlik.com;

    location / {
        proxy_pass http://127.0.0.1:10024;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/cevherdanismanlik.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/cevherdanismanlik.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}
server {
    if ($host = www.cevherdanismanlik.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = cevherdanismanlik.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name cevherdanismanlik.com www.cevherdanismanlik.com;
    return 404; # managed by Certbot
}
