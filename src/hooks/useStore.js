import { create } from 'zustand'

const useStore = create((set) => ({
    rollResult: 0,
    setRollResult: (payload) => set((state) => ({rollResult: payload}))
}))

export default useStore;