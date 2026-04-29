import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Mail, Facebook, Instagram } from 'lucide-react';

export default function ContactView() {
  const { t } = useTranslation();

  return (
    <div className="bg-premium-black text-gold-50 min-h-screen pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-400 text-sm tracking-widest uppercase font-bold mb-4"
          >
            {t('nav.contact')}
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="serif-text text-4xl md:text-6xl font-bold text-gold-100"
          >
            {t('contact.title')}
          </motion.h1>
        </div>

        <div className="bg-premium-gray border border-gold-900/50 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h3 className="serif-text text-2xl font-bold text-gold-200 mb-4">{t('contact.startJourney')}</h3>
                <p className="text-gold-100/70 font-light leading-relaxed mb-4">
                  {t('contact.desc')}
                </p>
                <p className="text-gold-100/70 font-light leading-relaxed">
                  {t('contact.journeyDesc')}
                </p>
              </div>
              <div className="pt-6 border-t border-gold-900/40">
                <p className="text-gold-300 font-bold italic serif-text mb-6">"{t('contact.info')}"</p>
                <div className="flex items-center gap-6 pt-4 border-t border-gold-900/20">
                  <span className="text-gold-200 text-sm font-bold tracking-widest uppercase">{t('footer.contact')}</span>
                  <div className="flex items-center gap-4">
                    <a href="https://www.facebook.com/share/17YhRBWYmP/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-gold-100/70 hover:text-gold-400 transition-colors" aria-label="Facebook">
                      <Facebook size={24} />
                    </a>
                    <a href="https://www.instagram.com/alhodajewellery_2017?igsh=NnlwYjFjdWZudDQ4" target="_blank" rel="noreferrer" className="text-gold-100/70 hover:text-gold-400 transition-colors" aria-label="Instagram">
                      <Instagram size={24} />
                    </a>
                    <a href="https://t.me/HodaHGgold" target="_blank" rel="noreferrer" className="text-gold-100/70 hover:text-gold-400 transition-colors" aria-label="Telegram">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 flex flex-col justify-center"
            >
              <div className="p-6 rounded-2xl bg-premium-black border border-gold-900/40 flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-gold-900/20 flex flex-shrink-0 items-center justify-center text-gold-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gold-100/50 uppercase tracking-widest font-bold mb-2">{t('contact.callText')}</p>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+201002223773" className="font-mono text-gold-200 text-lg hover:text-gold-400 transition-colors" dir="ltr">010 02223773</a>
                    <a href="tel:+201006320140" className="font-mono text-gold-200 text-lg hover:text-gold-400 transition-colors" dir="ltr">010 06320140</a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-premium-black border border-gold-900/40 flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-green-900/20 flex flex-shrink-0 items-center justify-center text-green-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gold-100/50 uppercase tracking-widest font-bold mb-2">{t('contact.waText')}</p>
                  <div className="flex flex-col gap-2">
                    <a href="https://wa.me/201002223773" className="font-mono text-gold-200 text-lg hover:text-gold-400 transition-colors" dir="ltr">010 02223773</a>
                    <a href="https://wa.me/201006320140" className="font-mono text-gold-200 text-lg hover:text-gold-400 transition-colors" dir="ltr">010 06320140</a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-premium-black border border-gold-900/40 flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-gold-900/20 flex flex-shrink-0 items-center justify-center text-gold-400 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gold-100/50 uppercase tracking-widest font-bold mb-3">{t('contact.visitText')}</p>
                  <ul className="space-y-4 text-gold-200 text-sm font-light">
                    <li className="border-b border-gold-900/20 pb-2 last:border-none last:pb-0">
                      {t('contact.branches.b1')}
                    </li>
                    <li className="border-b border-gold-900/20 pb-2 last:border-none last:pb-0">
                      {t('contact.branches.b2')}
                    </li>
                    <li className="border-b border-gold-900/20 pb-2 last:border-none last:pb-0">
                      {t('contact.branches.b3')}
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
