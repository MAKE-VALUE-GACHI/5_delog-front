interface FloatingButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function FloatingButton({
    children,
    className = '',
    onClick,
}: FloatingButtonProps) {
    return (
        <div
            className={`fixed bottom-12 cursor-pointer z-30 ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
