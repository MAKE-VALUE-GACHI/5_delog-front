import Header from '@/components/layout/Header';
import ReportCard from './_components/ReportCard';

export default function Page() {
    return (
        <div className="p-4 h-screen bg-[#f0f5f9]">
            <Header type="back" title="주간 리포트" />
            <div className="flex flex-col gap-4">
                <ReportCard
                    id={0}
                    subtitle="2025년"
                    title="6월 3주차"
                    detail="142,000원 · 12번 · 4번"
                />
                <ReportCard
                    id={0}
                    subtitle="2025년"
                    title="6월 3주차"
                    detail="142,000원 · 12번 · 4번"
                />
                <ReportCard
                    id={0}
                    subtitle="2025년"
                    title="6월 3주차"
                    detail="142,000원 · 12번 · 4번"
                />
                <ReportCard
                    id={0}
                    subtitle="2025년"
                    title="6월 3주차"
                    detail="142,000원 · 12번 · 4번"
                />
            </div>
        </div>
    );
}
