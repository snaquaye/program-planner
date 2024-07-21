import { create } from "zustand";

type State = {
  isOpen: boolean;
}

type Actions = {
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
}

const useDrawerStore = create<State & Actions>((set) => ({
  isOpen: false,
  openDrawer: () => {
    set((state) => ({ isOpen: true }));
  },
  closeDrawer: () => {
    set((state) => ({isOpen: false}));
  },
  toggleDrawer() {
    set((state) => ({isOpen: !state.isOpen}))
  }
}));

export default useDrawerStore;