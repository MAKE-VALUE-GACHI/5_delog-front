export interface CarouselItemData {
    id: string;
    price?: number;
    amount?: number;
    date?: {
        year: number;
        month: number;
        week: number;
    };
    isViewAll?: boolean;
}

export interface MonthlyReportData {
    id: string;
    deliveries: number;
    items: number;
    price: number;
}
