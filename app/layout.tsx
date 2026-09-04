import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://soft-tennis-spark.kerukerukeru.chatgpt.site'),
  title: {
    default: 'SOFT TENNIS SPARK 公式サイト',
    template: '%s | SOFT TENNIS SPARK',
  },
  description:
    'iPhoneゲーム「SOFT TENNIS SPARK」の公式情報、プライバシーポリシー、利用規約、サポート。',
  icons: { icon: '/app-icon.png', apple: '/app-icon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
