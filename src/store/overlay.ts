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

//edit category
interface IModal {
  showModal: boolean;
  category: string;
  selectedCategoryId: string;

  setShowModal: (shouldShow: boolean) => void;
  setCategory: (img: string) => void;
  setSelectedCategoryId: (id: string) => void;
}

export const useCategoryModal = create<IModal>((set) => ({
  showModal: false,
  category: "",
  selectedCategoryId: "",

  setShowModal: (shouldShow: boolean) =>
    set((state: any) => ({ showModal: shouldShow })),
  setCategory: (cat: string) => set((state: any) => ({ category: cat })),
  setSelectedCategoryId: (id: string) =>
    set((state: any) => ({ selectedCategoryId: id })),
}));

interface ISideBarState {
  sideBarOpen: boolean;

  toggleSidebar: (value?: boolean) => void;
}

export const useSidebarState = create<ISideBarState>((set) => ({
  sideBarOpen: false,

  toggleSidebar: (value?: boolean) =>
    set((state) => ({ sideBarOpen: value ?? !state.sideBarOpen })),
}));
