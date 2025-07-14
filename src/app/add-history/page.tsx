'use client';

import Header from '@/components/layout/Header';
import { useEffect } from 'react';
import { usePostStore } from '@/store/usePostStore';
import AICard from './_components/AICard';
import MenuList from './_components/MenuList';
import DeliveryDate from './_components/DeliveryDate';
import CButton from '@/components/Button';
import Title from './_components/Title';
import CostInput from './_components/CostInput';

export default function AddHistoryPage() {
    const { setUpdateMenu } = usePostStore();

    useEffect(() => {
        setUpdateMenu(null);
    }, []);

    return (
        <div className="p-4 pb-40">
            <Header type="back" title="내역 추가" />

            <div className="mt-4">
                <AICard />
                <MenuList />
                <div className="py-4">
                    <Title title="가격" />
                    <CostInput />
                </div>
                <DeliveryDate />
            </div>

            <div className="fixed bottom-10 w-full max-w-[361px] ">
                <CButton>등록하기</CButton>
            </div>
        </div>
    );
}
