interface Step4CardProps {
    title1: string;
    content1: string;
    title2: string;
    content2: string;
    title3: string;
    content3: string;
    color: string;
}

export default function Step4Card({
    title1,
    content1,
    title2,
    content2,
    title3,
    content3,
    color,
}: Step4CardProps) {
    return (
        <div className="w-[100%] bg-white flex flex-col gap-2 p-4 rounded-xl">
            <div>
                <p className="text-[#64748B] text-[14px]">{title1}</p>
                <p className="font-semibold text-[20px]" style={{ color }}>
                    {content1}
                </p>
            </div>
            <div className="flex justify-between">
                <div className="w-[50%]">
                    <p className="text-[#64748B] text-[14px]">{title2}</p>
                    <p>{content2}</p>
                </div>
                <div className="w-[50%]">
                    <p className="text-[#64748B] text-[14px]">{title3}</p>
                    <p>{content3}</p>
                </div>
            </div>
        </div>
    );
}
