export interface StatsCalendarProps {
    year: number;
    month: number; // 1~12
    selectedDay: number;
    onSelect: (day: number) => void;
}

export interface StatsDeliveryHistory {
    id: string;
    date: string;
    amount: number;
    order: string;
    count: number;
}

export interface StatsDeliveryHistoryResponse {
    items: StatsDeliveryHistory[];
    total: number;
}
