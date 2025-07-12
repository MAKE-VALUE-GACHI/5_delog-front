import Image from 'next/image';

interface CardProps {
    image: string;
    subtitle: string;
    title: string;
    leftTitle: string;
    leftContent: string;
    rightTitle: string;
    rightContent: string;
    color: string;
    backgroundColor: string;
}

export default function Card({
    image,
    subtitle,
    title,
    leftTitle,
    leftContent,
    rightTitle,
    rightContent,
    color,
    backgroundColor,
}: CardProps) {
    return (
        <div
            className="w-[361px] rounded-xl p-6 flex flex-col gap-4 my-4"
            style={{ color, backgroundColor }}
        >
            <div className="w-[100%] flex justify-center">
                <img src={image} alt="이모지" />
            </div>
            <div>
                <p>{subtitle}</p>
                <p className="font-semibold text-[48px]">{title}</p>
            </div>

            <div className="flex justify-between">
                <div className="flex-1">
                    <p>{leftTitle}</p>
                    <p className="font-semibold text-[18px]">{leftContent}</p>
                </div>
                <div className="flex-1">
                    <p>{rightTitle}</p>
                    <p className="font-semibold text-[18px]">{rightContent}</p>
                </div>
            </div>
        </div>
    );
}
