import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queryKeys = createQueryKeyStore({
    orderHistory: {
        all: null,
        list: (pageSize: number) => [pageSize],
        infinite: (pageSize: number) => [pageSize],
    },
    reports: {
        all: null,
        weekly: null,
        monthly: null,
    },
    stats: {
        all: null,
        calendar: (year: number, month: number) => [year, month],
    },
});
