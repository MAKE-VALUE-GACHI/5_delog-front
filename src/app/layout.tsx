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
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
