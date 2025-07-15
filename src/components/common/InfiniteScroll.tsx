import React, { useCallback, useEffect, useRef } from 'react';
import Spinner from '../Spinner';

type PropType<T> = {
    items: T[];
    loadMore: () => Promise<T[]>;
    hasMore: boolean;
    loading?: boolean;
    renderItem: (item: T, index: number) => React.ReactNode;
    renderLoading?: () => React.ReactNode;
    className?: string;
};

const InfiniteScroll = <T,>({
    items,
    loadMore,
    hasMore,
    loading = false,
    renderItem,
    renderLoading,
    className,
}: PropType<T>) => {
    const loadingRef = useRef<HTMLDivElement>(null);
    const isLoadingRef = useRef(false);

    // Intersection Observer를 사용한 무한 스크롤
    useEffect(() => {
        if (!loadingRef.current || !hasMore || loading) return;

        const observer = new IntersectionObserver(
            async entries => {
                const [entry] = entries;

                if (entry.isIntersecting && !isLoadingRef.current) {
                    isLoadingRef.current = true;

                    try {
                        await loadMore();
                    } catch (error) {
                        console.error('Failed to load more items:', error);
                    } finally {
                        isLoadingRef.current = false;
                    }
                }
            },
            {
                root: null, // viewport를 root로 사용 (페이지 전체 스크롤)
                rootMargin: '100px', // 로딩 엘리먼트가 100px 전에 보이면 로딩 시작
                threshold: 0.1,
            }
        );

        observer.observe(loadingRef.current);

        return () => {
            observer.disconnect();
        };
    }, [loadMore, hasMore, loading]);

    return (
        <div className={`w-full ${className || ''}`}>
            {/* 아이템들 렌더링 */}
            <div className="flex flex-col gap-2">
                {items.map((item, index) => (
                    <div key={index} className="w-full">
                        {renderItem(item, index)}
                    </div>
                ))}
            </div>

            {/* 로딩 인디케이터 */}
            {hasMore && (
                <div
                    ref={loadingRef}
                    className="loading-above-blur relative flex items-center justify-center w-full h-20 mt-4"
                >
                    {loading || isLoadingRef.current ? (
                        renderLoading ? (
                            renderLoading()
                        ) : (
                            <Spinner />
                        )
                    ) : null}
                </div>
            )}
        </div>
    );
};

export default InfiniteScroll;
