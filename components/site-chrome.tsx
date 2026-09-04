import Image from 'next/image';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="SOFT TENNIS SPARK ホーム">
        <Image
          src={`${basePath}/app-icon.png`}
          alt=""
          width={44}
          height={44}
          priority
        />
        <span>
          <b>SOFT TENNIS</b>
          <strong>SPARK</strong>
        </span>
      </Link>
      <nav aria-label="メインナビゲーション">
        <Link href="/#about">ゲーム紹介</Link>
        <Link href="/support">サポート</Link>
        <Link href="/privacy">プライバシー</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link
            className="brand footer-brand"
            href="/"
            aria-label="SOFT TENNIS SPARK ホーム"
          >
            <Image
              src={`${basePath}/app-icon.png`}
              alt=""
              width={38}
              height={38}
            />
            <span>
              <b>SOFT TENNIS</b>
              <strong>SPARK</strong>
            </span>
          </Link>
          <p>iPhoneで楽しむ、スタイライズド3Dソフトテニスゲーム。</p>
        </div>
        <nav aria-label="フッターナビゲーション">
          <Link href="/privacy">プライバシーポリシー</Link>
          <Link href="/terms">利用規約</Link>
          <Link href="/support">サポート</Link>
          <a href="mailto:appdeveloper.kerukeru@gmail.com">お問い合わせ</a>
        </nav>
      </div>
      <p className="copyright">© 2026 SOFT TENNIS SPARK</p>
    </footer>
  );
}

export function LegalHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="document-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
