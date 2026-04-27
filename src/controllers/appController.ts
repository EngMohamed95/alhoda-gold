import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppState } from '../models/appState';

export function useAppController() {
  const { i18n } = useTranslation();
  const { language, setLanguage } = useAppState();

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, i18n]);

  const toggleLanguage = () => setLanguage(language === 'en' ? 'ar' : 'en');

  return { language, isRtl: language === 'ar', toggleLanguage };
}

export function useAuthController() {
  const { currentUser, login, logout } = useAppState();
  return { currentUser, isAuthenticated: !!currentUser, login, logout };
}

export function useUsersController() {
  const { users, addUser, removeUser } = useAppState();
  return { users, addUser, removeUser };
}

export function useBullionController() {
  const { bullions, addBullion, removeBullion } = useAppState();
  const searchBullion = (serial: string) => bullions.find(b => b.serial.toLowerCase() === serial.toLowerCase().trim());
  return { bullions, addBullion, removeBullion, searchBullion };
}
