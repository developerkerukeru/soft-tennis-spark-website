import type { Metadata } from 'next';
export const siteUrl =
  'https://developerkerukeru.github.io/soft-tennis-spark-website';
export function pageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  const url = siteUrl + (path ? '/' + path + '/' : '/');
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'ja_JP',
      siteName: 'SOFT TENNIS SPARK',
      title,
      description,
      url,
      images: [
        {
          url: siteUrl + '/images/share.jpg',
          width: 1280,
          height: 592,
          alt: 'SOFT TENNIS SPARK',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteUrl + '/images/share.jpg'],
    },
  };
}
