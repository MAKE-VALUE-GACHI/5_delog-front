import { cn } from '@/lib/utils';
import Header from './Header';

interface ContainerProps {
    children: React.ReactNode;
    bg?: string;
    headerType: 'home' | 'back' | 'stats';
    year?: number;
    month?: number;
    onMonthChange?: (year: number, month: number) => void;
}

export default function Container({
    children,
    bg = 'bg-blue-50',
    headerType = 'home',
    year,
    month,
    onMonthChange,
}: ContainerProps) {
    return (
        <div className={cn('border-l border-r px-4', bg)}>
            <Header
                type={headerType}
                year={year}
                month={month}
                onMonthChange={onMonthChange}
            />
            <main>{children}</main>
        </div>
    );
}
