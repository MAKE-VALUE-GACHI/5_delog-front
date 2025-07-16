import type {
    StatsDeliveryHistory,
    StatsDeliveryHistoryResponse,
} from './types';

const statsMockData: StatsDeliveryHistory[] = [
    {
        id: '1',
        date: '2025년 7월 10일',
        amount: 12000,
        order: '치킨마요덮밥 1개',
        count: 2,
    },
    {
        id: '2',
        date: '2025년 7월 15일',
        amount: 18000,
        order: '돈까스정식 2개',
        count: 2,
    },
    {
        id: '3',
        date: '2025년 6월 20일',
        amount: 9000,
        order: '비빔국수 1개',
        count: 1,
    },
    {
        id: '4',
        date: '2025년 6월 25일',
        amount: 15000,
        order: '제육덮밥 1개',
        count: 1,
    },
];

export const fetchStatsDeliveryHistory =
    async (): Promise<StatsDeliveryHistoryResponse> => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return {
            items: statsMockData,
            total: statsMockData.length,
        };
    };
