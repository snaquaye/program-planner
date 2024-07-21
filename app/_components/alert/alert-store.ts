import { create } from "zustand";

type State = {
  isOpen: boolean;
};

type Action = {
  open: () => void;
  close: () => void;
};

const useAlertStore = create<State & Action>((set) => ({
  isOpen: false,
  open: () => {
    set((state) => ({ isOpen: true }));
  },
  close: () => {
    set((state) => ({ isOpen: false }));
  },
}));

export default useAlertStore;
