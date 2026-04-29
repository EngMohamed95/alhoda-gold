import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppController } from '../../controllers/appController';
import logoImg from '../../logoelhoda.png';

export default function Footer() {
  const { t } = useTranslation();
  const { isRtl } = useAppController();

  return (
    <footer className="bg-premium-black pt-16 pb-8 border-t border-gold-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Al Hoda Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-gold-100/70 font-light">{t('footer.tagline')}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold-200">{t('nav.about')}</h4>
            <ul className="space-y-2 text-gold-100/70 text-sm font-light">
              <li>
                <Link to="/collection-2026" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                  <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} />
                  {t('nav.collection2026')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                  <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} />
                  {t('about.vision')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                  <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} />
                  {t('about.mission')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                  <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} />
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold-200">{t('nav.services')}</h4>
            <ul className="space-y-2 text-gold-100/70 text-sm font-light">
              <li>
                <Link to="/services" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                  <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} />
                  {t('services.jewelry.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                  <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} />
                  {t('services.bullion.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                  <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} />
                  {t('services.trading.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold-200">{t('footer.contact')}</h4>
            <div className="space-y-3 text-sm font-light">
              <div className="flex items-start gap-3 text-gold-100/70">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1 font-mono">
                  <a href="tel:+201143885630" className="hover:text-gold-300 transition-colors">011 43885630</a>
                  <a href="tel:+201006320140" className="hover:text-gold-300 transition-colors">010 06320140</a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gold-100/70">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1 font-mono">
                  <a href="https://wa.me/201143885630" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                    <span className="font-sans text-xs">{t('footer.whatsapp')}</span>
                    <span>(011)</span>
                  </a>
                  <a href="https://wa.me/201006320140" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                    <span className="font-sans text-xs">{t('footer.whatsapp')}</span>
                    <span>(010)</span>
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gold-100/70">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{t('footer.visit')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-900/30 pt-8 text-center text-sm text-gold-100/50">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
