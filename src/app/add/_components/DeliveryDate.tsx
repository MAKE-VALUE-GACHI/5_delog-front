'use client';

import { usePostStore } from '@/store/usePostStore';
import { commonBox } from './commonCSS';
import Title from './Title';
import { ChangeEvent } from 'react';

export default function DeliveryDate() {
    const { date, setDate } = usePostStore();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };

    return (
        <div>
            <Title title="배달 날짜" />
            <div className={`${commonBox}`}>
                <input
                    type="date"
                    className="w-full bg-transparent focus:outline-none text-gray-900"
                    value={date}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
