import { create } from 'zustand';

interface useNavStore {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useNav = create<useNavStore>((set) => ({
    open: false,
    onOpen: () => set({ open: true }),
    onClose: () => set({ open: false })
}))

export default useNav;