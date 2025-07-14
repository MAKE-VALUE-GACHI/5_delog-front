import Card from './Card';
import ReportLayout from './ReportLayout';

interface Step2Props {
    goNext: () => void;
}

export default function Step2({ goNext }: Step2Props) {
    return (
        <ReportLayout
            subtitle="총 지출 금액"
            title={
                <>
                    지갑이 이번 주는
                    <br />
                    약간 긴장했을 수 있어요
                </>
            }
            buttonType="step"
            buttonText="다음"
            onClick={goNext}
            color="black"
        >
            <Card
                image="/step2.svg"
                backgroundColor="#ffdf00"
                color="black"
                subtitle="이번 주 지출 금액"
                title="142,000원"
                leftTitle="제일 많이 쓴 금액"
                leftContent="36,000 원"
                rightTitle="제일 적게 쓴 금액"
                rightContent="9,600 원"
            />

            <p className="text-[#A16207] mt-10 text-lg">
                지난 주에 비해
                <span className="font-semibold text-black"> 3% 감소</span>
                했어요
            </p>
        </ReportLayout>
    );
}
