import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Gem, ShieldCheck, Diamond, Sparkles, Crown } from 'lucide-react';

export default function ServicesView() {
  const { t } = useTranslation();

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
            {t('nav.services')}
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="serif-text text-4xl md:text-6xl font-bold text-gold-100"
          >
            {t('services.title')}
          </motion.h1>
        </div>

        {/* Jewelry Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 space-y-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <Gem className="w-10 h-10 text-gold-500 flex-shrink-0" />
                <h2 className="serif-text text-3xl md:text-4xl font-bold text-gold-200">{t('services.jewelry.title')}</h2>
              </div>
              <h3 className="text-xl text-gold-300 font-bold">{t('services.jewelry.subtitle')}</h3>
              <p className="text-gold-100/70 leading-relaxed font-light text-lg">
                {t('services.jewelry.desc')}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative group overflow-hidden rounded-3xl border border-gold-800 shadow-[0_0_50px_rgba(201,138,35,0.15)]">
                <img 
                  src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1000" 
                  alt="Jewelry" 
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          {/* Sub-products grid */}
          <h4 className="text-2xl font-bold text-center text-gold-300 mb-10">{t('services.jewelry.itemsTitle')}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard 
              icon={<Crown />}
              title={t('services.jewelry.setsTitle')}
              desc={t('services.jewelry.setsDesc')}
            />
            <ProductCard 
              icon={<Sparkles />}
              title={t('services.jewelry.dailyTitle')}
              desc={t('services.jewelry.dailyDesc')}
            />
            <ProductCard 
              icon={<Diamond />}
              title={t('services.jewelry.customTitle')}
              desc={t('services.jewelry.customDesc')}
            />
            <ProductCard 
              icon={<Gem />}
              title={t('services.jewelry.weddingTitle')}
              desc={t('services.jewelry.weddingDesc')}
            />
          </div>
        </section>

        {/* Bullion & Trading Section */}
        <section className="bg-premium-gray rounded-3xl p-8 md:p-12 border border-gold-900/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="w-10 h-10 text-gold-500 flex-shrink-0" />
                <h2 className="serif-text text-3xl font-bold text-gold-200">{t('services.bullion.title')}</h2>
              </div>
              <h3 className="text-lg text-gold-300 font-bold">{t('services.bullion.subtitle')}</h3>
              <p className="text-gold-100/70 leading-relaxed font-light text-base">
                {t('services.bullion.desc')}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="w-10 h-10 text-gold-500 flex-shrink-0" />
                <h2 className="serif-text text-3xl font-bold text-gold-200">{t('services.trading.title')}</h2>
              </div>
              <h3 className="text-lg text-gold-300 font-bold">{t('services.trading.subtitle')}</h3>
              <p className="text-gold-100/70 leading-relaxed font-light text-base">
                {t('services.trading.desc')}
              </p>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}

function ProductCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-premium-black border border-gold-900/50 p-6 rounded-2xl text-center group transition-colors hover:border-gold-700/50"
    >
      <div className="w-12 h-12 rounded-full bg-gold-900/20 text-gold-400 mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h5 className="text-gold-200 font-bold mb-3">{title}</h5>
      <p className="text-gold-100/60 font-light text-sm">{desc}</p>
    </motion.div>
  );
}
