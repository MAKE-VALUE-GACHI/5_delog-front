import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queryKeys = createQueryKeyStore({
    orderHistory: {
        all: null,
        list: (pageSize: number) => [pageSize],
        infinite: (pageSize: number) => [pageSize],
    },
});
