import { create } from 'zustand';

interface useUserStore {
    auth: boolean;
    name: string | null;
    email: string | null;
    picture: string | null;
    onUpdate: (name: string | null, email: string | null, picture: string | null) => void;
    onRemove: () => void;
}

const useUser = create<useUserStore>((set) => ({
    auth: false,
    name: null,
    email: null,
    picture: null,
    onUpdate: (name, email, picture) => set({ auth: true, name: name, email: email, picture: picture }),
    onRemove: () => set({ auth: false, name: null, email: null, picture: null })
}))

export default useUser;