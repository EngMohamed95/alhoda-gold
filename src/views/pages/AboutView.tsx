import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useAppController } from '../../controllers/appController';
import { ShieldCheck, TrendingUp, Award } from 'lucide-react';
import img4 from '../../../4.webp';

export default function AboutView() {
  const { t } = useTranslation();
  const { isRtl } = useAppController();

  return (
    <div className="bg-premium-black text-gold-50 min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-400 text-sm tracking-widest uppercase font-bold mb-4"
          >
            {t('about.title')}
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="serif-text text-4xl md:text-6xl font-bold text-gold-100"
          >
            {t('about.subtitle')}
          </motion.h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
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
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gold-100/80 leading-relaxed font-light text-lg">{t('about.desc1')}</p>
            <p className="text-gold-100/80 leading-relaxed font-light text-lg">{t('about.desc2')}</p>
            
            <div className="pt-8 space-y-8">
              <div className="bg-premium-gray p-6 rounded-2xl border border-gold-900/40">
                <h4 className="text-gold-300 font-bold text-xl mb-3 flex items-center gap-3">
                  <TrendingUp size={24} className="text-gold-500" />
                  {t('about.vision')}
                </h4>
                <p className="text-base text-gold-100/70 font-light leading-relaxed">{t('about.visionDesc')}</p>
              </div>
              <div className="bg-premium-gray p-6 rounded-2xl border border-gold-900/40">
                <h4 className="text-gold-300 font-bold text-xl mb-3 flex items-center gap-3">
                  <ShieldCheck size={24} className="text-gold-500" />
                  {t('about.mission')}
                </h4>
                <p className="text-base text-gold-100/70 font-light leading-relaxed">{t('about.missionDesc')}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-premium-gray rounded-3xl p-12 border border-gold-900/50"
        >
          <div className="text-center mb-12">
            <h3 className="serif-text text-3xl md:text-4xl font-bold">{t('about.whyUs')}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-premium-black mx-auto flex items-center justify-center border border-gold-800">
                <Award className="w-8 h-8 text-gold-400" />
              </div>
              <h4 className="font-bold text-lg text-gold-200">{t('about.yearsTitle')}</h4>
              <p className="text-gold-100/60 font-light">{t('about.yearsDesc')}</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-premium-black mx-auto flex items-center justify-center border border-gold-800">
                <ShieldCheck className="w-8 h-8 text-gold-400" />
              </div>
              <h4 className="font-bold text-lg text-gold-200">{t('about.qualityTitle')}</h4>
              <p className="text-gold-100/60 font-light">{t('about.qualityDesc')}</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-premium-black mx-auto flex items-center justify-center border border-gold-800">
                <TrendingUp className="w-8 h-8 text-gold-400" />
              </div>
              <h4 className="font-bold text-lg text-gold-200">{t('about.designTitle')}</h4>
              <p className="text-gold-100/60 font-light">{t('about.designDesc')}</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
