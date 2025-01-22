import { create } from "zustand";

interface CheckStore {
  isChecked: boolean;
  toggleChecked: () => void;
}

export const useCheckStore = create<CheckStore>((set) => ({
  isChecked: true,
  toggleChecked: () => set((state) => ({ isChecked: !state.isChecked })),
}));
