// hooks.ts
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/lib/queryKeys';
import { fetchMonthlyStats } from './api';

export const useMonthlyStats = (year: number, month: number) => {
    const { data, isLoading, error } = useQuery({
        queryKey: queryKeys.stats.calendar(year, month).queryKey,
        queryFn: () => fetchMonthlyStats(year, month),
        staleTime: 1000 * 60 * 10, // 10분 캐시 (달력 데이터는 자주 변하지 않음)
    });

    // 편의를 위해 배달 있는 날짜만 추출하는 헬퍼
    const deliveryDates =
        data?.data.deliveryDays
            .filter(day => day.hasDelivery)
            .map(day => parseInt(day.date.split('-')[2])) || [];

    return {
        calendarData: data?.data,
        deliveryDates,
        isLoading,
        error,
    };
};
