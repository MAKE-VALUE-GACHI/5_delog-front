import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchOrderHistory } from './api';
import { OrderHistoryResponse } from './types';
import { queryKeys } from '@/lib/queryKeys';
export const useOrderHistory = (pageSize: number = 3) => {
    return useInfiniteQuery({
        queryKey: queryKeys.orderHistory.infinite(pageSize).queryKey,
        queryFn: ({ pageParam }: { pageParam: number }) =>
            fetchOrderHistory({ pageParam, pageSize }),
        initialPageParam: 0,
        getNextPageParam: (lastPage: OrderHistoryResponse) =>
            lastPage.hasMore ? lastPage.nextCursor : undefined,
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });
};
