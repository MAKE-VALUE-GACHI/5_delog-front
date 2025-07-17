'use client';

import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';

export default function App() {
    const { data: session, status } = useSession();

    if (status === 'loading') return <p>Loading...</p>;

    return (
        <div
            className={cn(
                'min-h-screen max-w-[390px] mx-auto border-l border-r'
            )}
        >
            <Image
                src="/loginBanner.png"
                alt="로그인배너"
                width={390}
                height={200}
                sizes="100vw"
                className="w-full h-auto"
                quality={100}
            />

            <div className="space-y-1 w-full mx-auto p-4">
                <button
                    onClick={() => signIn('google')}
                    className="w-full flex items-center p-4 rounded-xl font-semibold text-base bg-white text-gray-900 border border-gray-200 relative"
                >
                    <span className="absolute left-4">
                        <Image
                            src="/google.svg"
                            alt=""
                            width={34}
                            height={34}
                        />
                    </span>
                    <span className="mx-auto">구글 회원가입</span>
                </button>

                <button
                    onClick={() => signIn('kakao')}
                    className="w-full flex items-center p-4 rounded-xl font-semibold text-base bg-[#FCEC4F] text-gray-900 relative"
                >
                    <span className="absolute left-4">
                        <Image src="/kakao.svg" alt="" width={34} height={34} />
                    </span>
                    <span className="mx-auto">카카오 회원가입</span>
                </button>

                <button
                    onClick={() => signIn('naver')}
                    className="w-full flex items-center p-4 rounded-xl font-semibold text-base bg-[#58C038] text-white relative"
                >
                    <span className="absolute left-4">
                        <Image src="/naver.svg" alt="" width={34} height={34} />
                    </span>
                    <span className="mx-auto">네이버 회원가입</span>
                </button>
            </div>
        </div>
    );
}
