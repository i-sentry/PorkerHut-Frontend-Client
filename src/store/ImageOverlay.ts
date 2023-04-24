import create from "zustand";

interface IOverlay {
  showOverlay: boolean;
  image: string;
  selectedOrderId: string;

  setShowOverlays: (shouldShow: boolean) => void;
  setImage: (img: string) => void;
  setSelectedOrderId: (id: string) => void;
}

export const useImageOverlay = create<IOverlay>((set) => ({
  showOverlay: false,
  image: "",
  selectedOrderId: "",

  setShowOverlays: (shouldShow: boolean) =>
    set((state: any) => ({ showOverlay: shouldShow })),
  setImage: (img: string) => set((state: any) => ({ image: img })),
  setSelectedOrderId: (id: string) =>
    set((state: any) => ({ selectedOrderId: id })),
}));
