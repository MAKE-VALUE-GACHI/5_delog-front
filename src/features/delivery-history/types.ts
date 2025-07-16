export interface OrderHistory {
    id: string;
    date: string;
    amount: number;
    order: string;
    count: number;
}

export interface OrderHistoryResponse {
    items: OrderHistory[];
    nextCursor?: number;
    hasMore: boolean;
}
