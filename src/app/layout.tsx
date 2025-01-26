import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Third Token',
    description: 'Patharmony 的三方模拟登录',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
