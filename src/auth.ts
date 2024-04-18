import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import google from 'next-auth/providers/google';
import res from "@/utils/parseCredentials";

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    trustHost: true,
    secret: res.resASec,
    redirectProxyUrl: "https://khoj-gurbani-next-gk7mrmbuo-evilgods-projects.vercel.app/api/auth",
    providers: [
        google({
            clientId: res.resID ?? '',
            clientSecret: res.resSec ?? '',
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            if (token) {
                const param = {
                    email: token.email,
                    name: token.name,
                    photo_url: token.picture,
                    provider: token.provider,
                    social_account_id: token.social_account_id
                }
                const res = await fetch(`https://api2.khojgurbani.org/api/v1/login-with-social`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(param)
                    }
                )
                    .then(res => res.json())
                    .then(res => res.data)
                    .catch(err => err)
                if (res.status === 'success') {
                    session.resData = res;
                }
                else {
                    session.resData = null;
                }
            }
            return session;
        },
        async jwt({ token, account }) {
            if (account) {
                token.provider = account.provider;
                token.social_account_id = account.providerAccountId;
            }
            return token
        }
    },
});