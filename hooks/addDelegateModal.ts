import { create } from 'zustand';

interface useModalStore {
    open: boolean;
    counter: number;
    name: string;
    experience: string;
    grade: number;
    one: string;
    two: string;
    three: string;
    onOpen: () => void;
    decre: (counter: number) => void;
    onUpdate: (name: string, experience: string, grade: number, one: string, two: string, three: string, counter: number) => void;
    onClose: () => void;
}

const addDelegateModal = create<useModalStore>((set) => ({
    open: false,
    counter: 0,
    name: '',
    experience: '',
    grade: 0,
    one: '',
    two: '',
    three: '',
    onOpen: () => set({ open: true, name: '', experience: '', grade: 0, one: '', two: '', three: '' }),
    decre: (counter) => set({counter: counter - 1}),
    onUpdate: (name, experience, grade, one, two, three, counter) => set({ open: true, name: name, experience: experience, grade: grade, one: one, two: two, three: three, counter: counter + 1 }),
    onClose: () => set({ open: false, })
}))

export default addDelegateModal;