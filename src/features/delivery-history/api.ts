import { OrderHistory, OrderHistoryResponse } from './types';

const allMockData: OrderHistory[] = [
    {
        id: '1',
        date: '2025년 6월 25일',
        amount: 10000,
        order: '우삼겹메밀면 누들면 1개',
        count: 3,
    },
    {
        id: '2',
        date: '2025년 6월 25일',
        amount: 20000,
        order: '우삼겹메밀면 누들면 1개',
        count: 3,
    },
    {
        id: '3',
        date: '2025년 6월 25일',
        amount: 30000,
        order: '우삼겹메밀면 누들면 1개',
        count: 5,
    },
    {
        id: '4',
        date: '2025년 6월 25일',
        amount: 15000,
        order: '우삼겹메밀면 누들면 1개',
        count: 2,
    },
    {
        id: '5',
        date: '2025년 6월 25일',
        amount: 25000,
        order: '우삼겹메밀면 누들면 1개',
        count: 4,
    },
    {
        id: '6',
        date: '2025년 6월 25일',
        amount: 18000,
        order: '우삼겹메밀면 누들면 1개',
        count: 3,
    },
    {
        id: '7',
        date: '2025년 6월 25일',
        amount: 22000,
        order: '우삼겹메밀면 누들면 1개',
        count: 6,
    },
];

export const fetchOrderHistory = async ({
    pageParam = 0,
    pageSize = 3,
}: {
    pageParam?: number;
    pageSize?: number;
}): Promise<OrderHistoryResponse> => {
    await new Promise(resolve => setTimeout(resolve, 800));

    const startIndex = pageParam;

    const isFirstCall = pageParam === 0;

    // 첫 번째 호출은 1개, 이후는 pageSize개
    const actualPageSize = isFirstCall ? 1 : pageSize;
    const endIndex = startIndex + actualPageSize;

    const actualItems = allMockData.slice(startIndex, endIndex);
    const hasMoreData = endIndex < allMockData.length;

    const previewItems = hasMoreData
        ? allMockData.slice(endIndex, endIndex + 1)
        : [];
    const items = [...actualItems, ...previewItems];

    return {
        items,
        nextCursor: hasMoreData ? endIndex : undefined,
        hasMore: hasMoreData,
    };
};
