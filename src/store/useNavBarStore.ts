import { create } from 'zustand'

interface NavBarState {
  activeCategory: string
  currentCategoryIndex: number
  setActiveCategory: (category: string) => void
  setCurrentCategoryIndex: (index: number) => void
}

const useNavBarStore = create<NavBarState>((set) => ({
  activeCategory: 'news',
  currentCategoryIndex: 0,
  setActiveCategory: (category: string) => set({ activeCategory: category }),
  setCurrentCategoryIndex: (index: number) => set({ currentCategoryIndex: index }),
}))

export default useNavBarStore
