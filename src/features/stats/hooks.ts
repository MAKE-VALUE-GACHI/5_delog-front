import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/lib/queryKeys';
import { fetchStatsDeliveryHistory } from './api';

export const useStatsOrderHistory = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: queryKeys.stats.all.queryKey,
        queryFn: fetchStatsDeliveryHistory,
        staleTime: 1000 * 60 * 5, // 5분 캐시
    });

    return {
        statsData: data,
        isLoading,
        error,
    };
};
