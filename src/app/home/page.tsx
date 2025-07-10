'use client';

import Container from '@/components/layout/Container';
import Header from '@/components/layout/Header';
import Image from 'next/image';

export default function App() {
    return (
        <Container>
            <Header className="justify-end">
                <a href="#">
                    <Image
                        src="/settings.svg"
                        alt="Settings"
                        width={24}
                        height={24}
                    />
                </a>
            </Header>
            <h1>홈페이지</h1>
        </Container>
    );
}
