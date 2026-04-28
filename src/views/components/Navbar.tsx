import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppController, useAuthController } from '../../controllers/appController';
import { Menu, X, User as UserIcon } from 'lucide-react';
import { useState } from 'react';
import logoImg from '../../logoelhoda.png';

export default function Navbar() {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useAppController();
  const { currentUser } = useAuthController();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.search'), path: '/search' },
    { label: t('nav.contact'), path: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-premium-black/90 backdrop-blur-md border-b border-gold-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImg} alt="Al Hoda Logo" className="h-12 md:h-16 w-auto object-contain" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gold-100 hover:text-gold-300 transition-colors text-sm tracking-widest font-bold uppercase"
              >
                {link.label}
              </Link>
            ))}

            {currentUser ? (
              <Link
                to="/admin"
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-gold-600 bg-gold-900/20 hover:bg-gold-600 hover:text-premium-black text-gold-200 transition-all font-bold text-sm shadow-md"
              >
                <img src={currentUser.avatar} alt="Avatar" className="w-6 h-6 rounded-full" />
                {t('nav.dashboard')}
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-gold-600/50 bg-gold-900/10 hover:bg-gold-900/30 hover:border-gold-500 text-gold-200 hover:text-gold-100 transition-colors text-sm tracking-widest font-bold uppercase"
              >
                <UserIcon size={16} />
                {t('nav.login')}
              </Link>
            )}

            <button
              onClick={toggleLanguage}
              className="px-5 py-2 rounded-full border border-gold-600/50 bg-gold-900/10 hover:bg-gold-900/30 hover:border-gold-500 text-gold-200 hover:text-gold-100 font-bold text-sm transition-all"
            >
              {language === 'en' ? 'عربى' : 'ENG'}
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full border border-gold-700/50 text-gold-200 text-xs font-bold"
            >
              {language === 'en' ? 'عربى' : 'EN'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gold-200">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-premium-gray border-b border-gold-900/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-gold-100 hover:bg-gold-900/20 hover:text-gold-300 font-bold tracking-widest text-sm uppercase"
              >
                {link.label}
              </Link>
            ))}
            {currentUser ? (
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-3 text-gold-300 font-bold tracking-widest text-sm uppercase"
              >
                <img src={currentUser.avatar} alt="Avatar" className="w-5 h-5 rounded-full" />
                {t('nav.dashboard')}
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-3 text-gold-100 font-bold tracking-widest text-sm uppercase"
              >
                <UserIcon size={16} />
                {t('nav.login')}
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
