interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

export default function Header({ children, className }: HeaderProps) {
    return (
        <header className={`h-12 px-4 flex items-center ${className}`}>
            {children}
        </header>
    );
}
