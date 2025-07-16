import SectionTitle from '@/components/common/SectionTitle';
import React from 'react';
import { StatsCalendarProps } from '../types';

const mockData = [2, 9, 15, 22];

export default function StatsCalendar({
    year,
    month,
    selectedDay,
    onSelect,
}: StatsCalendarProps) {
    const daysInMonth = new Date(year, month, 0).getDate(); // 실제 일수
    const firstDayOfWeek = new Date(year, month - 1, 1).getDay(); // 0:일 ~ 6:토
    const offset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1; // 월요일 시작 기준

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const totalGridCells = 42; // 7일 * 6주 = 고정된 6줄 달력

    // 이전달 정보
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevYear = month === 1 ? year - 1 : year;
    const prevMonthDays = new Date(prevYear, prevMonth, 0).getDate();
    const emptyStart = Array.from(
        { length: offset },
        (_, i) => prevMonthDays - offset + i + 1
    );

    // 다음달 정보
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;
    const emptyEnd = Array.from(
        {
            length: totalGridCells - days.length - offset,
        },
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
                {/* 시작 빈 칸: 이전달 날짜 */}
                {emptyStart.map((day, i) => (
                    <div
                        key={`empty-start-${i}`}
                        className="flex flex-col items-center justify-center h-10 text-gray-400"
                    >
                        <span>{day}</span>
                    </div>
                ))}

                {/* 날짜 */}
                {days.map(day => (
                    <button
                        key={day}
                        className={`flex flex-col items-center justify-center h-10 rounded-full transition
                            ${selectedDay === day ? 'bg-blue-100 text-blue-700 font-bold' : 'hover:none'}
                        `}
                        onClick={() => onSelect(day)}
                    >
                        <span>{day}</span>
                        {mockData.includes(day) && (
                            <span className="w-1 h-1 bg-blue-500 rounded-full mt-1" />
                        )}
                    </button>
                ))}

                {/* 끝 빈 칸: 다음달 날짜 */}
                {emptyEnd.map((day, i) => (
                    <div
                        key={`empty-end-${i}`}
                        className="flex flex-col items-center justify-center h-10 text-gray-400"
                    >
                        <span>{day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
