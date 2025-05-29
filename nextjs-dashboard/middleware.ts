// オブジェクトを用いてNextAuthを初期化
// ミドルウェアを利用することで認証を検証するまで保護されたルートのレンダリングが開始されないことでアプリケーションのセキュリティとパフォーマンスの両方が向上する
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};