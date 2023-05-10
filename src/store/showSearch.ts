import { AnyStyledComponent } from "styled-components";
import create from "zustand";

export interface ISearch {
  showSearch: any;
  setShowSearch: (shouldShowSearch: any) => void;
}

export const useSearchStore = create<ISearch>((set) => ({
  showSearch: false,

  setShowSearch: (shouldShowSearch: any) =>
    set((state: any) => ({ showSearch: shouldShowSearch })),
}));
