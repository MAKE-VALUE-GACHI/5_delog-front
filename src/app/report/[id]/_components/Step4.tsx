'use client';

import { useRouter } from 'next/navigation';
import ReportLayout from './ReportLayout';
import Step4Card from './Step4Card';

export default function Step4() {
    const router = useRouter();

    return (
        <ReportLayout
            title={
                <>
                    이제는 이번 주 내가
                    <br />
                    어떤 소비를 했는지 알겠죠?
                </>
            }
            color="black"
            buttonType="primary"
            buttonText="확인"
            onClick={() => router.back()}
        >
            <div className="flex flex-col gap-4 w-[100%]">
                <Step4Card
                    color="#EF4444"
                    title1="이번 주 주문 횟수"
                    content1="12번"
                    title2="제일 많이 쓴 금액"
                    content2="36,000 원"
                    title3="제일 적게 쓴 금액"
                    content3="9,600 원"
                />
                <Step4Card
                    color="#EAB308"
                    title1="이번 주 지출 금액"
                    content1="142,000원"
                    title2="제일 많이 쓴 금액"
                    content2="36,000 원"
                    title3="제일 적게 쓴 금액"
                    content3="9,600 원"
                />
                <Step4Card
                    color="#22C55E"
                    title1="평균 간격"
                    content1="4일"
                    title2="최대 주문 간격"
                    content2="6일"
                    title3="최소 주문 간격"
                    content3="2일"
                />
            </div>
        </ReportLayout>
    );
}
