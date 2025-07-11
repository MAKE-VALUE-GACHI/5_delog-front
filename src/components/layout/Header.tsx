import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface HeaderProps {
    className?: string;
    type: 'home' | 'back';
}

export default function Header({ className, type }: HeaderProps) {
    const router = useRouter();

    if (type === 'home')
        return (
            <header
                className={cn('h-12 flex items-center justify-end', className)}
            >
                <a href="#">
                    <Image
                        src="/settings.svg"
                        alt="환경설정"
                        width={24}
                        height={24}
                    />
                </a>
            </header>
        );

    if (type === 'back')
        return (
            <header className={cn('h-12 flex items-center', className)}>
                <Image
                    onClick={() => router.back()}
                    src="/arrow_back.svg"
                    alt="뒤로가기"
                    width={9}
                    height={19}
                />
            </header>
        );
}
