'use client';

import Header from '@/components/layout/Header';
import { usePostStore } from '@/store/usePostStore';
import Title from '../_components/Title';
import CButton from '@/components/Button';
import { commonBox } from '../_components/commonCSS';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const { updateMenu, menuList, setMenuList } = usePostStore();
    const isUpdating = !!updateMenu;
    const [name, setName] = useState(isUpdating ? updateMenu.name : '');
    const [count, setCount] = useState(
        isUpdating ? updateMenu.count.toString() : '1'
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/[^0-9]/g, '');
        const formatted = Number(numericValue).toLocaleString();
        setCount(formatted);
    };

    const addMenu = () => {
        if (!name || !count) return;

        if (isUpdating) {
            const index = menuList.findIndex(
                menu =>
                    menu.name === updateMenu.name &&
                    menu.count === updateMenu.count
            );
            const newMenuList = [
                ...menuList.slice(0, index),
                { name, count: +count },
                ...menuList.slice(index + 1),
            ];
            setMenuList([...newMenuList]);
        } else {
            const newMenu = { name, count: +count };
            setMenuList([...menuList, newMenu]);
        }

        router.back();
    };

    return (
        <div className="p-4">
            <Header
                type="back"
                title={isUpdating ? '메뉴 수정' : '메뉴 추가'}
            />
            <div className="mt-4">
                <div className="flex flex-col gap-4">
                    {/* 음식 이름 */}
                    <div className="flex flex-col">
                        <Title title="음식 이름" />
                        <input
                            className={`${commonBox} focus:outline-[#60A5FA] focus:outline-1`}
                            placeholder="뿌링클"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                    {/* 음식 수 */}
                    <div className="flex flex-col">
                        <Title title="음식 수" />
                        <div
                            className={`${commonBox} flex justify-between focus-within:border-[#60A5FA]`}
                        >
                            <input
                                type="text"
                                className="w-full bg-transparent focus:outline-none text-gray-900 placeholder-[#94A3B8]"
                                value={count}
                                onChange={handleChange}
                            />
                            <span className="ml-1 text-sm text-[#64748B]">
                                개
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-10 w-full max-w-[361px]">
                <CButton onClick={addMenu}>
                    {isUpdating ? '수정' : '추가'}하기
                </CButton>
            </div>
        </div>
    );
}
