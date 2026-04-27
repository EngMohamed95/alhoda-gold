import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Mail } from 'lucide-react';

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
                <p className="text-gold-300 font-bold italic serif-text">"{t('contact.info')}"</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 flex flex-col justify-center"
            >
              <a 
                href="tel:+201000000000" 
                className="flex items-center gap-6 p-6 rounded-2xl bg-premium-black border border-gold-900/40 hover:border-gold-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gold-900/20 flex flex-shrink-0 items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-premium-black transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gold-100/50 uppercase tracking-widest font-bold mb-1">{t('contact.callText')}</p>
                  <p className="font-mono text-gold-200 text-lg">+20 100 000 0000</p>
                </div>
              </a>

              <a 
                href="https://wa.me/201000000000" 
                className="flex items-center gap-6 p-6 rounded-2xl bg-premium-black border border-gold-900/40 hover:border-gold-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-green-900/20 flex flex-shrink-0 items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-premium-black transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gold-100/50 uppercase tracking-widest font-bold mb-1">{t('contact.waText')}</p>
                  <p className="font-mono text-gold-200 text-lg">+20 100 000 0000</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-premium-black border border-gold-900/40">
                <div className="w-12 h-12 rounded-full bg-gold-900/20 flex flex-shrink-0 items-center justify-center text-gold-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gold-100/50 uppercase tracking-widest font-bold mb-1">{t('contact.visitText')}</p>
                  <p className="text-gold-200 text-base font-light">Cairo, Egypt - Complete Address Here</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
