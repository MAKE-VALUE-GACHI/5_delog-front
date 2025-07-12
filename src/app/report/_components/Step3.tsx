import Card from './Card';
import ReportLayout from './ReportLayout';

interface Step3Props {
    goNext: () => void;
}

export default function Step3({ goNext }: Step3Props) {
    return (
        <ReportLayout
            subtitle="평균 배달 간격"
            title={
                <>
                    스스로 조절하는 모습이
                    <br />
                    반짝반짝 빛나요
                </>
            }
            buttonType="step"
            buttonText="다음"
            onClick={goNext}
        >
            <Card
                image="/step3.svg"
                backgroundColor="#00e275"
                color="white"
                subtitle="평균 배달 간격"
                title="4일"
                leftTitle="최대 주문 간격"
                leftContent="6일"
                rightTitle="최소 주문 간격"
                rightContent="2일"
            />

            <p className="text-[#BBF7D0] mt-10 text-[18px]">
                지난 주에 비해
                <span className="font-semibold text-white"> 70% 증가</span>
                했어요
            </p>
        </ReportLayout>
    );
}
