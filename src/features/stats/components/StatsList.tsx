// import React from 'react';
// import { Button } from '@/components/ui/button';
// import {
//     Drawer,
//     DrawerClose,
//     DrawerContent,
//     DrawerDescription,
//     DrawerFooter,
//     DrawerHeader,
//     DrawerTitle,
//     DrawerTrigger,
// } from '@/components/ui/drawer';

// import type { StatsDeliveryHistory } from '@/features/stats/types';
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
// import Link from 'next/link';
// import { useDeliveryCalendar } from '../hooks';

// export default function StatsList() {
//     const { statsData, isLoading, error } = useDeliveryCalendar();

//     if (isLoading) {
//         return <div className="text-center py-8">로딩 중...</div>;
//     }

//     if (error) {
//         return (
//             <div className="text-center text-red-500 py-8">
//                 에러가 발생했습니다: {(error as Error).message}
//             </div>
//         );
//     }

//     if (!statsData || !statsData.items.length) {
//         return <div className="text-center py-8">주문 내역이 없습니다.</div>;
//     }

//     // 이번달 필터링 (예시: 2025년 6월)
//     const now = new Date();
//     const thisMonth = `${now.getFullYear()}년 ${now.getMonth() + 1}월`;
//     const filtered = statsData.items.filter((item: StatsDeliveryHistory) =>
//         item.date.startsWith(thisMonth)
//     );

//     return (
//         <div className="flex flex-col gap-4">
//             {filtered.length === 0 ? (
//                 <div className="text-center py-8">
//                     이번달 주문 내역이 없습니다.
//                 </div>
//             ) : (
//                 filtered.map(item => (
//                     <div
//                         key={item.id}
//                         className="p-4 bg-white border border-none rounded-20"
//                     >
//                         <p className="text-sm font-medium text-slate-500">
//                             {item.date}
//                         </p>
//                         <div className="flex justify-between">
//                             <p className="text-base font-medium text-slate-900">
//                                 {item.order}
//                             </p>
//                             <p className="text-base font-medium text-slate-500">
//                                 포함 {item.count}개의 메뉴
//                             </p>
//                         </div>
//                         <p className="text-blue-500 font-semibold text-xl">
//                             {item.amount.toLocaleString()}원
//                         </p>

//                         <Drawer>
//                             <DrawerTrigger asChild>
//                                 <Button className="w-full bg-blue-50 mt-3 p-6 text-blue-500 text-base hover:bg-blue-100">
//                                     자세히 보기
//                                 </Button>
//                             </DrawerTrigger>
//                             <DrawerContent>
//                                 {/* 웹 접근성 유지하며 불필요한 Header 숨김 */}
//                                 <VisuallyHidden>
//                                     <DrawerHeader>
//                                         <DrawerTitle>
//                                             주문 상세 정보
//                                         </DrawerTitle>
//                                         <DrawerDescription>
//                                             {item.date} 주문 내역
//                                         </DrawerDescription>
//                                     </DrawerHeader>
//                                 </VisuallyHidden>
//                                 <div className="mt-2 px-4 mb-6">
//                                     <p className="text-sm font-medium text-slate-500">
//                                         {item.date}
//                                     </p>
//                                     <p className="text-xl font-semibold text-slate-900">
//                                         {item.order}
//                                     </p>
//                                     <p className="text-2xl font-semibold text-blue-500">
//                                         {item.amount.toLocaleString()}원
//                                     </p>
//                                 </div>
//                                 <DrawerFooter>
//                                     <div className="flex gap-2">
//                                         <Button className="flex-1 font-medium text-blue-500 text-base bg-blue-50 !py-8 hover:bg-blue-100">
//                                             <Link href="#">수정하기</Link>
//                                         </Button>
//                                         <DrawerClose asChild>
//                                             <Button className="flex-1 bg-blue-500 text-white font-medium text-base !py-8 hover:bg-blue-600">
//                                                 확인
//                                             </Button>
//                                         </DrawerClose>
//                                     </div>
//                                 </DrawerFooter>
//                             </DrawerContent>
//                         </Drawer>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }
