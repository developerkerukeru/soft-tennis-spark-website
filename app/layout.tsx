import type { Metadata } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const repositoryOwner = process.env.GITHUB_REPOSITORY?.split('/')[0] ?? '';
const defaultSiteUrl =
  process.env.GITHUB_ACTIONS === 'true' && repositoryOwner
    ? `https://${repositoryOwner}.github.io${basePath}`
    : 'https://soft-tennis-spark.kerukerukeru.chatgpt.site';
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
    'iPhoneゲーム「SOFT TENNIS SPARK」の公式情報、プライバシーポリシー、利用規約、サポート。',
  icons: {
    icon: `${basePath}/app-icon.png`,
    apple: `${basePath}/app-icon.png`,
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
