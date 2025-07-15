import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import { useWeeklyReport } from '../hooks/useWeeklyReport';
import Spinner from '@/components/Spinner';
import SectionTitle from '@/components/common/SectionTitle';

export default function WeeklyReport() {
    const { carouselData, isLoading, error, setApi } = useWeeklyReport();

    if (isLoading) return <Spinner />;
    if (error) return <div>데이터를 불러오는 데 실패했습니다.</div>;

    return (
        <section>
            <SectionTitle
                title="주간 리포트"
                hasLink={true}
                linkText="전체 보기"
                linkHref=""
                hasPadding={true}
            />
            <Carousel
                opts={{
                    align: 'start',
                }}
                orientation="horizontal"
                className="w-full mt-4"
                setApi={setApi}
            >
                <CarouselContent>
                    {carouselData.map((item, index) => (
                        <CarouselItem
                            key={item.id}
                            className={`basis-2/3 ${index === 0 ? 'pl-4' : 'pl-2'}`}
                        >
                            <div>
                                {item.isViewAll ? (
                                    <div className="p-4 rounded-20 border-2 border-blue-200 box-border bg-blue-50">
                                        <p className="text-blue-400 text-sm font-medium">
                                            주간 리포트
                                        </p>
                                        <p className="mt-6 text-blue-600 text-sm font-medium">
                                            상세페이지에서
                                        </p>
                                        <div className="flex items-center">
                                            <p className="text-blue-700 text-xl font-semibold">
                                                자세히 보기
                                            </p>
                                            <div
                                                className="w-4 h-4 bg-blue-700"
                                                style={{
                                                    mask: 'url(/arrow_right.svg) no-repeat center',
                                                    maskSize: 'contain',
                                                    WebkitMask:
                                                        'url(/arrow_right.svg) no-repeat center',
                                                    WebkitMaskSize: 'contain',
                                                }}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-4 rounded-20 border-none box-border bg-white">
                                        <p className="text-sm text-slate-500 font-medium">
                                            {item.date?.year}
                                        </p>
                                        <p className="text-slate-900 font-semibold text-xl">
                                            {item.date?.month}월{' '}
                                            {item.date?.week}
                                            주차
                                        </p>
                                        <p className="mt-6 text-slate-500 text-sm font-normal">
                                            {item.price?.toLocaleString()}원 ·
                                            총 주문 횟수
                                            {item.amount}번
                                        </p>
                                    </div>
                                )}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
}
