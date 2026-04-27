import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBullionController } from '../../controllers/appController';
import { useAppController } from '../../controllers/appController';
import { ShieldCheck, XCircle, Search as SearchIcon, Camera } from 'lucide-react';
import { motion } from 'motion/react';

export default function SearchView() {
  const { t } = useTranslation();
  const { searchBullion } = useBullionController();
  const { isRtl } = useAppController();
  
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
    <div className="min-h-screen bg-premium-black pt-12 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="serif-text text-4xl md:text-5xl font-bold text-gold-200 mb-4">{t('search.title')}</h1>
          <p className="text-gold-100/60 font-light">{t('search.subtitle')}</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-premium-gray p-6 md:p-8 rounded-3xl border border-gold-900/50 shadow-2xl"
        >
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 relative">
              <div className="relative flex-grow">
                <SearchIcon className={`absolute top-1/2 -translate-y-1/2 text-gold-600 w-6 h-6 ${isRtl ? 'right-4' : 'left-4'}`} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setHasSearched(false);
                  }}
                  placeholder={t('search.placeholder')}
                  className={`w-full bg-premium-black border border-gold-900 rounded-full py-4 ${isRtl ? 'pr-14 pl-6' : 'pl-14 pr-6'} text-gold-50 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-lg font-mono placeholder:font-sans`}
                />
              </div>
              
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-gold-600 hover:bg-gold-500 text-premium-black px-8 py-4 rounded-full font-bold transition-all whitespace-nowrap flex-grow md:flex-grow-0"
                >
                  {t('search.button')}
                </button>
                <button
                  type="button"
                  onClick={() => alert('Image scanning requires camera access to use Gemini API.')}
                  className="bg-premium-black border border-gold-700 hover:border-gold-400 text-gold-300 px-4 py-4 rounded-full font-bold transition-all flex items-center justify-center p-4 group"
                  title={t('search.scanBtn')}
                >
                  <Camera className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </form>

          {hasSearched && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="overflow-hidden"
            >
              {result ? (
                <div className="bg-green-950/30 border border-green-800/50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6 text-green-400">
                    <ShieldCheck className="w-8 h-8" />
                    <h3 className="text-xl font-bold font-sans">{t('search.results.found')}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="space-y-1">
                      <p className="text-gold-100/50 text-xs uppercase tracking-wider font-bold">Sr. No.</p>
                      <p className="font-mono text-gold-100">{result.serial}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gold-100/50 text-xs uppercase tracking-wider font-bold">{t('search.results.weight')}</p>
                      <p className="font-mono text-gold-200 font-bold">{result.weight}g</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gold-100/50 text-xs uppercase tracking-wider font-bold">{t('search.results.purity')}</p>
                      <p className="font-mono text-gold-200 font-bold">{result.purity}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gold-100/50 text-xs uppercase tracking-wider font-bold">{t('search.results.issueDate')}</p>
                      <p className="font-mono text-gold-100">{result.issueDate}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-red-950/30 border border-red-900/50 rounded-2xl p-6 text-center">
                  <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3 opacity-80" />
                  <p className="text-red-200/90 font-light">{t('search.results.notFound')}</p>
                </div>
              )}
            </motion.div>
          )}

          {!hasSearched && (
            <div className="text-center py-12 text-gold-100/30">
              <ShieldCheck className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p className="font-light">{isRtl ? 'اكتب رقم السبيكة للبدء بالتحقق' : 'Type a serial number to begin verification'}</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
