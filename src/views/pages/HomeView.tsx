import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronRight, ScanSearch, Gem, ShieldCheck, MapPin, Mail, Phone, Search as SearchIcon, Camera, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppController, useBullionController } from '../../controllers/appController';
import coverImg from '../../../كوفرر.webp';
import img1 from '../../../1.webp';
import img2 from '../../../2.webp';
import img3 from '../../../سبايك.webp';
import img4 from '../../../4.webp';

export default function HomeView() {
  const { t } = useTranslation();
  const { isRtl } = useAppController();
  const { searchBullion } = useBullionController();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const result = searchBullion(searchTerm);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setHasSearched(true);
    }
  };

  return (
    <div className="bg-premium-black text-gold-50">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 lg:py-0">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'easeOut' }}
            src={coverImg} 
            alt="Luxury Gold" 
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-premium-black via-premium-black/80 to-transparent flex" />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24 pb-12 lg:py-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`max-w-2xl lg:order-1 lg:ml-auto lg:mr-0 ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}
          >
            <h2 className="text-gold-300 text-sm md:text-base tracking-[0.2em] font-bold mb-4 flex items-center gap-4 justify-center lg:justify-start">
              <span className="w-12 h-[1px] bg-gold-400"></span>
              {t('hero.subtitle')}
            </h2>
            <h1 className="serif-text text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-white">
              {t('hero.title').split(' ').map((word, i) => (
                 <span key={i} className={i === 1 || i === 2 ? 'gold-gradient font-black' : ''}>{word} </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-gold-100/80 mb-10 max-w-xl font-light leading-relaxed mx-auto lg:mx-0">
              {t('hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/services" 
                className="bg-gold-500 hover:bg-gold-400 text-premium-black px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group shadow-[0_0_40px_rgba(201,138,35,0.3)] hover:shadow-[0_0_60px_rgba(201,138,35,0.5)]"
              >
                {t('hero.explore')}
                <ArrowRight className={`w-5 h-5 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </Link>
              <Link 
                to="/contact" 
                className="border border-gold-600 hover:bg-gold-900/40 text-gold-200 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center backdrop-blur-sm"
              >
                {t('contact.title')}
              </Link>
            </div>
          </motion.div>

          {/* Verification Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`border border-gold-500/20 bg-premium-black/40 p-8 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(201,138,35,0.15)] max-w-lg mx-auto lg:mx-0 lg:order-2 lg:mr-auto lg:ml-0 text-center group hover:border-gold-500/40 transition-all duration-500 w-full`}
          >
            <div className="relative mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 group-hover:scale-110 transition-all duration-500">
              <ScanSearch className="w-8 h-8" />
              <div className="absolute inset-0 rounded-full bg-gold-500/20 animate-ping opacity-20"></div>
            </div>
            <h2 className="serif-text text-xl md:text-2xl font-bold mb-2 text-gold-200">{t('search.title')}</h2>
            <p className="text-gold-100/60 mb-6 text-xs font-light max-w-xs mx-auto">{t('search.subtitle')}</p>

            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex flex-col gap-3 relative">
                <div className="relative flex-grow">
                  <SearchIcon className={`absolute top-1/2 -translate-y-1/2 text-gold-600 w-5 h-5 ${isRtl ? 'right-4' : 'left-4'}`} />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setHasSearched(false);
                    }}
                    placeholder={t('search.placeholder')}
                    className={`w-full bg-premium-black/60 border border-gold-900/50 rounded-full py-3 ${isRtl ? 'pr-12 pl-4' : 'pl-12 pr-4'} text-gold-50 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-sm font-mono placeholder:font-sans placeholder:text-gold-100/40`}
                  />
                </div>
                
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-premium-black px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap flex-grow text-sm shadow-[0_0_20px_rgba(201,138,35,0.2)] hover:shadow-[0_0_30px_rgba(201,138,35,0.4)]"
                  >
                    {t('search.button')}
                  </button>
                  <button
                    type="button"
                    onClick={() => alert('Image scanning requires camera access to use Gemini API.')}
                    className="bg-premium-black/40 border border-gold-700/50 hover:border-gold-400 text-gold-300 px-3 py-3 rounded-full font-bold transition-all flex items-center justify-center group"
                    title={t('search.scanBtn')}
                  >
                    <Camera className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </form>

            {hasSearched && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="overflow-hidden mt-4"
              >
                {result ? (
                  <div className="bg-green-950/40 border border-green-800/40 rounded-2xl p-4 text-right">
                    <div className="flex items-center gap-2 mb-4 text-green-400 justify-end">
                      <h3 className="text-sm font-bold font-sans">{t('search.results.found')}</h3>
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1">
                        <p className="text-gold-100/50 uppercase tracking-wider font-bold">رقم السبيكة</p>
                        <p className="font-mono text-gold-100">{result.serial}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gold-100/50 uppercase tracking-wider font-bold">{t('search.results.weight')}</p>
                        <p className="font-mono text-gold-200 font-bold">{result.weight}g</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gold-100/50 uppercase tracking-wider font-bold">{t('search.results.purity')}</p>
                        <p className="font-mono text-gold-200 font-bold">{result.purity}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gold-100/50 uppercase tracking-wider font-bold">{t('search.results.issueDate')}</p>
                        <p className="font-mono text-gold-100">{result.issueDate}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-red-950/40 border border-red-900/40 rounded-2xl p-4 text-center">
                    <XCircle className="w-8 h-8 text-red-500 mx-auto mb-2 opacity-80" />
                    <p className="text-red-200/90 font-light text-xs">{t('search.results.notFound')}</p>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="bg-gold-900/20 border-y border-gold-900/50 py-4 overflow-hidden flex w-full">
        <div 
          className={`flex gap-12 items-center whitespace-nowrap ${isRtl ? 'animate-marqueeRtl' : 'animate-marquee'}`}
        >
          {/* First copy */}
          <div className="flex gap-12 items-center px-6 flex-shrink-0">
            {Array(10).fill(null).map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-gold-200/50 uppercase tracking-[0.3em] font-bold text-sm">{t('hero.marquee1')}</span>
                <Gem className="w-4 h-4 text-gold-600/50" />
                <span className="text-gold-200/50 uppercase tracking-[0.3em] font-bold text-sm">{t('hero.marquee2')}</span>
                <Gem className="w-4 h-4 text-gold-600/50" />
                <span className="text-gold-200/50 uppercase tracking-[0.3em] font-bold text-sm">{t('hero.marquee3')}</span>
                <Gem className="w-4 h-4 text-gold-600/50" />
              </React.Fragment>
            ))}
          </div>
          
          {/* Second identical copy for seamless looping */}
          <div className="flex gap-12 items-center px-6 flex-shrink-0">
            {Array(10).fill(null).map((_, i) => (
              <React.Fragment key={i + 10}>
                <span className="text-gold-200/50 uppercase tracking-[0.3em] font-bold text-sm">{t('hero.marquee1')}</span>
                <Gem className="w-4 h-4 text-gold-600/50" />
                <span className="text-gold-200/50 uppercase tracking-[0.3em] font-bold text-sm">{t('hero.marquee2')}</span>
                <Gem className="w-4 h-4 text-gold-600/50" />
                <span className="text-gold-200/50 uppercase tracking-[0.3em] font-bold text-sm">{t('hero.marquee3')}</span>
                <Gem className="w-4 h-4 text-gold-600/50" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Collections Video/Image grid */}
      <section className="py-24 relative bg-premium-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className={`max-w-2xl ${isRtl ? 'text-right' : 'text-left'}`}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="serif-text text-4xl md:text-5xl font-bold text-gold-200 mb-4"
              >
                {t('hero.collections')}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gold-100/60 font-light"
              >
                {t('hero.collectionsSubtitle')}
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: img1, title: t('hero.col1') },
              { img: img2, title: t('hero.col2') },
              { img: img3, title: t('hero.col3') },
            ].map((col, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative group overflow-hidden rounded-2xl ${i === 1 ? 'md:-translate-y-8' : ''}`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={col.img} alt={col.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-premium-black/90 via-premium-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="serif-text text-2xl font-bold text-gold-200 mb-2">{col.title}</h3>
                  <div className="w-12 h-[1px] bg-gold-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Excerpt */}
      <section className="py-24 bg-premium-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="serif-text text-4xl font-bold text-gold-200 mb-4">{t('services.title')}</h2>
            <p className="text-gold-100/60 max-w-2xl mx-auto font-light leading-relaxed">
              {t('services.jewelry.desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-premium-gray p-8 rounded-3xl border border-gold-900/50 transition-all hover:border-gold-700/50 group"
            >
              <Gem className="w-12 h-12 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="serif-text text-2xl font-bold text-gold-200 mb-4">{t('services.jewelry.title')}</h3>
              <p className="text-gold-100/60 leading-relaxed font-light mb-6">{t('services.jewelry.subtitle')}</p>
              <Link to="/services" className="text-gold-400 hover:text-gold-300 font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
                {isRtl ? 'اعرف المزيد' : 'Learn More'}
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-premium-gray p-8 rounded-3xl border border-gold-900/50 transition-all hover:border-gold-700/50 group"
            >
              <ShieldCheck className="w-12 h-12 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="serif-text text-2xl font-bold text-gold-200 mb-4">{t('services.bullion.title')}</h3>
              <p className="text-gold-100/60 leading-relaxed font-light mb-6">{t('services.bullion.desc')}</p>
              <Link to="/services" className="text-gold-400 hover:text-gold-300 font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
                {isRtl ? 'اعرف المزيد' : 'Learn More'}
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
            </motion.div>
          </div>

          <div className="text-center">
            <Link 
              to="/services" 
              className="inline-flex border border-gold-600 hover:bg-gold-900/40 text-gold-200 px-8 py-4 rounded-full font-bold transition-all items-center gap-2"
            >
              {isRtl ? 'عرض كل الخدمات' : 'View All Services'}
            </Link>
          </div>
        </div>
      </section>

      {/* About Excerpt */}
      <section className="py-24 bg-gradient-to-t from-premium-gray to-premium-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src={img4} 
                alt="Craftsmanship" 
                className="rounded-t-full rounded-b-3xl w-full max-w-md mx-auto aspect-[3/4] object-cover border-4 border-premium-black ring-1 ring-gold-800 shadow-[0_0_50px_rgba(201,138,35,0.15)]"
              />
              <div className="absolute -bottom-8 -right-8 (isRtl ? '-left-8' : '-right-8') bg-premium-black p-6 rounded-2xl border border-gold-800 hidden md:block">
                <p className="text-gold-300 font-bold text-5xl serif-text">26+</p>
                <p className="text-gold-100/70 text-sm tracking-widest uppercase mt-1 font-bold">{isRtl ? 'عاماً من التميز' : 'Years of Excellence'}</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-gold-400 text-sm tracking-widest uppercase font-bold">{t('about.title')}</h2>
              <h3 className="serif-text text-4xl md:text-5xl font-bold text-gold-200">{t('about.subtitle')}</h3>
              <p className="text-gold-100/70 leading-relaxed font-light text-lg">
                {t('about.desc1')}
              </p>
              <Link 
                to="/about" 
                className="inline-flex bg-gold-600/10 hover:bg-gold-600/20 border border-gold-600 text-gold-300 px-8 py-4 rounded-full font-bold transition-all items-center gap-2 mt-4"
              >
                {isRtl ? 'اقرأ المزيد عنا' : 'Read More About Us'}
                <ChevronRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Parallax Effect */}
      <section className="py-20 relative overflow-hidden bg-gold-900/10 border-y border-gold-900/30">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #c98a23 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { num: '26+', label: t('hero.statsYears') },
              { num: '10K+', label: t('hero.statsClients') },
              { num: '500+', label: t('hero.statsProducts') },
              { num: '12', label: t('hero.statsBranches') },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="serif-text text-4xl md:text-6xl font-bold bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 inline-block text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
                  {stat.num}
                </div>
                <div className="text-sm tracking-widest uppercase font-bold text-premium-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Contact Excerpt */}
      <section className="py-24 bg-premium-black border-t border-gold-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="serif-text text-4xl font-bold text-gold-200 mb-6">{t('contact.title')}</h2>
              <p className="text-gold-100/70 font-light leading-relaxed mb-8">{t('contact.journeyDesc')}</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-gold-200">
                  <div className="w-10 h-10 rounded-full bg-gold-900/30 flex items-center justify-center flex-shrink-0 mt-1"><Phone size={18} /></div>
                  <div className="flex flex-col gap-1 font-mono" dir="ltr">
                    <a href="tel:+201002223773" className="hover:text-gold-400 transition-colors">010 02223773</a>
                    <a href="tel:+201006320140" className="hover:text-gold-400 transition-colors">010 06320140</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-gold-200">
                  <div className="w-10 h-10 rounded-full bg-gold-900/30 flex items-center justify-center flex-shrink-0 mt-1"><MapPin size={18} /></div>
                  <ul className="space-y-2 text-sm font-light text-gold-100/80">
                    <li>{t('contact.branches.b1')}</li>
                    <li>{t('contact.branches.b2')}</li>
                    <li>{t('contact.branches.b3')}</li>
                  </ul>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="inline-block mt-8 border-b-2 border-gold-600 text-gold-300 font-bold pb-1 hover:text-gold-100 transition-colors"
              >
                {isRtl ? 'تواصل معنا' : 'Contact Us'}
              </Link>
            </div>
            <div>
              <div className="relative group overflow-hidden rounded-3xl border border-gold-800 shadow-2xl">
                <img 
                  src={img4} 
                  alt="Contact" 
                  className="w-full aspect-[4/3] object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
