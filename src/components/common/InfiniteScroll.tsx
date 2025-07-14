import React, { useCallback, useEffect, useRef, useState } from 'react';
import { EngineType } from 'embla-carousel';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

const DefaultLoadingSpinner = () => (
    <span className="border-4 border-blue-500 border-l-white absolute inset-0 m-auto animate-spin rounded-full w-8 h-8" />
);

type PropType<T> = {
    items: T[];
    loadMore: () => Promise<T[]>;
    hasMore: boolean;
    loading?: boolean;
    options?: EmblaOptionsType;
    orientation?: 'horizontal' | 'vertical';
    renderItem: (item: T, index: number) => React.ReactNode;
    renderLoading?: () => React.ReactNode;
    className?: string;
};

const InfiniteScroll = <T,>({
    items,
    loadMore,
    hasMore,
    loading = false,
    options,
    orientation = 'horizontal',
    renderItem,
    renderLoading,
    className,
}: PropType<T>) => {
    const scrollListenerRef = useRef<() => void>(() => undefined);
    const listenForScrollRef = useRef(true);
    const hasMoreToLoadRef = useRef(hasMore);
    const [currentItems, setCurrentItems] = useState(items);
    const [loadingMore, setLoadingMore] = useState(false);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        ...options,
        axis: orientation === 'vertical' ? 'y' : 'x',
        watchSlides: emblaApi => {
            const reloadEmbla = (): void => {
                const oldEngine = emblaApi.internalEngine();

                emblaApi.reInit();
                const newEngine = emblaApi.internalEngine();
                const copyEngineModules: (keyof EngineType)[] = [
                    'scrollBody',
                    'location',
                    'offsetLocation',
                    'previousLocation',
                    'target',
                ];
                copyEngineModules.forEach(engineModule => {
                    Object.assign(
                        newEngine[engineModule],
                        oldEngine[engineModule]
                    );
                });

                newEngine.translate.to(oldEngine.location.get());
                const { index } = newEngine.scrollTarget.byDistance(0, false);
                newEngine.index.set(index);
                newEngine.animation.start();

                setLoadingMore(false);
                listenForScrollRef.current = true;
            };

            const reloadAfterPointerUp = (): void => {
                emblaApi.off('pointerUp', reloadAfterPointerUp);
                reloadEmbla();
            };

            const engine = emblaApi.internalEngine();

            if (hasMoreToLoadRef.current && engine.dragHandler.pointerDown()) {
                const boundsActive = engine.limit.reachedMax(
                    engine.target.get()
                );
                engine.scrollBounds.toggleActive(boundsActive);
                emblaApi.on('pointerUp', reloadAfterPointerUp);
            } else {
                reloadEmbla();
            }
        },
    });

    const onScroll = useCallback(
        (emblaApi: EmblaCarouselType) => {
            if (!listenForScrollRef.current) return;

            setLoadingMore(loadingMore => {
                const lastSlide = emblaApi.slideNodes().length - 1;
                const lastSlideInView = emblaApi
                    .slidesInView()
                    .includes(lastSlide);
                const shouldLoadMore =
                    !loadingMore && lastSlideInView && hasMoreToLoadRef.current;

                if (shouldLoadMore) {
                    listenForScrollRef.current = false;

                    loadMore()
                        .then(newItems => {
                            setCurrentItems(prev => [...prev, ...newItems]);
                        })
                        .catch(error => {
                            console.error('Failed to load more items:', error);
                            listenForScrollRef.current = true;
                            setLoadingMore(false);
                        });
                }

                return loadingMore || lastSlideInView;
            });
        },
        [loadMore]
    );

    const addScrollListener = useCallback(
        (emblaApi: EmblaCarouselType) => {
            scrollListenerRef.current = () => onScroll(emblaApi);
            emblaApi.on('scroll', scrollListenerRef.current);
        },
        [onScroll]
    );

    useEffect(() => {
        if (!emblaApi) return;
        addScrollListener(emblaApi);

        const onResize = () => emblaApi.reInit();
        window.addEventListener('resize', onResize);
        emblaApi.on('destroy', () =>
            window.removeEventListener('resize', onResize)
        );
    }, [emblaApi, addScrollListener]);

    useEffect(() => {
        hasMoreToLoadRef.current = hasMore;
    }, [hasMore]);

    useEffect(() => {
        setCurrentItems(items);
    }, [items]);

    return (
        <div
            className={`mx-auto mt-2 ${
                orientation === 'vertical' ? '' : 'max-w-full'
            } ${className || ''}`}
        >
            <div className="overflow-hidden" ref={emblaRef}>
                <div
                    className={`flex ${
                        orientation === 'vertical' ? 'flex-col -mt-4' : '-ml-4'
                    }`}
                >
                    {currentItems.map((item, index) => (
                        <div
                            className={`flex-none min-w-0 ${
                                orientation === 'vertical'
                                    ? 'w-full h-[calc(100%-4rem)] pt-4'
                                    : 'w-full pl-4'
                            }`}
                            key={index}
                        >
                            {renderItem(item, index)}
                        </div>
                    ))}
                    {hasMore && (loadingMore || loading) && (
                        <div
                            className={`relative flex-none min-w-0 flex items-center justify-center z-20 ${
                                orientation === 'vertical'
                                    ? 'w-full h-40'
                                    : 'w-60 h-60'
                            }`}
                        >
                            {renderLoading ? (
                                renderLoading()
                            ) : (
                                <DefaultLoadingSpinner />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InfiniteScroll;
