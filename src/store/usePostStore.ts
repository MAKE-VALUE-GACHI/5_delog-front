import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const getToday = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    return `${year}-${month > 9 ? month : `0${month}`}-${date}`;
};

const mockMenuData = [
    { name: '우삼겹 메밀면 누들면', count: 1 },
    { name: '찹쌀떡', count: 3 },
];

export interface IMenu {
    name: string;
    count: number;
}

interface PostState {
    menuList: IMenu[];
    cost: string;
    date: string;
}

interface PostAction {
    setMenuList: (menuList: IMenu[]) => void;
    setCost: (cost: string) => void;
    setDate: (date: string) => void;
}

export const usePostStore = create<PostState & PostAction>()(
    devtools(set => ({
        menuList: mockMenuData,
        cost: '',
        date: getToday(),

        setMenuList: menuList => set({ menuList }),
        setCost: cost => set({ cost }),
        setDate: date => set({ date }),
    }))
);
