import { create } from 'zustand';

interface useDeleteStore {
    open: boolean;
    id: string;
    onOpen: (id: string) => void;
    onClose: () => void;
}

const useDelete = create<useDeleteStore>((set) => ({
    open: false,
    id: '',
    onOpen: (id) => set({ open: true, id: id }),
    onClose: () => set({ open: false })
}))

export default useDelete;