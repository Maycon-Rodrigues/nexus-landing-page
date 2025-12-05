import { create } from 'zustand';

interface GameState {
  initialLanguage: 'en-US' | 'pt-BR';
  setLanguage: (lang: 'en-US' | 'pt-BR') => void;
  showLanding: boolean;
  setShowLanding: (show: boolean) => void;
}

export const useGameStore = create<GameState>((set) => ({
  initialLanguage: 'en-US',
  setLanguage: (lang) => set({ initialLanguage: lang }),
  showLanding: true,
  setShowLanding: (show) => set({ showLanding: show }),
}));
