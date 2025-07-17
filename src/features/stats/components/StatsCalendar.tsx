// StatsCalendar.tsx
import SectionTitle from '@/components/common/SectionTitle';
import React from 'react';
import { StatsCalendarProps } from '../types';
import { useMonthlyStats } from '../hooks';

export default function StatsCalendar({
    year,
    month,
    selectedDay,
    onSelect,
}: StatsCalendarProps) {
    const { deliveryDates, isLoading } = useMonthlyStats(year, month);

    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
    const offset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const totalGridCells = 42;

    // 이전달, 다음달 정보 계산 (기존 코드 유지)
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevYear = month === 1 ? year - 1 : year;
    const prevMonthDays = new Date(prevYear, prevMonth, 0).getDate();
    const emptyStart = Array.from(
        { length: offset },
        (_, i) => prevMonthDays - offset + i + 1
    );

    const emptyEnd = Array.from(
        { length: totalGridCells - days.length - offset },
        (_, i) => i + 1
    );

    return (
        <div className="w-full max-w-md mx-auto">
            <SectionTitle title="배달 내역" />
            <div className="grid grid-cols-7 gap-1 my-2">
                {['월', '화', '수', '목', '금', '토', '일'].map(d => (
                    <div
                        key={d}
                        className="text-center text-xs text-muted-foreground"
                    >
                        {d}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {/* 이전달 날짜 */}
                {emptyStart.map((day, i) => (
                    <div
                        key={`empty-start-${i}`}
                        className="flex flex-col items-center justify-center h-10 text-gray-400"
                    >
                        <span>{day}</span>
                    </div>
                ))}

                {/* 현재 달 날짜 */}
                {days.map(day => (
                    <button
                        key={day}
                        className={`flex flex-col items-center justify-center h-10 rounded-full transition
                            ${selectedDay === day ? 'bg-blue-100 text-blue-700 font-bold' : 'hover:bg-gray-50'}
                        `}
                        onClick={() => onSelect(day)}
                    >
                        <span>{day}</span>
                        {deliveryDates.includes(day) && (
                            <span className="w-1 h-1 bg-blue-500 rounded-full mt-1" />
                        )}
                    </button>
                ))}

                {/* 다음달 날짜 */}
                {emptyEnd.map((day, i) => (
                    <div
                        key={`empty-end-${i}`}
                        className="flex flex-col items-center justify-center h-10 text-gray-400"
                    >
                        <span>{day}</span>
                    </div>
                ))}
            </div>
            {isLoading && (
                <div className="text-center text-sm text-gray-500 mt-2">
                    로딩 중...
                </div>
            )}
        </div>
    );
}
