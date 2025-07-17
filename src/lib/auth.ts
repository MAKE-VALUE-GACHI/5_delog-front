import { NextAuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';
import GoogleProvider from 'next-auth/providers/google';

interface ProviderOptions {
    clientId: string;
    clientSecret: string;
}

interface AllProviderOptions {
    kakao: ProviderOptions;
    naver: ProviderOptions;
    google: ProviderOptions;
}

const providerOptions: AllProviderOptions = {
    kakao: {
        clientId: process.env.KAKAO_ID!,
        clientSecret: process.env.KAKAO_SECRET!,
    },
    naver: {
        clientId: process.env.NAVER_ID!,
        clientSecret: process.env.NAVER_SECRET!,
    },
    google: {
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
    },
};

export const authOptions: NextAuthOptions = {
    providers: [
        KakaoProvider(providerOptions.kakao),
        NaverProvider(providerOptions.naver),
        GoogleProvider(providerOptions.google),
    ],
    session: {
        strategy: 'jwt' as const,
        maxAge: 60 * 60 * 24,
    },
    pages: {
        signIn: '/auth/social',
    },
    callbacks: {
        signIn: async () => {
            return true;
        },
        jwt: async ({ token }) => {
            return token;
        },
        session: async ({ session }) => {
            return session;
        },
    },
};
