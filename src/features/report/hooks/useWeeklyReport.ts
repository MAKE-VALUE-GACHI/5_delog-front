import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import type { CarouselApi } from '@/components/ui/carousel';

import { reportApi } from '../api/weeklyReport';
import { queryKeys } from '@/lib/queryKeys';

export const useWeeklyReport = () => {
    const router = useRouter();
    const [api, setApi] = useState<CarouselApi>();

    const { data, isLoading, error } = useQuery({
        queryKey: queryKeys.reports.weekly.queryKey,
        queryFn: reportApi.getWeeklyReportData,
        staleTime: 1000 * 60 * 5,
    });

    // useMemo로 불필요한 재생성 방지
    const carouselData = useMemo(
        () => [
            ...(data || []),
            { id: 'viewAll', title: '전체보기', isViewAll: true },
        ],
        [data]
    );

    useEffect(() => {
        if (!api) return;

        const onSelect = (emblaApi: CarouselApi) => {
            if (!emblaApi) return;

            const selectedIndex = emblaApi.selectedScrollSnap();
            const isLastSlide = selectedIndex === carouselData.length - 1;
            const lastItem = carouselData[carouselData.length - 1];

            if (isLastSlide && lastItem.isViewAll) {
                router.push('/report');
            }
        };

        api.on('select', onSelect);
        return () => void api.off('select', onSelect);
    }, [api, router, carouselData]); // 이제 안전함

    return {
        carouselData,
        isLoading,
        error,
        api,
        setApi,
    };
};
