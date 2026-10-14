import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertCircle,
  Gamepad2,
  RefreshCw,
  ShoppingBag,
  Users,
} from 'lucide-react';
import { LegalHero, SiteFooter, SiteHeader } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: 'サポート',
  description:
    'SOFT TENNIS SPARKの遊び方、通信対戦、購入復元、トラブル解決のご案内。',
};

const faqs = [
  {
    icon: Gamepad2,
    title: '基本操作を確認したい',
    body: 'ホーム画面の「チュートリアル」では、ストローク、ボレー、スマッシュ、オーバーサーブ、アンダーカットサーブを試合画面で練習できます。操作の説明だけを見直したい場合は「操作方法」から各トピックを選んでください。',
  },
  {
    icon: Users,
    title: '通信対戦を始められない',
    body: 'iPhoneの設定でGame Centerへサインインし、通信状態をご確認ください。「誰かと」または「友達と」を選び、シングルスは2人、ダブルスは4人で参加します。参加者はそれぞれ異なるGame Centerアカウントと、同じ公開バージョンのアプリを使用してください。ダブルスはペアを決め、4人全員が準備完了すると始まります。',
  },
  {
    icon: Users,
    title: 'ランキングに勝利が反映されない',
    body: '「誰かと」のランダム対戦で正常に勝利すると1ポイント加算されます。ダブルスは勝者ペアの各プレイヤーに1ポイントが入り、シングルスとは別に集計されます。友達対戦、敗北、通信切断では加点されません。未送信の勝利は端末に保存され、再送されます。ランキングの名前はGame Centerの表示名です。',
  },
  {
    icon: AlertCircle,
    title: '通信対戦が途中で終了した',
    body: '通信切断やアプリがバックグラウンドに移った場合などは、画面に中断理由が表示されます。案内を確認してロビーへ戻り、通信環境を確認してから新しい対戦を始めてください。途中の試合への再接続には対応していません。',
  },
  {
    icon: ShoppingBag,
    title: '購入済みアイテムを復元したい',
    body: '購入時と同じApple AccountでApp Storeへサインインし、ショップ画面の「購入を復元」を選んでください。決済や返金についてはAppleの購入履歴またはAppleサポートをご利用ください。',
  },
  {
    icon: RefreshCw,
    title: 'アップデート後に動作がおかしい',
    body: 'アプリを完全に終了してから起動し直し、安定した通信環境で更新を確認してください。App Storeに新しいバージョンがある場合は、先にアップデートしてください。改善しない場合はiPhoneを再起動します。',
  },
];

export default function SupportPage() {
  return (
    <main>
      <SiteHeader />
      <div className="document-shell support-shell">
        <LegalHero
          eyebrow="PLAYER SUPPORT"
          title="サポート"
          description="遊び方や通信対戦、購入に関するよくあるご質問をご案内します。"
        />

        <section className="faq-grid" aria-label="よくあるご質問">
          {faqs.map(({ icon: Icon, title, body }) => (
            <article key={title}>
              <Icon aria-hidden="true" />
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </section>

        <section className="support-note">
          <AlertCircle aria-hidden="true" />
          <div>
            <h2>セーブデータについて</h2>
            <p>
              ゲームの進行データと設定は、原則としてiPhone本体に保存されます。アプリを削除すると進行データを復元できないことがあります。機種変更や再インストールの前にご注意ください。
            </p>
          </div>
        </section>

        <section className="contact-card" aria-labelledby="contact-title">
          <p className="section-number">CONTACT</p>
          <h2 id="contact-title">お問い合わせ</h2>
          <p>
            不具合、ご質問、ご要望は、以下のメールアドレスまでお問い合わせください。アプリのバージョン、iPhoneの機種、iOSのバージョン、問題が発生した画面と手順を添えていただくと、確認がスムーズです。
          </p>
          <a
            className="contact-route"
            href="mailto:appdeveloper.kerukeru@gmail.com"
          >
            appdeveloper.kerukeru@gmail.com
          </a>
        </section>

        <nav className="document-links" aria-label="関連文書">
          <Link href="/privacy">プライバシーポリシー</Link>
          <Link href="/terms">利用規約</Link>
          <a
            href="https://support.apple.com/ja-jp/billing"
            target="_blank"
            rel="noreferrer"
          >
            Appleの購入・請求サポート
          </a>
        </nav>
      </div>
      <SiteFooter />
    </main>
  );
}
