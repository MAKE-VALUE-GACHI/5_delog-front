import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { OrderHistory as OrderHistoryType } from '../types';
import Link from 'next/link';

export default function DeliveryMetrics({ item }: { item: OrderHistoryType }) {
    return (
        <div className="p-4 bg-white border border-none rounded-20">
            <p className="text-sm font-medium text-slate-500">{item.date}</p>
            <div className="flex justify-between">
                <p className="text-base font-medium text-slate-900">
                    {item.order}
                </p>
                <p className="text-base font-medium text-slate-500">
                    포함 {item.count}개의 메뉴
                </p>
            </div>
            <p className="text-blue-500 font-semibold text-xl">
                {item.amount.toLocaleString()}원
            </p>

            <Drawer>
                <DrawerTrigger asChild>
                    <Button className="w-full bg-blue-50 mt-3 p-6 text-blue-500 text-base hover:bg-blue-100">
                        자세히 보기
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    {/* 웹 접근성 유지하며 불필요한 Header 숨김 */}
                    <VisuallyHidden>
                        <DrawerHeader>
                            <DrawerTitle>주문 상세 정보</DrawerTitle>
                            <DrawerDescription>
                                {item.date} 주문 내역
                            </DrawerDescription>
                        </DrawerHeader>
                    </VisuallyHidden>
                    <div className="mt-2 px-4 mb-6">
                        <p className="text-sm font-medium text-slate-500">
                            {item.date}
                        </p>
                        <p className="text-xl font-semibold text-slate-900">
                            {item.order}
                        </p>
                        <p className="text-2xl font-semibold text-blue-500">
                            {item.amount.toLocaleString()}원
                        </p>
                    </div>
                    <DrawerFooter>
                        <div className="flex gap-2">
                            <Button className="flex-1 font-medium text-blue-500 text-base bg-blue-50 !py-8 hover:bg-blue-100">
                                <Link href="#">수정하기</Link>
                            </Button>
                            <DrawerClose asChild>
                                <Button className="flex-1 bg-blue-500 text-white font-medium text-base !py-8 hover:bg-blue-600">
                                    확인
                                </Button>
                            </DrawerClose>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
