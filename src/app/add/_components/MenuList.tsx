'use client';

import Title from './Title';
import { usePostStore } from '@/store/usePostStore';
import { commonBox } from './commonCSS';
import CButton from '@/components/Button';

export default function MenuList() {
    const { menuList, setMenuList } = usePostStore();

    const handleUpdate = (index: number) => {};

    const handleDelete = (index: number) => {
        const newMenuList = menuList.filter((menu, idx) => idx !== index);
        setMenuList(newMenuList);
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
                            onClick={() => handleUpdate(index)}
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
            <CButton type="secondary">메뉴 추가하기</CButton>
        </div>
    );
}
