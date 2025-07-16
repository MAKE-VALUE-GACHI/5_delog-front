import Link from 'next/link';
import { Separator } from '../ui/separator';
import Image from 'next/image';

interface SectionTitleProps {
    title: string;
    linkText?: string;
    hasLink?: boolean;
    linkHref?: string;
    hasPadding?: boolean;
}

export default function SectionTitle({
    title,
    linkText = '',
    hasLink = false,
    linkHref = '',
    hasPadding = false,
}: SectionTitleProps) {
    return (
        <div
            className={`flex items-center gap-1 w-full ${hasPadding ? 'px-4' : ''}`}
        >
            <p className="text-slate-600 font-medium text-sm">{title}</p>
            <Separator orientation="horizontal" className="flex-1" />
            {hasLink && (
                <div className="flex items-center gap-2">
                    <p className="text-slate-600 font-medium text-sm">
                        {linkText}
                    </p>
                    <Link href={linkHref}>
                        <Image
                            src="/arrow_right.svg"
                            alt={linkText}
                            width={8}
                            height={8}
                        />
                    </Link>
                </div>
            )}
        </div>
    );
}
