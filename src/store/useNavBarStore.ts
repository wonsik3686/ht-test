import { create } from 'zustand'

interface NavBarState {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

const useNavBarStore = create<NavBarState>((set) => ({
  activeCategory: 'news',
  setActiveCategory: (category: string) => set({ activeCategory: category }),
}))

export default useNavBarStore
