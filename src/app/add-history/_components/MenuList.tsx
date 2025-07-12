'use client';

import Title from './Title';
import { IMenu, usePostStore } from '@/store/usePostStore';
import { commonBox } from './commonCSS';
import CButton from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function MenuList() {
    const router = useRouter();
    const { menuList, setMenuList, setUpdateMenu } = usePostStore();

    const handleUpdate = (menu: IMenu) => {
        setUpdateMenu(menu);
        router.push('/add-history/add');
    };

    const handleDelete = (index: number) => {
        const newMenuList = menuList.filter((menu, idx) => idx !== index);
        setMenuList(newMenuList);
    };

    const handleAdd = () => {
        router.push('/add-history/add');
    };

    return (
        <div className="py-4 flex flex-col gap-2">
            <Title title="메뉴 목록" />
            {menuList.map((menu, index) => (
                <div
                    key={menu.name + index}
                    className={`flex justify-between ${commonBox}`}
                >
                    <div className="flex gap-2 items-center">
                        <p>{menu.name}</p>
                        <p className="text-[14px] text-[#64748B]">
                            {menu.count}개
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div
                            className="text-[#3B82F6] text-[14px] hover:cursor-pointer"
                            onClick={() => handleUpdate(menu)}
                        >
                            수정
                        </div>
                        <div
                            className="text-[#EF4444] text-[14px] hover:cursor-pointer"
                            onClick={() => handleDelete(index)}
                        >
                            삭제
                        </div>
                    </div>
                </div>
            ))}
            <CButton buttonType="secondary" onClick={handleAdd}>
                메뉴 추가하기
            </CButton>
        </div>
    );
}
