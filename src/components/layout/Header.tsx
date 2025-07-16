'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

interface HeaderProps {
    className?: string;
    type: 'home' | 'back' | 'stats';
    title?: string;
    year?: number;
    month?: number;
    onMonthChange?: (year: number, month: number) => void;
}
export default function Header({
    className,
    type,
    title,
    year,
    month,
    onMonthChange,
}: HeaderProps) {
    const router = useRouter();
    const pathname = usePathname();
    const isReportPage = pathname === '/report/[id]';
    const handlePrev = () => {
        if (!year || !month || !onMonthChange) return;
        const newDate = new Date(year, month - 2); // month - 1 (0-indexed), then -1 for prev month
        onMonthChange(newDate.getFullYear(), newDate.getMonth() + 1);
    };

    const handleNext = () => {
        if (!year || !month || !onMonthChange) return;
        const newDate = new Date(year, month); // month is 1-based, so it's already next month
        onMonthChange(newDate.getFullYear(), newDate.getMonth() + 1);
    };
    if (type === 'home')
        return (
            <header
                className={cn(
                    'h-12 flex items-center justify-end px-4',
                    className
                )}
            >
                <Link href="#">
                    <Image
                        src="/settings.svg"
                        alt="환경설정"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                    />
                </Link>
                <div className="text-[#0F172A] text-5 font-semibold">
                    {title}
                </div>
            </header>
        );

    if (type === 'back')
        return (
            <header className={cn('h-12 flex items-center', className)}>
                <Image
                    className="hover:cursor-pointer"
                    onClick={() => router.back()}
                    src={`/arrow_back${isReportPage ? '_white' : ''}.svg`}
                    alt="뒤로가기"
                    width={24}
                    height={24}
                />
                <div className="text-[#0F172A] text-5 font-semibold">
                    {title}
                </div>
            </header>
        );

    if (type === 'stats') {
        return (
            <header className="relative h-12 flex items-center">
                <Image
                    className="absolute left-0 ml-2 hover:cursor-pointer"
                    onClick={() => router.back()}
                    src={`/arrow_back.svg`}
                    alt="뒤로가기"
                    width={24}
                    height={24}
                />
                <div className="mx-auto flex items-center gap-2">
                    <ChevronLeft
                        className="w-5 h-5 cursor-pointer"
                        onClick={handlePrev}
                    />
                    <span className="text-lg font-semibold">{month}월</span>
                    <ChevronRight
                        className="w-5 h-5 cursor-pointer"
                        onClick={handleNext}
                    />
                </div>
            </header>
        );
    }

    return null; // fallback
}
