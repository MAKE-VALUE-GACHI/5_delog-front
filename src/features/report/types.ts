export interface CarouselItemData {
    id: string;
    price: number;
    amount: number;
    date: {
        year: number;
        month: number;
        week: number;
    };
    isViewAll?: boolean;
}
