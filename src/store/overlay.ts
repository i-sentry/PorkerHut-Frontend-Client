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

export const useSuccessOverlay = create<any>(
  (set: (arg0: (state: any) => { showOverlay: boolean }) => any) => ({
    showOverlay: false,

    setShowOverlays: (shouldShow: boolean) =>
      set((state: any) => ({ showOverlay: shouldShow })),
  })
);

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

interface ISignUpSuccess {
  isOpen: boolean;
  setIsOpen: (value?: boolean) => void;
}

export const useSignUpState = create<ISignUpSuccess>((set) => ({
  isOpen: false,

  setIsOpen: (open: any) => set((state: any) => ({ isOpen: open })),
}));

interface IOrderModal {
  openModal: boolean;
  toggleOpenModal: (value?: boolean) => void;
}

export const useShowModal = create<IOrderModal>((set) => ({
  openModal: false,
  toggleOpenModal: (open: any) => set((state: any) => ({ openModal: open })),
}));

interface IPickupOption {
  openModal: boolean;
  location: string;
  setLocation: (location: string) => void;
  toggleModal: (value: boolean) => void;
}

export const usePopModal = create<IPickupOption>((set) => ({
  openModal: false,
  location: "",
  setLocation: (location: string) =>
    set((state: IPickupOption) => ({ location: location })),
  toggleModal: (open: boolean) =>
    set((state: IPickupOption) => ({ openModal: open })),
}));
