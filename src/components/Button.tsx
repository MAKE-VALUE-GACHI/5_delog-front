import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface ButtonProps {
    type: 'primary' | 'secondary' | 'step';
    children: ReactNode;
}

const primary = 'bg-[#3B82F6] hover:cursor-pointer hover:bg-blue-300';
const secondary =
    'text-[#3B82F6] bg-[#EFF6FF] hover:cursor-pointer hover:text-white hover:bg-[#3B82F6]';
const step = 'text-black bg-white hover:text-white hover:bg-black';

export default function CButton({ type, children }: ButtonProps) {
    const getCSS = () => {
        switch (type) {
            case 'primary':
                return primary;
            case 'secondary':
                return secondary;
            case 'step':
                return step;
            default:
                return primary;
        }
    };
    return (
        <Button className={`${getCSS()} p-7 w-[100%] rounded-xl`}>
            {children}
        </Button>
    );
}
