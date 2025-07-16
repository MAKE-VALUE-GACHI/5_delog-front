'use client';

import FullContainer from '@/components/layout/FullContainer';
import DeliveryHistory from '@/features/delivery-history/components/DeliveryHistory';
import MonthlyReport from '@/features/report/components/MonthlyReport';
import WeeklyReport from '@/features/report/components/WeeklyReport';
import AIReport from './AIReport';

export default function App() {
    return (
        <FullContainer headerType="home">
            <div className="space-y-8">
                <AIReport />
                <MonthlyReport />
                <WeeklyReport />
                <DeliveryHistory pageSize={3} />
            </div>
        </FullContainer>
    );
}
