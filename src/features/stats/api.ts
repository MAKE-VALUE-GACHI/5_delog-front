// api.ts
import type { MonthlyStatsData, MonthlyStatsResponse } from './types';

const mockCalendarData: Record<string, MonthlyStatsData> = {
    '2025-6': {
        year: 2025,
        month: 6,
        deliveryDays: [
            {
                date: '2025-06-05',
                hasDelivery: true,
                deliveryCount: 2,
                totalAmount: 25000,
            },
            {
                date: '2025-06-12',
                hasDelivery: true,
                deliveryCount: 1,
                totalAmount: 15000,
            },
            {
                date: '2025-06-28',
                hasDelivery: true,
                deliveryCount: 3,
                totalAmount: 42000,
            },
        ],
    },
    '2025-7': {
        year: 2025,
        month: 7,
        deliveryDays: [
            {
                date: '2025-07-02',
                hasDelivery: true,
                deliveryCount: 1,
                totalAmount: 12000,
            },
            {
                date: '2025-07-09',
                hasDelivery: true,
                deliveryCount: 2,
                totalAmount: 28000,
            },
            {
                date: '2025-07-15',
                hasDelivery: true,
                deliveryCount: 1,
                totalAmount: 18000,
            },
        ],
    },
    '2025-8': {
        year: 2025,
        month: 8,
        deliveryDays: [
            {
                date: '2025-08-03',
                hasDelivery: true,
                deliveryCount: 1,
                totalAmount: 22000,
            },
            {
                date: '2025-08-14',
                hasDelivery: true,
                deliveryCount: 2,
                totalAmount: 35000,
            },
            {
                date: '2025-08-22',
                hasDelivery: true,
                deliveryCount: 1,
                totalAmount: 16000,
            },
        ],
    },
};

export const fetchMonthlyStats = async (
    year: number,
    month: number
): Promise<MonthlyStatsResponse> => {
    await new Promise(resolve => setTimeout(resolve, 300));

    const key = `${year}-${month}`;
    const data = mockCalendarData[key] || { year, month, deliveryDays: [] };

    return { data };
};
