import { create } from 'zustand'

export const usePersonsStore = create((set) => ({
  persons: [],
  setPersons: (persons) => set({ persons }),
}))
