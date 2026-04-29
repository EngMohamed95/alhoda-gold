import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Mail, ArrowRight, Facebook, Instagram } from 'lucide-react';
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
            <p className="text-gold-100/70 font-light mb-4">{t('footer.tagline')}</p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.facebook.com/share/17YhRBWYmP/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-gold-100/70 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/alhodajewellery_2017?igsh=NnlwYjFjdWZudDQ4" target="_blank" rel="noreferrer" className="text-gold-100/70 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://t.me/HodaHGgold" target="_blank" rel="noreferrer" className="text-gold-100/70 hover:text-gold-400 transition-colors" aria-label="Telegram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                </svg>
              </a>
            </div>
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
                  <div className="flex flex-col gap-1 font-mono" dir="ltr">
                    <a href="tel:+201002223773" className="hover:text-gold-300 transition-colors">010 02223773</a>
                    <a href="tel:+201006320140" className="hover:text-gold-300 transition-colors">010 06320140</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gold-100/70">
                  <Mail size={18} className="mt-1 flex-shrink-0" />
                  <div className="flex flex-col gap-1 font-mono">
                    <a href="https://wa.me/201002223773" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                      <span className="font-sans text-xs">{t('footer.whatsapp')}</span>
                      <span>(010)</span>
                    </a>
                    <a href="https://wa.me/201006320140" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                      <span className="font-sans text-xs">{t('footer.whatsapp')}</span>
                      <span>(010)</span>
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gold-100/70 text-xs">
                  <MapPin size={18} className="mt-1 flex-shrink-0 text-gold-400" />
                  <ul className="space-y-2 font-light text-gold-100/80">
                    <li>{t('contact.branches.b1')}</li>
                    <li>{t('contact.branches.b2')}</li>
                    <li>{t('contact.branches.b3')}</li>
                  </ul>
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
