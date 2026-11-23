import type { Metadata } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const repositoryOwner = process.env.GITHUB_REPOSITORY?.split('/')[0] ?? '';
const defaultSiteUrl =
  process.env.GITHUB_ACTIONS === 'true' && repositoryOwner
    ? `https://${repositoryOwner}.github.io${basePath}`
    : 'https://developerkerukeru.github.io/soft-tennis-spark-website';
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl).replace(
  /\/$/,
  '',
);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SOFT TENNIS SPARK 公式サイト',
    template: '%s | SOFT TENNIS SPARK',
  },
  description:
    'iPhone・iPad向け3Dソフトテニスゲーム「SOFT TENNIS SPARK」の公式サイト。App Storeで配信中。基本プレイ無料。ゲーム紹介、更新情報、サポート。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'SOFT TENNIS SPARK',
    title: 'SOFT TENNIS SPARK 公式サイト',
    description:
      'iPhone・iPad向け3Dソフトテニスゲーム。App Storeで配信中。練習・大会・2人／4人の通信対戦を楽しめます。基本プレイ無料。',
    images: [
      {
        url: siteUrl + '/images/keyvisual.webp',
        width: 1280,
        height: 592,
        alt: 'SOFT TENNIS SPARK キービジュアル',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: `${basePath}/app-icon.png?v=20261101`,
    apple: `${basePath}/app-icon.png?v=20261101`,
  },
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
