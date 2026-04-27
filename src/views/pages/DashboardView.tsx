import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBullionController, useAuthController, useAppController, useUsersController } from '../../controllers/appController';
import { Trash2, Plus, Database, LogOut, LayoutDashboard, FileText, Settings, Briefcase, Menu, X, Users, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function DashboardView() {
  const { t } = useTranslation();
  const { bullions, addBullion, removeBullion } = useBullionController();
  const { currentUser, logout } = useAuthController();
  const { users, addUser, removeUser } = useUsersController();
  const { isRtl } = useAppController();

  const [activeTab, setActiveTab] = useState('bullions');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [formData, setFormData] = useState({
    serial: '',
    weight: 0,
    purity: '999.9',
    issueDate: new Date().toISOString().split('T')[0],
  });

  const [userFormData, setUserFormData] = useState({
    username: '',
    password: '',
    role: 'manager' as 'admin' | 'manager',
  });

  const [addedMessage, setAddedMessage] = useState(false);
  const [userAddedMessage, setUserAddedMessage] = useState(false);

  // Fallback to avoid crashes if somehow user is not defined during transitions
  if (!currentUser) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.serial && formData.weight > 0) {
      addBullion(formData);
      setFormData({
        serial: '',
        weight: 0,
        purity: '999.9',
        issueDate: new Date().toISOString().split('T')[0],
      });
      setAddedMessage(true);
      setTimeout(() => setAddedMessage(false), 3000);
    }
  };

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userFormData.username && userFormData.password) {
      addUser({
        ...userFormData,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userFormData.username)}&background=random&color=fff`
      });
      setUserFormData({
        username: '',
        password: '',
        role: 'manager',
      });
      setUserAddedMessage(true);
      setTimeout(() => setUserAddedMessage(false), 3000);
    }
  };

  const navItems = [
    { id: 'bullions', label: isRtl ? 'إدارة السبائك' : 'Bullions', icon: <Database size={20} /> },
    { id: 'users', label: t('dashboard.users'), icon: <Users size={20} /> },
    { id: 'content', label: isRtl ? 'محتوى الصفحات' : 'Page Content', icon: <FileText size={20} /> },
    { id: 'services', label: isRtl ? 'الخدمات' : 'Services', icon: <Briefcase size={20} /> },
    { id: 'settings', label: isRtl ? 'الإعدادات' : 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-premium-black pt-20 lg:pt-0 max-w-[100vw] overflow-x-hidden flex flex-col lg:flex-row">
      <div className="lg:hidden fixed top-20 left-0 right-0 p-4 z-40 bg-premium-black border-b border-gold-900/30 flex justify-between">
        <span className="font-bold text-gold-200">{t('dashboard.title')}</span>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gold-200">
          {sidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {(sidebarOpen || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
          <motion.div 
            initial={{ x: isRtl ? 300 : -300 }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? 300 : -300 }}
            className={`fixed lg:sticky top-0 ${isRtl ? 'right-0' : 'left-0'} h-screen w-64 bg-premium-gray border-${isRtl ? 'l' : 'r'} border-gold-900/30 z-50 flex flex-col pt-20 lg:pt-0`}
          >
            {/* User Profile Header */}
            <div className="p-6 border-b border-gold-900/30 flex items-center gap-4 hidden lg:flex bg-gradient-to-b from-premium-black to-premium-gray">
              <img src={currentUser.avatar} alt="Profile" className="w-12 h-12 rounded-full border border-gold-500 shadow-md" />
              <div>
                <p className="text-gold-100 font-bold leading-tight">{currentUser.username}</p>
                <p className="text-gold-500 text-xs uppercase tracking-widest font-black mt-1">{currentUser.role}</p>
              </div>
            </div>

            <nav className="flex-1 px-4 space-y-2 mt-6 overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === item.id 
                      ? 'bg-gold-900/30 text-gold-300 font-bold border border-gold-900/50' 
                      : 'text-gold-100/60 hover:bg-gold-900/10 hover:text-gold-200'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="p-4 border-t border-gold-900/30 bg-premium-black/50">
              <button
                onClick={logout}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-red-400 hover:bg-red-950/30 transition-colors text-sm font-bold border border-transparent hover:border-red-900/50"
              >
                <LogOut className="w-4 h-4" />
                {t('dashboard.logout')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 p-4 lg:p-8 overflow-x-hidden min-h-[calc(100vh-theme(spacing.20))] mt-10 lg:mt-0">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Mobile - Just show title usually, header holds rest */}
          <div className="mb-8 lg:hidden flex items-center gap-4 bg-premium-gray p-4 rounded-2xl border border-gold-900/50">
            <img src={currentUser.avatar} alt="Profile" className="w-10 h-10 rounded-full border border-gold-500" />
            <div>
              <p className="text-gold-100 font-bold uppercase">{currentUser.username}</p>
              <p className="text-gold-500 text-xs">{currentUser.role}</p>
            </div>
          </div>

          {activeTab === 'bullions' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Add Form */}
              <div className="xl:col-span-1">
                <div className="bg-premium-gray p-6 rounded-2xl border border-gold-900/50 shadow-xl">
                  <h2 className="text-xl font-bold text-gold-300 mb-6 flex items-center gap-2">
                    <Plus size={20} />
                    {t('dashboard.addBullion')}
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gold-100/60 mb-2 font-bold">{t('dashboard.serial')}</label>
                      <input
                        type="text"
                        required
                        value={formData.serial}
                        onChange={(e) => setFormData({...formData, serial: e.target.value.toUpperCase()})}
                        className="w-full bg-premium-black border border-gold-900 rounded-lg p-3 text-gold-50 focus:outline-none focus:border-gold-500 font-mono"
                        placeholder="GLD-XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gold-100/60 mb-2 font-bold">{t('dashboard.weight')}</label>
                      <input
                        type="number"
                        required
                        min="0"
                        step="0.01"
                        value={formData.weight || ''}
                        onChange={(e) => setFormData({...formData, weight: parseFloat(e.target.value)})}
                        className="w-full bg-premium-black border border-gold-900 rounded-lg p-3 text-gold-50 focus:outline-none focus:border-gold-500 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gold-100/60 mb-2 font-bold">{t('dashboard.purity')}</label>
                      <input
                        type="text"
                        required
                        value={formData.purity}
                        onChange={(e) => setFormData({...formData, purity: e.target.value})}
                        className="w-full bg-premium-black border border-gold-900 rounded-lg p-3 text-gold-50 focus:outline-none focus:border-gold-500 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gold-100/60 mb-2 font-bold">{t('dashboard.date')}</label>
                      <input
                        type="date"
                        required
                        value={formData.issueDate}
                        onChange={(e) => setFormData({...formData, issueDate: e.target.value})}
                        className="w-full bg-premium-black border border-gold-900 rounded-lg p-3 text-gold-50 focus:outline-none focus:border-gold-500 font-mono"
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gold-600 hover:bg-gold-500 text-premium-black font-bold py-3 rounded-lg transition-colors mt-6"
                    >
                      {t('dashboard.save')}
                    </button>
                    {addedMessage && (
                      <p className="text-green-400 text-sm mt-2 text-center font-bold">{t('dashboard.success')}</p>
                    )}
                  </form>
                </div>
              </div>

              {/* Data Table */}
              <div className="xl:col-span-2">
                <div className="bg-premium-gray rounded-2xl border border-gold-900/50 overflow-hidden shadow-xl">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-premium-black border-b border-gold-900/50">
                          <th className={`p-4 text-xs tracking-widest text-gold-100/60 font-bold ${isRtl ? 'text-right' : 'text-left'}`}>{t('dashboard.serial')}</th>
                          <th className={`p-4 text-xs tracking-widest text-gold-100/60 font-bold ${isRtl ? 'text-right' : 'text-left'}`}>{t('dashboard.weight')}</th>
                          <th className={`p-4 text-xs tracking-widest text-gold-100/60 font-bold ${isRtl ? 'text-right' : 'text-left'}`}>{t('dashboard.purity')}</th>
                          <th className={`p-4 text-xs tracking-widest text-gold-100/60 font-bold ${isRtl ? 'text-right' : 'text-left'}`}>{t('dashboard.date')}</th>
                          <th className="p-4 w-16"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {bullions.map((bullion, index) => (
                          <motion.tr 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            key={bullion.id} 
                            className="border-b border-gold-900/20 hover:bg-gold-900/40 transition-colors"
                          >
                            <td className="p-4 font-mono text-gold-200">{bullion.serial}</td>
                            <td className="p-4 font-mono">{bullion.weight}g</td>
                            <td className="p-4 font-mono">{bullion.purity}</td>
                            <td className="p-4 text-gold-100/70 font-mono">{bullion.issueDate}</td>
                            <td className="p-4">
                              <button 
                                onClick={() => removeBullion(bullion.id)}
                                className="text-red-400/70 hover:text-red-400 transition-colors p-2"
                                title={t('dashboard.delete')}
                              >
                                <Trash2 size={16} />
                              </button>
                            </td>
                          </motion.tr>
                        ))}
                        {bullions.length === 0 && (
                          <tr>
                            <td colSpan={5} className="p-8 text-center text-gold-100/40 font-light">
                              {isRtl ? 'لا توجد سبائك مسجلة بعد.' : 'No bullions registered yet.'}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'users' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Add User Form - Visible only if admin */}
              {currentUser.role === 'admin' ? (
                <div className="xl:col-span-1">
                  <div className="bg-premium-gray p-6 rounded-2xl border border-gold-900/50 shadow-xl">
                    <h2 className="text-xl font-bold text-gold-300 mb-6 flex items-center gap-2">
                      <UserPlus size={20} />
                      {t('dashboard.addUser')}
                    </h2>
                    
                    <form onSubmit={handleUserSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-gold-100/60 mb-2 font-bold">{t('dashboard.username')}</label>
                        <input
                          type="text"
                          required
                          value={userFormData.username}
                          onChange={(e) => setUserFormData({...userFormData, username: e.target.value})}
                          className="w-full bg-premium-black border border-gold-900 rounded-lg p-3 text-gold-50 focus:outline-none focus:border-gold-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-gold-100/60 mb-2 font-bold">{t('login.password')}</label>
                        <input
                          type="password"
                          required
                          value={userFormData.password}
                          onChange={(e) => setUserFormData({...userFormData, password: e.target.value})}
                          className="w-full bg-premium-black border border-gold-900 rounded-lg p-3 text-gold-50 focus:outline-none focus:border-gold-500 font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-gold-100/60 mb-2 font-bold">{t('dashboard.role')}</label>
                        <select
                          value={userFormData.role}
                          onChange={(e) => setUserFormData({...userFormData, role: e.target.value as 'admin'|'manager'})}
                          className="w-full bg-premium-black border border-gold-900 rounded-lg p-3 text-gold-50 focus:outline-none focus:border-gold-500"
                        >
                          <option value="manager">Manager</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gold-600 hover:bg-gold-500 text-premium-black font-bold py-3 rounded-lg transition-colors mt-6"
                      >
                        {t('dashboard.addUser')}
                      </button>
                      {userAddedMessage && (
                        <p className="text-green-400 text-sm mt-2 text-center font-bold">{t('dashboard.userAdded')}</p>
                      )}
                    </form>
                  </div>
                </div>
              ) : (
                <div className="xl:col-span-1 border border-red-900/50 bg-red-950/20 p-6 rounded-2xl flex items-center justify-center text-center">
                  <p className="text-red-400">You do not have permission to add users.</p>
                </div>
              )}

              {/* Users Table */}
              <div className="xl:col-span-2">
                <div className="bg-premium-gray rounded-2xl border border-gold-900/50 overflow-hidden shadow-xl">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-premium-black border-b border-gold-900/50">
                          <th className={`p-4 text-xs tracking-widest text-gold-100/60 font-bold w-16`}></th>
                          <th className={`p-4 text-xs tracking-widest text-gold-100/60 font-bold ${isRtl ? 'text-right' : 'text-left'}`}>{t('dashboard.username')}</th>
                          <th className={`p-4 text-xs tracking-widest text-gold-100/60 font-bold ${isRtl ? 'text-right' : 'text-left'}`}>{t('dashboard.role')}</th>
                          <th className="p-4 w-16"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => (
                          <motion.tr 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            key={user.id} 
                            className="border-b border-gold-900/20 hover:bg-gold-900/40 transition-colors"
                          >
                            <td className="p-4">
                              <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full border border-gold-700 mx-auto" />
                            </td>
                            <td className="p-4 font-bold text-gold-200">{user.username}</td>
                            <td className="p-4">
                              <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${user.role === 'admin' ? 'bg-gold-900/50 text-gold-300 border border-gold-600' : 'bg-gray-800 text-gray-300 border border-gray-600'}`}>
                                {user.role}
                              </span>
                            </td>
                            <td className="p-4">
                              {currentUser.role === 'admin' && user.id !== currentUser.id && (
                                <button 
                                  onClick={() => removeUser(user.id)}
                                  className="text-red-400/70 hover:text-red-400 transition-colors p-2"
                                  title={t('dashboard.delete')}
                                >
                                  <Trash2 size={16} />
                                </button>
                              )}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab !== 'bullions' && activeTab !== 'users' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-20 text-center bg-premium-gray rounded-3xl border border-gold-900/30">
              <Settings className="w-16 h-16 text-gold-900/50 mb-6" />
              <h2 className="text-2xl font-bold text-gold-200 mb-2">
                {isRtl ? 'قيد التطوير' : 'Coming Soon'}
              </h2>
              <p className="text-gold-100/50 max-w-md">
                {isRtl 
                  ? 'هذه الميزة قيد التطوير حالياً وسيتم إضافتها في التحديثات القادمة لتمكينك من إدارة محتوى الموقع بسهولة.' 
                  : 'This feature is currently under development. It will be available in future updates to let you manage your website content easily.'}
              </p>
            </motion.div>
          )}

        </div>
      </main>
    </div>
  );
}
