import '@/styles/index.scss';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <div className={poppins.className}>
                <Component {...pageProps} />
            </div>
        </SessionProvider>
    );
}
