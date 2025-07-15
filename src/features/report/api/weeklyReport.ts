import { CarouselItemData } from '../types';

export const reportApi = {
    getWeeklyReportData: async (): Promise<CarouselItemData[]> => {
        // TODO: 실제 API 호출
        // return await fetch('/api/reports/weekly').then(res => res.json());

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;

        return Promise.resolve([
            {
                id: '1',
                price: 1123123,
                amount: 1,
                date: {
                    year: currentYear,
                    month: currentMonth,
                    week: 1,
                },
            },
            {
                id: '2',
                price: 213212,
                amount: 2,
                date: {
                    year: currentYear,
                    month: currentMonth,
                    week: 2,
                },
            },
            {
                id: '3',
                price: 3123213,
                amount: 3,
                date: {
                    year: currentYear,
                    month: currentMonth,
                    week: 4, // 현재 주차
                },
            },
        ]);
    },
};
