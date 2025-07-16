import React from 'react';

const mockData = [2, 9, 15, 22];

interface StatsCalendarProps {
    year: number;
    month: number; // 1~12
    selectedDay: number;
    onSelect: (day: number) => void;
}

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
    const emptyStart = Array.from({ length: offset });
    const emptyEnd = Array.from({
        length: totalGridCells - days.length - offset,
    });

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="grid grid-cols-7 gap-1 mb-2">
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
                {/* 시작 빈 칸 */}
                {emptyStart.map((_, i) => (
                    <div key={`empty-start-${i}`} />
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

                {/* 끝 빈 칸 */}
                {emptyEnd.map((_, i) => (
                    <div key={`empty-end-${i}`} />
                ))}
            </div>
        </div>
    );
}
