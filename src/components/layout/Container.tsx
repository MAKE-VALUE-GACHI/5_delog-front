import { cn } from '@/lib/utils';

interface ContainerProps {
    children: React.ReactNode;
    bg?: string;
}

export default function Container({
    children,
    bg = 'bg-blue-50',
}: ContainerProps) {
    return <div className={cn('min-h-screen', bg)}>{children}</div>;
}
