import { useQuery } from '@tanstack/react-query';
import { MonthlyReportApi } from '../api/monthlyReport';
import { queryKeys } from '@/lib/queryKeys';
import type { MonthlyReportData } from '../types';

export const useMonthlyReport = () => {
    const { data, isLoading, error } = useQuery<MonthlyReportData>({
        queryKey: queryKeys.reports.monthly.queryKey,
        queryFn: MonthlyReportApi.getMonthlyReportData,
        staleTime: 1000 * 60 * 5,
    });

    return {
        data,
        isLoading,
        error,
    };
};
