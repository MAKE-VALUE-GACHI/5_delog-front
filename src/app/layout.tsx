import '../styles/globals.css';
import Providers from './providers';

export const metadata = {
    title: 'My App',
    description: 'Example with NextAuth',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body>
                <Providers>
                    <div className="min-h-screen w-screen max-w-[393px] mx-auto">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}
