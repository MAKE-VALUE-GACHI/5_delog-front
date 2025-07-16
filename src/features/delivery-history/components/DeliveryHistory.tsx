import React, { useCallback, useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchOrderHistory } from '../api';
import {
    OrderHistory as OrderHistoryType,
    OrderHistoryResponse,
} from '../types';
import InfiniteScroll from '@/components/common/InfiniteScroll';
import Spinner from '@/components/Spinner';
import FloatingButton from '@/components/FloatingButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SectionTitle from '@/components/common/SectionTitle';
import DeliveryMetrics from './DeliveryMetrics';

interface OrderHistoryProps {
    pageSize?: number;
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ pageSize = 3 }) => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
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
        maxPages: 5,
    });

    const router = useRouter();
    const handleAddOrder = () => {
        router.push('/add-history');
    };

    const shouldShowBlur = hasNextPage;

    // 모든 페이지의 아이템들을 평평하게 만들기
    // API 로직: 첫 번째 호출은 1개 + 미리보기 1개, 이후는 pageSize개 + 미리보기 1개
    const processedItems = useMemo(() => {
        if (!data?.pages) return [];

        const items: OrderHistoryType[] = [];

        data.pages.forEach((page, pageIndex) => {
            const isLastPage = pageIndex === data.pages.length - 1;

            if (isLastPage) {
                // 마지막 페이지는 미리보기 아이템 제외하고 모든 아이템 포함
                items.push(...page.items);
            } else {
                // 중간 페이지들은 마지막 아이템(미리보기) 제외
                items.push(...page.items.slice(0, -1));
            }
        });

        return items;
    }, [data?.pages]);

    // 다음 페이지 로드 함수
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
        return <Spinner position="bottom-offset" />;
    }

    return (
        <section className="px-4 pb-4">
            <SectionTitle title="기록 된 배달 내역" hasLink={false} />
            <div className="relative mt-4">
                <div
                    className={`${shouldShowBlur ? 'fade-blur-bottom' : ''} ${isFetchingNextPage ? 'loading' : ''}`}
                >
                    <InfiniteScroll
                        items={processedItems}
                        loadMore={loadMore}
                        hasMore={hasNextPage || false}
                        loading={isFetchingNextPage}
                        renderItem={(item: OrderHistoryType, index: number) => (
                            <DeliveryMetrics item={item} />
                        )}
                        className="mb-20" // FloatingButton 공간 확보
                    />
                </div>

                {!isFetchingNextPage && (
                    <FloatingButton
                        className="left-1/2 transform -translate-x-1/2 py-4 px-8 bg-blue-500 hover:bg-blue-600 rounded-[32px] fixed bottom-4"
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
        </section>
    );
};

export default OrderHistory;
