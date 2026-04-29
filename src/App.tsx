import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppController, useAuthController } from './controllers/appController';
import Navbar from './views/components/Navbar';
import Footer from './views/components/Footer';
import HomeView from './views/pages/HomeView';
import AboutView from './views/pages/AboutView';
import ServicesView from './views/pages/ServicesView';
import Collection2026View from './views/pages/Collection2026View';
import ContactView from './views/pages/ContactView';
import SearchView from './views/pages/SearchView';
import DashboardView from './views/pages/DashboardView';
import LoginView from './views/pages/LoginView';
import './i18n';

export default function App() {
  // Initialize app state mapping
  useAppController();
  const { isAuthenticated } = useAuthController();

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/services" element={<ServicesView />} />
            <Route path="/collection-2026" element={<Collection2026View />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/search" element={<SearchView />} />
            <Route path="/admin" element={isAuthenticated ? <DashboardView /> : <Navigate to="/login" replace />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/admin" replace /> : <LoginView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
