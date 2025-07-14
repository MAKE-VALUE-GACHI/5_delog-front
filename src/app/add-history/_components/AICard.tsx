import CButton from '@/components/Button';
import Image from 'next/image';

export default function AICard() {
    return (
        <div className="rounded-xl bg-[#EFF6FF] border border-[#DBEAFE]  p-4">
            <div className="flex justify-between align-center">
                <p className="text-[#64748B] text-sm">AI로 작성하기</p>
                <Image src="/ai-icon.svg" width={16} height={16} alt="AI" />
            </div>
            <div className="font-5 font-semibold mb-4">
                <div className="flex ">
                    <p className="text-[#3B82F6]">배달 내역 스크린샷 한장</p>
                    <p>으로</p>
                </div>
                <p>빠르게 작성해보세요!</p>
            </div>

            <CButton>AI로 작성하기</CButton>
        </div>
    );
}
