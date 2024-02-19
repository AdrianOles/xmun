import { create } from 'zustand';

interface useUserStore {
    auth: boolean;
    name: string | null | undefined;
    email: string | null | undefined;
    picture: string | null | undefined;
    onUpdate: (name: string | null | undefined, email: string | null | undefined, picture: string | null | undefined) => void;
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