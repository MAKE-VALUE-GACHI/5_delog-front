'use client';

import SectionTitle from '@/components/common/SectionTitle';
import Container from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import OrderHistory from '@/features/orders/components/OrderHistory';
import Image from 'next/image';
import Link from 'next/link';

export default function App() {
    return (
        <Container headerType="home">
            <div className="space-y-8">
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
                        <Button
                            className="w-full bg-blue-50 mt-3 p-6"
                            variant="ghost"
                        >
                            <Link href="#" className="text-blue-500">
                                요약 확인하기
                            </Link>
                        </Button>
                    </div>
                </section>
                <section className="px-4">
                    <SectionTitle
                        title="숫자로 보는 이번달"
                        hasLink={true}
                        linkText="통계 보기"
                        linkHref=""
                    />
                    <div className="p-4 rounded-20 border-none box-border bg-white flex gap-12 mt-4">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-slate-900 font-normal">
                                배달 횟수
                            </p>
                            <p className="text-lg font-semibold text-slate-900">
                                18번
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-slate-900 font-normal">
                                음식 개수
                            </p>
                            <p className="text-lg font-semibold text-slate-900">
                                64개
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-slate-900 font-normal">
                                소비 금액
                            </p>
                            <p className="text-lg font-semibold text-slate-900">
                                136000원
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <SectionTitle
                        title="주간 리포트"
                        hasLink={true}
                        linkText="전체 보기"
                        linkHref=""
                    />
                    <Carousel
                        orientation="horizontal"
                        opts={{
                            align: 'start',
                            loop: false,
                            slidesToScroll: 1,
                            dragFree: false,
                            skipSnaps: false,
                        }}
                    >
                        <CarouselContent className="">
                            <CarouselItem className="">
                                <div className="p-4 rounded-20 border-none box-border bg-white flex gap-12 mt-4">
                                    Slide1
                                </div>
                            </CarouselItem>
                            <CarouselItem className="">
                                <div className="p-4 rounded-20 border-none box-border bg-white flex gap-12 mt-4">
                                    Slide2
                                </div>
                            </CarouselItem>
                            <CarouselItem className="">
                                <div className="p-4 rounded-20 border-none box-border bg-white flex gap-12 mt-4">
                                    Slide3
                                </div>
                            </CarouselItem>
                            <CarouselItem className="">
                                <div className="p-4 rounded-20 border-none box-border bg-white flex gap-12 mt-4">
                                    Slide4
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </section>
                <section>
                    <SectionTitle title="기록 된 배달 내역" hasLink={false} />
                    <div>
                        <OrderHistory pageSize={3} />
                    </div>
                </section>
            </div>
        </Container>
    );
}
