'use client';

import { useRouter } from 'next/navigation';

interface ReportCardProps {
    id: number;
    subtitle: string;
    title: string;
    detail: string;
}

export default function ReportCard({
    id,
    subtitle,
    title,
    detail,
}: ReportCardProps) {
    const router = useRouter();

    return (
        <div
            className="p-4 rounded-xl bg-white hover:cursor-pointer"
            onClick={() => router.push(`/report/${id}`)}
        >
            <p className="color-[#64748B] text-[14px]">{subtitle}</p>
            <p className="font-semibold text-5">{title}</p>
            <p className="color-[#64748B] text-[14px]">{detail}</p>
        </div>
    );
}
