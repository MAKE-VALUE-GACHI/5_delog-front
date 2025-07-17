'use client';

import Container from '@/components/layout/Container';
import { useState } from 'react';
import StatsCalendar from './StatsCalendar';
import StatsSummary from './StatsSummary';
// import DeliveryList from './StatsList';
import WeeklySpendingChart from './WeeklySpendingChart';
import AverageOrderValueChart from './AverageOrderValueChart';

export default function Stats() {
    const today = new Date();

    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth() + 1); // 1~12
    const [day, setDay] = useState(today.getDate());

    const handleMonthChange = (newYear: number, newMonth: number) => {
        setYear(newYear);
        setMonth(newMonth);
        setDay(1); // 월 바뀌면 기본 1일로 리셋 (선택 유지할 수도 있음)
    };

    return (
        <Container
            headerType="stats"
            year={year}
            month={month}
            onMonthChange={handleMonthChange}
        >
            <div className="space-y-8 pb-20">
                <StatsSummary />
                <StatsCalendar
                    year={year}
                    month={month}
                    selectedDay={day}
                    onSelect={setDay}
                />
                {/* <DeliveryList /> */}
                <WeeklySpendingChart />
                <AverageOrderValueChart />
            </div>
        </Container>
    );
}
