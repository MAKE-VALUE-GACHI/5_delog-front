import Card from './Card';
import ReportLayout from './ReportLayout';

interface Step1Props {
    goNext: () => void;
}

export default function Step1({ goNext }: Step1Props) {
    return (
        <ReportLayout
            subtitle="총 주문 수"
            title={
                <>
                    이제는 라이더가
                    <br />
                    당신 이름을 외우겠어요
                </>
            }
            buttonType="step"
            buttonText="다음"
            onClick={goNext}
        >
            <Card
                image="/step1.svg"
                backgroundColor="#ff666c"
                color="white"
                subtitle="이번 주 주문 횟수"
                title="12번"
                leftTitle="제일 많이 쓴 금액"
                leftContent="36,000 원"
                rightTitle="제일 적게 쓴 금액"
                rightContent="9,600 원"
            />

            <p className="text-[#FECACA] mt-10 text-[18px]">
                지난 주에 비해
                <span className="font-semibold text-white"> 20% 증가</span>
                했어요
            </p>
        </ReportLayout>
    );
}
