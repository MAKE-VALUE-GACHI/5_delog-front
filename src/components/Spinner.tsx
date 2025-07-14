interface SpinnerProps {
    position?: 'center' | 'bottom-offset';
    className?: string;
}

export default function Spinner({
    position = 'center',
    className = '',
}: SpinnerProps) {
    const positionClasses = {
        center: 'absolute inset-0 m-auto',
        'bottom-offset':
            'absolute bottom-40 left-1/2 transform -translate-x-1/2',
    };

    return (
        <span
            className={`border-4 border-blue-500 border-l-white animate-spin rounded-full w-8 h-8 z-50 ${positionClasses[position]} ${className}`}
        />
    );
}
