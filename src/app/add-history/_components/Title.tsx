interface TitleProps {
    title: string;
}

export default function Title({ title }: TitleProps) {
    return (
        <div className="flex justify-center items-center gap-2 mb-2">
            <div className="text-[#475569] text-sm">{title}</div>
            <div className="bg-[#CBD5E1] h-[1px] flex-1" />
        </div>
    );
}
