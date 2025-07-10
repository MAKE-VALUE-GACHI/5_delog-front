'use client';

import Header from '@/components/layout/Header';

export default function App() {
    return (
        <>
            <Header className="justify-end">
                <a href="#">
                    <img src="/settings.svg" />
                </a>
            </Header>
            <h1>홈페이지</h1>
        </>
    );
}
