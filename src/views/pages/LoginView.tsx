import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthController } from '../../controllers/appController';
import { Lock, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function LoginView() {
  const { t } = useTranslation();
  const { login } = useAuthController();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-premium-black pt-24 pb-24 px-4 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-premium-gray p-8 rounded-3xl border border-gold-900/50 shadow-2xl"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-premium-black flex items-center justify-center mx-auto mb-4 border border-gold-900">
            <Lock className="w-8 h-8 text-gold-500" />
          </div>
          <h1 className="serif-text text-3xl font-bold text-gold-200">{t('login.title')}</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-gold-100/60 mb-2 font-bold">
              {t('login.username')}
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError(false);
              }}
              className="w-full bg-premium-black border border-gold-900 rounded-xl p-4 text-gold-50 focus:outline-none focus:border-gold-500 transition-all font-mono"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gold-100/60 mb-2 font-bold">
              {t('login.password')}
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className="w-full bg-premium-black border border-gold-900 rounded-xl p-4 text-gold-50 focus:outline-none focus:border-gold-500 transition-all font-mono"
            />
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-400 text-sm bg-red-950/30 p-3 rounded-lg border border-red-900/50"
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{t('login.error')}</span>
            </motion.div>
          )}

          <button
            type="submit"
            className="w-full bg-gold-600 hover:bg-gold-500 text-premium-black font-bold py-4 rounded-xl transition-all"
          >
            {t('login.button')}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
