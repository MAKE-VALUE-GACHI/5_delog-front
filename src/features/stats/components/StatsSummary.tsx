import { useMonthlyReport } from '@/features/report/hooks/useMonthlyReport';

export default function StatsSummary() {
    const { data, error } = useMonthlyReport();

    if (error || !data) return <div>데이터를 불러오는 데 실패했습니다.</div>;

    return (
        <div className="p-4 rounded-20 border-none box-border bg-white flex gap-12 mt-4">
            <div className="flex flex-col gap-1">
                <p className="text-sm text-slate-900 font-normal">배달 횟수</p>
                <p className="text-lg font-semibold text-slate-900">
                    {data.deliveries}번
                </p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm text-slate-900 font-normal">음식 개수</p>
                <p className="text-lg font-semibold text-slate-900">
                    {data.items}개
                </p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm text-slate-900 font-normal">소비 금액</p>
                <p className="text-lg font-semibold text-slate-900">
                    {data.price.toLocaleString()}원
                </p>
            </div>
        </div>
    );
}
