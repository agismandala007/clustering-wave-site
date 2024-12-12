import { create } from "zustand";

type State = {
  modal: string;
};

type Action = {
  show: () => void;
  hide: () => void;
};

export const ModalStore = create<State & Action>((set) => ({
  modal: "",
  show: () => set({ modal: "open" }),
  hide: () => set({ modal: "" }),
}));
