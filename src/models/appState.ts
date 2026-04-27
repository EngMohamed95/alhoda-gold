import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Bullion {
  id: string;
  serial: string;
  weight: number;
  purity: string;
  issueDate: string;
}

export interface User {
  id: string;
  username: string;
  password?: string;
  role: 'admin' | 'manager';
  avatar: string;
}

export interface AppState {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  currentUser: User | null;
  users: User[];
  login: (username: string, password: string) => boolean;
  logout: () => void;
  addUser: (user: Omit<User, 'id'>) => void;
  removeUser: (id: string) => void;
  bullions: Bullion[];
  addBullion: (bullion: Omit<Bullion, 'id'>) => void;
  removeBullion: (id: string) => void;
}

export const useAppState = create<AppState>()(
  persist(
    (set, get) => ({
      language: 'ar',
      setLanguage: (lang) => set({ language: lang }),
      currentUser: null,
      users: [
        {
          id: '1',
          username: 'admin',
          password: 'admin123',
          role: 'admin',
          avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=c98a23&color=fff'
        }
      ],
      login: (username, password) => {
        const user = get().users.find(u => u.username === username && u.password === password);
        if (user) {
          set({ currentUser: user });
          return true;
        }
        return false;
      },
      logout: () => set({ currentUser: null }),
      addUser: (user) => set((state) => ({ users: [...state.users, { ...user, id: Math.random().toString(36).substring(7) }] })),
      removeUser: (id) => set((state) => ({ users: state.users.filter(u => u.id !== id) })),
      bullions: [
        {
          id: '1',
          serial: 'GLD-2026-1001',
          weight: 100,
          purity: '999.9',
          issueDate: '2026-01-15'
        },
        {
          id: '2',
          serial: 'GLD-2026-1002',
          weight: 50,
          purity: '999.9',
          issueDate: '2026-02-10'
        }
      ],
      addBullion: (bullion) => set((state) => ({
        bullions: [...state.bullions, { ...bullion, id: Math.random().toString(36).substring(7) }]
      })),
      removeBullion: (id) => set((state) => ({
        bullions: state.bullions.filter(b => b.id !== id)
      }))
    }),
    {
      name: 'alhoda-storage'
    }
  )
);
