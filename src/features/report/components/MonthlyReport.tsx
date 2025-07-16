import SectionTitle from '@/components/common/SectionTitle';
import { useMonthlyReport } from '../hooks/useMonthlyReport';

export default function MonthlyReport() {
    const { data, error } = useMonthlyReport();

    if (error || !data) return <div>데이터를 불러오는 데 실패했습니다.</div>;

    return (
        <section className="px-4">
            <SectionTitle
                title="숫자로 보는 이번달"
                hasLink={true}
                linkText="통계 보기"
                linkHref=""
            />
            <div className="p-4 rounded-20 border-none box-border bg-white flex gap-12 mt-4">
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-slate-900 font-normal">
                        배달 횟수
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                        {data.deliveries}번
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-slate-900 font-normal">
                        음식 개수
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                        {data.items}개
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-slate-900 font-normal">
                        소비 금액
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                        {data.price.toLocaleString()}원
                    </p>
                </div>
            </div>
        </section>
    );
}
