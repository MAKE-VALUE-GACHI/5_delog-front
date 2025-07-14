import CButton from '@/components/Button';
import Image from 'next/image';

interface StartProps {
    goNext: () => void;
}

export default function Start({ goNext }: StartProps) {
    return (
        <>
            <div className="my-4 text-center text-white">
                <p className="text-sm">이번 주 배달 리포트</p>
                <div className="text-3xl font-semibold">
                    <p>무심코 눌렀었던 주문 버튼들,</p>
                    <p>그 흔적을 정리해봤어요</p>
                </div>
            </div>

            <Image
                src="/report_start.svg"
                width={393}
                height={508}
                alt="주문 내역"
            />

            <div className="fixed bottom-10 w-full max-w-[361px]">
                <CButton buttonType="step" onClick={goNext}>
                    시작하기
                </CButton>
            </div>
        </>
    );
}
