import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';
import Image from 'next/image';

export default function AIReport() {
    return (
        <section className="px-4">
            <div className="p-4 rounded-20 border-2 border-blue-200 box-border bg-white mt-4">
                <div className="flex justify-between">
                    <p className="text-slate-500 text-sm font-medium">
                        이번주 AI 요약이 도착했어요
                    </p>
                    <Image
                        alt="AI 레포트"
                        src="/smart_toy.svg"
                        width={16}
                        height={16}
                    />
                </div>
                <p className="text-xl text-slate-900 font-semibold">
                    이 주간 리포트를 보니까...
                </p>
                <p className="text-xl text-blue-500 font-semibold">
                    배달앱 마케팅 팀이 좋아하겠네요.
                </p>
                <Button className="w-full bg-blue-50 mt-3 p-6 hover:bg-blue-100">
                    <Link href="#" className="text-blue-500 hover:bg-blue-600">
                        요약 확인하기
                    </Link>
                </Button>
            </div>
        </section>
    );
}
