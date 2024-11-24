import { create } from 'zustand';

interface DropdownState {
	isOpen: boolean;
	selectedOption: string | null;
	toggleDropdown: () => void;
	selectOption: (option: string) => void;
}

export const useDropdownStore = create<DropdownState>((set) => ({
	isOpen: false,
	selectedOption: null,
	toggleDropdown: () => set((state) => ({ isOpen: !state.isOpen })),
	selectOption: (option) => set({ selectedOption: option, isOpen: false }),
}));
