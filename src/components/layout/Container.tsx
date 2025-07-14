import { cn } from '@/lib/utils';
import Header from './Header';

interface ContainerProps {
    children: React.ReactNode;
    bg?: string;
    headerType: 'home' | 'back';
}

export default function Container({
    children,
    bg = 'bg-blue-50',
    headerType = 'home',
}: ContainerProps) {
    return (
        <div
            className={cn(
                'min-h-screen max-w-[390px] mx-auto border-l border-r box-border',
                bg
            )}
        >
            <Header type={headerType} />
            <main>{children}</main>
        </div>
    );
}
