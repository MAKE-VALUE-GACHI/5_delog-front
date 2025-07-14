import React, { useCallback, useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchOrderHistory } from '../api';
import {
    OrderHistory as OrderHistoryType,
    OrderHistoryResponse,
} from '../types';
import InfiniteScroll from '@/components/common/InfiniteScroll';
import { Button } from '@/components/ui/button';
import Spiiner from '@/components/Spinner';
import FloatingButton from '@/components/FloatingButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface OrderHistoryProps {
    pageSize?: number; // 한 번에 로드할 아이템 수
}

const OrderHistoryItem: React.FC<{ item: OrderHistoryType }> = ({ item }) => (
    <div className="p-4 bg-white border border-none rounded-20">
        <p className="text-sm font-medium text-slate-500">{item.date}</p>
        <div className="flex justify-between">
            <p className="text-base font-medium text-slate-900">{item.order}</p>
            <p className="text-base font-medium text-slate-500">
                포함 {item.count}개의 메뉴
            </p>
        </div>
        <p className="text-blue-500 font-semibold text-xl">{item.amount}원</p>
        <Button
            className="w-full bg-blue-50 mt-3 p-6 text-blue-500 text-base"
            variant="ghost"
        >
            자세히 보기
        </Button>
    </div>
);

const OrderHistory: React.FC<OrderHistoryProps> = ({ pageSize = 3 }) => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        error,
    } = useInfiniteQuery({
        queryKey: ['orderHistory', pageSize.toString()],
        queryFn: ({ pageParam }: { pageParam: number }) =>
            fetchOrderHistory({ pageParam, pageSize }),
        initialPageParam: 0,
        getNextPageParam: (lastPage: OrderHistoryResponse) =>
            lastPage.hasMore ? lastPage.nextCursor : undefined,
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        getPreviousPageParam: firstPage => firstPage.nextCursor,
        maxPages: 5, // 임시로 최대 페이지 수 제한
    });

    const router = useRouter();
    const handleAddOrder = () => {
        // 라우터 이동 또는 다른 로직
        router.push('#');
    };

    // 미리 보기용으로 추가데이터를 가져오기 때문에 마지막 인덱스 제거
    const processedItems = useMemo(() => {
        const items: OrderHistoryType[] = [];

        data?.pages.forEach((page, pageIndex) => {
            const isLastPage = pageIndex === data.pages.length - 1;

            if (isLastPage) {
                items.push(...page.items);
            } else {
                items.push(...page.items.slice(0, -1));
            }
        });

        return items;
    }, [data?.pages]);

    const shouldShowBlur = hasNextPage;

    const loadMore = useCallback(async () => {
        if (hasNextPage && !isFetchingNextPage) {
            await fetchNextPage();
        }
        return [];
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    if (isError) {
        return (
            <div className="p-4">
                <p>데이터를 불러오는 데 실패했습니다.</p>
            </div>
        );
    }

    if (isLoading) {
        return <Spiiner position="bottom-offset" />;
    }

    return (
        <div
            className={`${shouldShowBlur ? 'fade-blur-bottom' : ''} ${isFetchingNextPage ? 'loading' : ''}`}
        >
            <InfiniteScroll
                items={processedItems}
                loadMore={loadMore}
                hasMore={hasNextPage || false}
                loading={isFetchingNextPage}
                orientation="vertical"
                renderItem={(item: OrderHistoryType) => (
                    <OrderHistoryItem item={item} />
                )}
                options={{
                    align: 'start',
                    containScroll: 'trimSnaps',
                    dragFree: false,
                    slidesToScroll: 1,
                }}
            />
            {!isFetchingNextPage && (
                <FloatingButton
                    className="left-1/2 transform -translate-x-1/2 py-4 px-8 bg-blue-500 rounded-[32]"
                    onClick={handleAddOrder}
                >
                    <div className="flex">
                        <Image
                            src="add.svg"
                            alt="내역 추가하기"
                            width={24}
                            height={24}
                        />
                        <p className="font-medium text-white text-base">
                            내역 추가하기
                        </p>
                    </div>
                </FloatingButton>
            )}
        </div>
    );
};

export default OrderHistory;
