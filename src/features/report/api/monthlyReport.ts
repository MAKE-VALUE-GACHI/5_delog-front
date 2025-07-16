import { MonthlyReportData } from '../types';

export const MonthlyReportApi = {
    getMonthlyReportData: async (): Promise<MonthlyReportData> => {
        // TODO: 실제 API 호출
        // return await fetch('/api/reports/weekly').then(res => res.json());

        return Promise.resolve({
            id: '1',
            deliveries: 4,
            items: 4,
            price: 10000,
        });
    },
};
