import CButton, { TButtonType } from '@/components/Button';
import { ReactNode } from 'react';

interface ReportLayoutProps {
    color?: string;
    subtitle?: string;
    title: ReactNode;
    children: ReactNode;
    buttonType: TButtonType;
    buttonText: string;
    onClick: () => void;
}

export default function ReportLayout({
    color = 'white',
    subtitle,
    title,
    children,
    buttonType,
    buttonText,
    onClick,
}: ReportLayoutProps) {
    return (
        <div className="flex flex-col items-center">
            <div className="my-4 text-center" style={{ color }}>
                {subtitle && <p className="text-sm">{subtitle}</p>}
                <div className="text-3xl font-semibold">{title}</div>
            </div>

            {children}

            <div className="fixed bottom-10 w-full max-w-[361px]">
                <CButton buttonType={buttonType} onClick={onClick}>
                    {buttonText}
                </CButton>
            </div>
        </div>
    );
}
