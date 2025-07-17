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

export interface DeliveryDay {
    date: string; // 'YYYY-MM-DD' 형식
    hasDelivery: boolean;
    deliveryCount: number; // 해당 날짜의 배달 건수
    totalAmount?: number; // 선택적으로 총 금액도 포함
}

export interface MonthlyStatsData {
    year: number;
    month: number;
    deliveryDays: DeliveryDay[];
}

export interface MonthlyStatsResponse {
    data: MonthlyStatsData;
}
