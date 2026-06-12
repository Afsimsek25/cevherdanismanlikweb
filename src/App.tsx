import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  BookOpen,
  Award,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Menu,
  X,
  UserCheck,
  Users,
  CheckCircle2,
  GraduationCap,
  Target,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';

// Animation configs
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'hakkimizda', 'hizmetlerimiz', 'metodoloji', 'yorumlar', 'iletisim'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hakkimizda', label: 'Hakkımızda', id: 'hakkimizda' },
    { href: '#hizmetlerimiz', label: 'Hizmetlerimiz', id: 'hizmetlerimiz' },
    { href: '#metodoloji', label: 'Nasıl Çalışıyoruz?', id: 'metodoloji' },
    { href: '#yorumlar', label: 'Yorumlar', id: 'yorumlar' },
    { href: '#iletisim', label: 'İletişim', id: 'iletisim' },
  ];
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: 'Öğrenci Koçluğu', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API Submission
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({ name: '', phone: '', email: '', service: 'Öğrenci Koçluğu', message: '' });
    }, 800);
  };

  const services = [
    {
      icon: <GraduationCap className="w-8 h-8 text-brand-gold" />,
      title: "Öğrenci Koçluğu",
      shortDesc: "Öğrencinin kendi potansiyelini keşfetmesini sağlayarak başarı hedeflerine rehberlik ediyoruz.",
      details: "Birebir koçluk seansları ile öğrencinin öğrenme stillerini belirliyor, zaman yönetimi becerilerini geliştiriyor, akademik ve sosyal hedeflerine ulaşmasında yol arkadaşlığı yapıyoruz. Sadece ders başarısı değil, aynı zamanda motivasyon ve özgüven artışını hedefliyoruz."
    },
    {
      icon: <Target className="w-8 h-8 text-brand-gold" />,
      title: "LGS & YKS Sınav Hazırlığı",
      shortDesc: "Sınav maratonunda planlı çalışma, stratejik test çözümü ve sınav kaygısı yönetimi desteği.",
      details: "LGS ve YKS gibi kritik sınavlarda öğrencilerin haftalık ders takip programlarını hazırlıyoruz. Konu eksiklerinin tespiti, deneme analizleri, doğru kaynak seçimi ve sınav stratejileri ile hazırlık sürecini stressiz ve verimli bir hale getiriyoruz."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-gold" />,
      title: "Bireysel Takip & Planlama",
      shortDesc: "Her öğrenciye özel haftalık çalışma planları ve düzenli veli bilgilendirme sistemi.",
      details: "Standart programlar yerine tamamen öğrencinin seviyesine, okul saatlerine ve eksiklerine göre kişiselleştirilmiş programlar hazırlıyoruz. Günlük soru hedefleri ve ders çalışma süreleri takip edilerek, öğrencinin disiplin kazanması sağlanır."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-gold" />,
      title: "Veli Rehberliği & Danışmanlık",
      shortDesc: "Sınav sürecinde aile içi iletişimi güçlendirici ve destekleyici veli bilgilendirmeleri.",
      details: "Eğitim sürecinde ailenin rolü çok büyüktür. Velilerimizle düzenli görüşmeler yaparak öğrencinin gelişimini paylaşıyor, sınav sürecinde kaygı yönetimi ve öğrenciye yaklaşım konusunda ailelere destek veriyoruz."
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Ücretsiz Ön Görüşme",
      desc: "Öğrenci ve velimizle bir araya gelerek beklentileri dinliyor, hizmetlerimizi ve çalışma şeklimizi detaylandırıyoruz."
    },
    {
      step: "02",
      title: "Durum Analizi & Tanılama",
      desc: "Öğrencinin akademik geçmişini, deneme sınavı sonuçlarını, ilgi alanlarını ve öğrenme stilini analiz ediyoruz."
    },
    {
      step: "03",
      title: "Bireysel Program Tasarımı",
      desc: "Analiz sonuçlarına göre öğrenciye özel haftalık ders çalışma, kaynak takibi ve motivasyon planı oluşturuyoruz."
    },
    {
      step: "04",
      title: "Yakın Takip & Veli Raporlama",
      desc: "Günlük ödev/soru takibi gerçekleştiriyor, haftalık görüşmelerle gelişim grafiğini değerlendirip velimizi bilgilendiriyoruz."
    }
  ];

  const testimonials = [
    {
      name: "Elif S. (Veli - YKS Öğrencisi)",
      role: "Veli",
      text: "Cevher Danışmanlık ile çalışmaya başladıktan sonra kızımın ders çalışma disiplini tamamen değişti. Sınav kaygısını yönetmeyi öğrendi ve hedeflediği Hukuk fakültesini kazandı. Emeğiniz için minnettarız."
    },
    {
      name: "Arda B. (LGS Öğrencisi)",
      role: "Öğrenci",
      text: "Haftalık planlar sayesinde hangi gün neye çalışacağımı düşünmek zorunda kalmadım. Koçumla yaptığımız görüşmeler motivasyonumu hep yüksek tuttu. Fen Lisesini kazanmamda en büyük pay onlara ait."
    },
    {
      name: "Murat T. (Veli - LGS Öğrencisi)",
      role: "Veli",
      text: "Oğlumuzun ödev takibi ve çalışma düzeni konusunda evdeki tartışmalarımız Cevher Danışmanlık sayesinde son buldu. Profesyonel bir takip sistemi olması hem bizi hem oğlumuzu çok rahatlattı."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-gold selection:text-white flex flex-col font-sans">

      {/* HEADER */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div className="bg-white/80 border border-brand-sand/65 backdrop-blur-md shadow-xl rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300">
          <a href="#hero" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Cevher Danışmanlık Logo" className="h-9 w-auto rounded object-contain transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base leading-none text-brand-navy tracking-tight group-hover:text-brand-gold transition-colors">CEVHER</span>
              <span className="text-[9px] font-semibold text-brand-indigo tracking-[0.15em] leading-none uppercase mt-0.5">Danışmanlık</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 font-semibold text-brand-navy">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-2 rounded-full text-xs lg:text-sm font-semibold tracking-wide transition-all duration-300 ${activeSection === link.id
                  ? 'bg-brand-gold/15 text-brand-goldDark border border-brand-gold/25 shadow-sm'
                  : 'text-brand-navy/80 hover:text-brand-navy hover:bg-brand-navy/5 border border-transparent'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+905555555555"
              className="flex items-center gap-2 text-brand-navy hover:text-brand-gold transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span className="text-xs font-bold">+90 555 555 5555</span>
            </a>
            <a
              href="#iletisim"
              className="bg-brand-navy hover:bg-brand-blue text-white font-semibold py-2 px-5 rounded-full transition-all hover:shadow-md hover:scale-105 duration-300 text-xs flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-gold" />
              Görüşme Planla
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 text-brand-navy hover:text-brand-gold transition-colors focus:outline-none"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-xl border border-brand-sand/60 rounded-2xl shadow-2xl p-6 flex flex-col gap-4 overflow-hidden"
            >
              <div className="flex flex-col gap-3 font-semibold text-brand-navy">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-full px-6 py-3.5 rounded-xl text-center font-semibold tracking-wide transition-all duration-300 ${activeSection === link.id
                      ? 'bg-brand-gold/15 text-brand-goldDark border border-brand-gold/25'
                      : 'text-brand-navy/80 hover:text-brand-navy hover:bg-brand-navy/5'
                      }`}
                  >
                    {link.label}
                  </a>
                ))}

                <div className="h-px bg-brand-sand/50 w-full my-2"></div>

                <div className="flex flex-col items-center gap-4 w-full">
                  <a
                    href="tel:+905555555555"
                    className="flex items-center justify-center gap-2 text-brand-navy w-full py-3 rounded-xl hover:bg-brand-navy/5 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-brand-gold" />
                    <span className="font-bold tracking-wide">+90 555 555 5555</span>
                  </a>
                  <a
                    href="#iletisim"
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-brand-gold hover:bg-brand-goldDark text-white text-center font-bold py-3.5 px-6 rounded-full transition-all text-sm flex items-center justify-center gap-2 w-full"
                  >
                    <Calendar className="w-4 h-4" />
                    Ücretsiz Ön Görüşme
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-50/40 via-brand-cream to-amber-50/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="md:col-span-7 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 border border-brand-gold/20 py-1.5 px-4 rounded-full text-xs font-bold text-brand-goldDark mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-gold animate-spin" style={{ animationDuration: '3s' }} />
              Potansiyelini Başarıya Dönüştür
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-[1.1] mb-6 font-black">
              Geleceğini Şansa Bırakma, <br />
              <span className="text-brand-gold relative">
                Cevherini Keşfet
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-brand-gold/20 rounded-full"></span>
              </span>
            </h1>
            <p className="text-text-body text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Cevher Danışmanlık olarak; eğitim koçluğu, LGS/YKS sınav danışmanlığı ve kişiye özel takip sistemimizle öğrencilerimizin başarı yolculuğunda en güvenilir rehberi oluyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#iletisim"
                className="bg-brand-navy hover:bg-brand-blue text-white text-center font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                Ücretsiz Ön Görüşme Planla
                <ArrowRight className="w-5 h-5 text-brand-gold" />
              </a>
              <a
                href="#hizmetlerimiz"
                className="bg-white/90 border border-brand-sand text-brand-navy text-center font-bold py-4 px-8 rounded-full shadow-sm hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 hover:border-brand-gold"
              >
                Hizmetlerimizi İncele
              </a>
            </div>

            {/* Quick stats badges */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-brand-sand/60 w-full max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-brand-navy font-serif">10+</div>
                <div className="text-xs text-text-muted font-semibold mt-1">Yıllık Deneyim</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-brand-navy font-serif">%98</div>
                <div className="text-xs text-text-muted font-semibold mt-1">Memnuniyet Oranı</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-brand-navy font-serif">500+</div>
                <div className="text-xs text-text-muted font-semibold mt-1">Başarılı Öğrenci</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[450px]">
              {/* Outer decorative frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold to-brand-indigo rounded-3xl opacity-20 blur-xl transform translate-x-4 translate-y-4"></div>

              {/* Main Image container */}
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-brand-sand/50 overflow-hidden group">
                <img
                  src="/hero.png"
                  alt="Eğitim Koçluğu Görseli"
                  className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-102 transition-transform duration-700 animate-float"
                />

                {/* Float Badge 1 */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur shadow-lg border border-brand-sand/60 py-2.5 px-4 rounded-2xl flex items-center gap-3">
                  <div className="bg-amber-100 p-2 rounded-xl text-brand-gold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-navy leading-none">Birebir Rehberlik</h4>
                    <span className="text-[10px] text-text-muted">Kişiselleştirilmiş</span>
                  </div>
                </div>

                {/* Float Badge 2 */}
                <div className="absolute bottom-8 right-8 bg-brand-navy text-white shadow-xl py-3 px-5 rounded-2xl flex items-center gap-3 border border-white/10">
                  <div className="bg-brand-gold p-2 rounded-xl text-white">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black leading-none text-brand-gold">Hedef Odaklı</h4>
                    <span className="text-[10px] text-slate-300">YKS & LGS Dereceleri</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-brand-navy text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center items-center">
            <div className="flex flex-col items-center">
              <BookOpen className="w-8 h-8 text-brand-gold mb-3" />
              <h3 className="text-lg font-bold font-serif mb-1">Kişiye Özel Kaynak</h3>
              <p className="text-xs text-slate-300 max-w-[200px]">Öğrenci seviyesine en uygun yayınların tespiti</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-brand-gold mb-3" />
              <h3 className="text-lg font-bold font-serif mb-1">7/24 İletişim & Destek</h3>
              <p className="text-xs text-slate-300 max-w-[200px]">Öğrenci ve veliyle kesintisiz irtibat</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-8 h-8 text-brand-gold mb-3" />
              <h3 className="text-lg font-bold font-serif mb-1">Haftalık Takip Raporu</h3>
              <p className="text-xs text-slate-300 max-w-[200px]">Detaylı performans analizleri</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 text-brand-gold mb-3" />
              <h3 className="text-lg font-bold font-serif mb-1">Profesyonel Kadro</h3>
              <p className="text-xs text-slate-300 max-w-[200px]">Eğitim alanında tecrübeli uzman koçlar</p>
            </div>
          </div>
        </div>
      </section>

      {/* HİZMETLERİMİZ */}
      <section id="hizmetlerimiz" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-brand-gold tracking-[0.2em] uppercase mb-3">Sunduğumuz Hizmetler</h2>
            <h3 className="font-serif text-3xl sm:text-4xl text-brand-navy font-black">
              Öğrencimizin İhtiyaçlarına Özel Profesyonel Çözümler
            </h3>
            <div className="w-16 h-[3px] bg-brand-gold mx-auto mt-6"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-brand-cream/40 border border-brand-sand/40 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="bg-white p-4 rounded-xl shadow-sm w-fit mb-6 border border-brand-sand/30">
                    {service.icon}
                  </div>
                  <h4 className="font-serif text-xl font-bold text-brand-navy mb-4">{service.title}</h4>
                  <p className="text-text-body text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                </div>

                <button
                  onClick={() => setSelectedService(selectedService === index ? null : index)}
                  className="text-brand-gold hover:text-brand-goldDark text-sm font-bold flex items-center gap-1 group/btn mt-auto"
                >
                  {selectedService === index ? "Daha Az Gör" : "Detaylı Bilgi"}
                  <ChevronRight className={`w-4 h-4 transform transition-transform duration-300 ${selectedService === index ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`} />
                </button>

                <AnimatePresence>
                  {selectedService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-brand-sand/40 text-xs text-text-body leading-relaxed"
                    >
                      {service.details}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HAKKIMIZDA / KURUCU */}
      <section id="hakkimizda" className="py-24 bg-brand-cream/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">

            {/* Left Column: Visual Grid */}
            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="bg-brand-navy p-8 rounded-3xl text-white text-center flex flex-col justify-center items-center shadow-lg">
                  <span className="font-serif font-black text-4xl text-brand-gold mb-1">10+</span>
                  <span className="text-xs font-semibold text-slate-300">Yıllık Tecrübe</span>
                </div>
                <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-brand-sand/30">
                  <img src="/logo.png" alt="Cevher Danışmanlık" className="w-full h-full object-cover p-6" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gradient-to-b from-brand-gold to-brand-goldDark text-white p-8 rounded-3xl text-center flex flex-col justify-center items-center h-[90%] w-full shadow-lg">
                  <BookOpen className="w-10 h-10 mb-4 text-brand-navy" />
                  <span className="font-bold text-lg leading-tight mb-2">Bireysel Yol Haritası</span>
                  <span className="text-[10px] text-slate-100">Her Öğrenci Bir Cevherdir</span>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="md:col-span-7 flex flex-col items-start">
              <h2 className="text-xs font-bold text-brand-gold tracking-[0.2em] uppercase mb-3">Biz Kimiz?</h2>
              <h3 className="font-serif text-3xl sm:text-4xl text-brand-navy font-black mb-6">
                Her Öğrenci İçindeki Cevheri Keşfetmeyi Bekler
              </h3>
              <div className="w-16 h-[3px] bg-brand-gold mb-6"></div>

              <div className="space-y-4 text-text-body leading-relaxed text-base">
                <p>
                  <strong>Cevher Danışmanlık</strong>, öğrencilerin akademik potansiyellerini maksimum düzeyde açığa çıkarmak, onlara sınav süreçlerinde doğru stratejileri kazandırmak ve kişisel gelişim süreçlerine katkıda bulunmak amacıyla kurulmuştur.
                </p>
                <p>
                  Eğitim koçluğunun sadece ders programı yapmaktan ibaret olmadığına inanıyoruz. Bizim için her öğrenci, işlenmeyi ve gün ışığına çıkarılmayı bekleyen eşsiz bir <strong>cevherdir</strong>. Doğru rehberlik, düzenli takip, mental hazırlık ve disiplinli çalışma ile aşılamayacak hiçbir sınav engeli yoktur.
                </p>
                <p>
                  Kurulduğumuz günden bu yana yüzlerce öğrencimizin LGS ve YKS maratonlarında hedeflerine ulaşmalarını sağladık. Öğrenci, veli ve koç üçgenindeki dinamik iletişimi ön planda tutan takip modelimiz sayesinde başarının kalıcı olmasını hedefliyoruz.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                  <span className="font-bold text-brand-navy text-sm">Disiplinli Takip</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                  <span className="font-bold text-brand-navy text-sm">Zihinsel Hazırlık</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                  <span className="font-bold text-brand-navy text-sm">Sınav Stratejileri</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* METODOLOJİ (NASIL ÇALIŞIYORUZ) */}
      <section id="metodoloji" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-brand-gold tracking-[0.2em] uppercase mb-3">Çalışma Sistemimiz</h2>
            <h3 className="font-serif text-3xl sm:text-4xl text-brand-navy font-black">
              Başarıya Giden 4 Adımlı Yol Haritamız
            </h3>
            <div className="w-16 h-[3px] bg-brand-gold mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connective Line (Desktop Only) */}
            <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-brand-sand/60 z-0"></div>

            {methodology.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center relative z-10 group">
                <div className="w-20 h-20 rounded-2xl bg-brand-cream border-2 border-brand-sand flex items-center justify-center font-serif text-2xl font-black text-brand-gold mb-6 shadow-sm group-hover:bg-brand-navy group-hover:text-brand-gold group-hover:border-brand-navy transition-all duration-500">
                  {item.step}
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                <p className="text-text-body text-xs leading-relaxed max-w-[220px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YORUMLAR */}
      <section id="yorumlar" className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-brand-gold tracking-[0.2em] uppercase mb-3">Başarı Hikayelerimiz</h2>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-black">
              Öğrenci ve Velilerimizin Değerlendirmeleri
            </h3>
            <div className="w-16 h-[3px] bg-brand-gold mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testi, index) => (
              <div
                key={index}
                className="glass-dark border border-white/10 p-8 rounded-3xl flex flex-col justify-between"
              >
                <p className="italic text-slate-300 text-sm leading-relaxed mb-8">
                  "{testi.text}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center font-bold text-brand-gold text-sm font-serif">
                    {testi.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{testi.name}</h4>
                    <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider">{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İLETİŞİM / RANDEVU */}
      <section id="iletisim" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Contact info */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <h2 className="text-xs font-bold text-brand-gold tracking-[0.2em] uppercase mb-3">İletişim</h2>
              <h3 className="font-serif text-3xl sm:text-4xl text-brand-navy font-black mb-6">
                Ücretsiz Ön Görüşme İçin Bize Ulaşın
              </h3>
              <div className="w-16 h-[3px] bg-brand-gold mb-8"></div>
              <p className="text-text-body text-base leading-relaxed mb-8">
                Eğitim koçluğu sürecimiz hakkında detaylı bilgi almak, öğrencinizin analizini yapmak ve hedeflerimizi belirlemek adına ilk adımı birlikte atalım.
              </p>

              <div className="space-y-6 w-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-cream border border-brand-sand flex items-center justify-center text-brand-gold shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-muted">Telefon Numarası</h4>
                    <a href="tel:+905555555555" className="font-serif font-bold text-brand-navy hover:text-brand-gold transition-colors text-base">+90 555 555 5555</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-cream border border-brand-sand flex items-center justify-center text-brand-gold shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-muted">E-Posta Adresi</h4>
                    <a href="mailto:bilgi@cevherdanismanlik.com" className="font-serif font-bold text-brand-navy hover:text-brand-gold transition-colors text-base">bilgi@cevherdanismanlik.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-cream border border-brand-sand flex items-center justify-center text-brand-gold shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-muted">Ofis Adresi</h4>
                    <span className="font-serif font-bold text-brand-navy text-sm">Kavaklıdere, Atatürk Bulvarı No: 123, Çankaya / Ankara</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Appointment Form */}
            <div className="lg:col-span-7 bg-brand-cream/30 border border-brand-sand/40 p-8 sm:p-10 rounded-3xl shadow-sm">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-navy mb-3">Randevu Talebiniz Alındı</h3>
                  <p className="text-text-body text-sm max-w-sm mx-auto leading-relaxed">
                    Eğitim koçumuz en kısa sürede (genellikle 24 saat içinde) sizinle irtibata geçecek ve ön görüşme randevusunu onaylayacaktır. İlginiz için teşekkür ederiz.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">Ön Görüşme Talep Formu</h3>
                  <p className="text-text-body text-xs mb-6">Lütfen bilgilerinizi eksiksiz doldurunuz. Sizinle en kısa sürede iletişime geçeceğiz.</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-brand-navy uppercase mb-2">Adınız Soyadınız</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-brand-sand px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="Örn: Ahmet Yılmaz"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-brand-navy uppercase mb-2">Telefon Numaranız</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-brand-sand px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="Örn: 0555 555 5555"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-brand-navy uppercase mb-2">E-Posta Adresiniz</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-brand-sand px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="Örn: name@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-brand-navy uppercase mb-2">İlgilendiğiniz Hizmet</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-brand-sand px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-gold transition-colors"
                      >
                        <option>Öğrenci Koçluğu</option>
                        <option>LGS Sınav Hazırlığı</option>
                        <option>YKS Sınav Hazırlığı</option>
                        <option>Veli Rehberliği</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-brand-navy uppercase mb-2">Varsa Eklemek İstedikleriniz (Notlar)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-brand-sand px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
                      placeholder="Öğrencinin sınıf seviyesi, eksik olduğu konular vb. hakkında detay ekleyebilirsiniz."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-navy hover:bg-brand-blue text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-101"
                  >
                    <Calendar className="w-5 h-5 text-brand-gold" />
                    Talep Formunu Gönder
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 mb-12">

          {/* Logo and About info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Cevher Danışmanlık" className="h-8 w-auto rounded bg-white p-0.5" />
              <span className="font-serif font-bold text-lg leading-none tracking-tight text-white">CEVHER DANIŞMANLIK</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-6">
              LGS ve YKS maratonlarında kişiye özel çalışma planı, yakın takip modeli ve profesyonel koçluk seanslarıyla hedeflerinizi gerçeğe dönüştürüyoruz.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="font-serif text-brand-gold font-bold text-sm mb-4">Hızlı Erişim</h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-300">
              <a href="#hakkimizda" className="hover:text-white transition-colors">Hakkımızda</a>
              <a href="#hizmetlerimiz" className="hover:text-white transition-colors">Hizmetlerimiz</a>
              <a href="#metodoloji" className="hover:text-white transition-colors">Nasıl Çalışıyoruz?</a>
              <a href="#yorumlar" className="hover:text-white transition-colors">Yorumlar/Referanslar</a>
            </div>
          </div>

          {/* Working hours */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="font-serif text-brand-gold font-bold text-sm mb-4">Çalışma Saatleri</h4>
            <div className="flex flex-col gap-3 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold" />
                Pazartesi - Cumartesi: 09:00 - 20:00
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold" />
                Pazar: 11:00 - 18:00
              </p>
              <p className="text-[10px] text-slate-400 mt-2">
                * Görüşmelerimiz randevulu olarak gerçekleştirilmektedir.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-400">
          <p>© 2026 Cevher Danışmanlık. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
