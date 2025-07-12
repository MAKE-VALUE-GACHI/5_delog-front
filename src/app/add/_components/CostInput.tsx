'use client';

import { usePostStore } from '@/store/usePostStore';
import { ChangeEvent } from 'react';
import { commonBox } from './commonCSS';

export default function CostInput() {
    const { cost, setCost } = usePostStore();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/[^0-9]/g, '');
        const formatted = Number(numericValue).toLocaleString();
        setCost(formatted);
    };

    return (
        <div
            className={`${commonBox} flex justify-between focus-within:border-[#60A5FA]`}
        >
            <input
                type="text"
                className="w-full bg-transparent focus:outline-none text-gray-900 placeholder-[#94A3B8]"
                placeholder="1,000"
                value={cost}
                onChange={handleChange}
            />
            <span className="ml-1 text-sm text-[#64748B]">원</span>
        </div>
    );
}
