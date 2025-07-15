import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import { useWeeklyReport } from '../hooks/useWeeklyReport';

export default function WeeklyReport() {
    const { carouselData, isLoading, error, setApi } = useWeeklyReport();

    if (isLoading) return <div>로딩 중</div>;
    if (error) return <div>에러</div>;

    console.log(carouselData);

    return (
        <Carousel
            opts={{
                align: 'start',
            }}
            orientation="horizontal"
            className="w-full"
            setApi={setApi}
        >
            <CarouselContent>
                {carouselData.map((item, index) => (
                    <CarouselItem
                        key={item.id}
                        className={`basis-2/3 ${index === 0 ? 'pl-4' : 'pl-2'}`}
                    >
                        <div>
                            <div className="p-4 rounded-20 border-none box-border bg-white flex">
                                <span className="text-3xl font-semibold"></span>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
