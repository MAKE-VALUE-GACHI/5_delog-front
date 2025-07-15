import { Button } from '@/components/ui/button';
import { OrderHistory as OrderHistoryType } from '../types';

export default function DeliveryMetrics({ item }: { item: OrderHistoryType }) {
    return (
        <div className="p-4 bg-white border border-none rounded-20">
            <p className="text-sm font-medium text-slate-500">{item.date}</p>
            <div className="flex justify-between">
                <p className="text-base font-medium text-slate-900">
                    {item.order}
                </p>
                <p className="text-base font-medium text-slate-500">
                    포함 {item.count}개의 메뉴
                </p>
            </div>
            <p className="text-blue-500 font-semibold text-xl">
                {item.amount.toLocaleString()}원
            </p>
            <Button
                className="w-full bg-blue-50 mt-3 p-6 text-blue-500 text-base"
                variant="ghost"
            >
                자세히 보기
            </Button>
        </div>
    );
}
