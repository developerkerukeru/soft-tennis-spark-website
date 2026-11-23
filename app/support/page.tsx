import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { appRelease } from '@/lib/release';
import {
  AlertCircle,
  Gamepad2,
  RefreshCw,
  ShoppingBag,
  Users,
} from 'lucide-react';
import { LegalHero, SiteFooter, SiteHeader } from '@/components/site-chrome';

export const metadata = pageMetadata(
  'support',
  '遊び方・よくある質問 | SOFT TENNIS SPARK',
  'ソフトテニススパークの操作方法、縦画面への切り替え、Game Center通信対戦、広告削除・ハート無制限、購入の復元とお問い合わせ。',
);

const faqs = [
  {
    icon: Gamepad2,
    title: 'ハートはいつ消費・回復しますか？',
    body: 'バージョン1.0.1では、練習は消費なし、大会は1試合1個、通信対戦は1試合2個です。ハートは最大5個で、10分ごとに1個回復します。購入商品による消費免除などは、アプリ内の案内をご確認ください。',
  },
  {
    icon: Users,
    title: '友達とペアを組んで対戦したい',
    body: 'バージョン1.0.1では、友達とペアを組んでダブルスの対戦相手を探せます。友達との対戦後は、同じメンバーでの再戦も可能です。全員のアプリを最新の公開バージョンに更新し、Game Centerにサインインしてください。',
  },
  {
    icon: Users,
    title: '練習のランキングは何を競いますか？',
    body: 'サーブ・レシーブ・ストローク・ボレー・スマッシュ・ラリーの6種類について、成功数と連続成功数をそれぞれ競います。Game Centerへのサインインとインターネット接続が必要です。',
  },
  {
    icon: Gamepad2,
    title: 'どの端末で遊べますか？',
    body: 'App Storeで配信中です。iOS 16.4以降のiPhone、iPadOS 16.4以降のiPadに対応しています。Android版・ブラウザー版は配信していません。',
  },
  {
    icon: ShoppingBag,
    title: '無料で遊べますか？',
    body: '基本プレイ無料です。アプリには広告と、希望する方が購入できる有料アイテムが含まれます。',
  },
  {
    icon: Gamepad2,
    title: '縦画面で遊びたい',
    body: '起動画面が終わったら、iPhoneを縦に持つと縦画面に切り替わります。横に持つと横画面に戻ります。視点とショットボタンの位置・サイズは、縦横それぞれの設定を保存できます。iPadは横画面でのプレイに対応しています。',
  },
  {
    icon: ShoppingBag,
    title: '広告削除とハート無制限の違いは？',
    body: '「バナー・自動広告削除」を購入すると、バナーと自動動画広告が表示されなくなります。ハートは通常どおり消費します。「ハート無制限」は、ハートを消費せずに遊べる別の商品です。広告は削除されません。どちらを購入した場合も、報酬を増やすなどの任意視聴の広告は利用できます。報酬の内容は各画面でご確認ください。',
  },
  {
    icon: ShoppingBag,
    title: '24時間ハート無制限について',
    body: '購入してから24時間、ハートを消費せずに遊べます。自動更新はなく、広告の削除や獲得コインの増額は含まれません。期限なしのハート無制限をお持ちの場合、この商品は購入できません。価格と利用条件はアプリ内の購入画面をご確認ください。',
  },
  {
    icon: Gamepad2,
    title: '基本操作を確認したい',
    body: '設定の「チュートリアル」では、ストローク・ボレー・スマッシュ・サーブに加え、視点や移動などの操作を練習できます。見本の動きと打つタイミングの合図を参考にしてください。フリック感度・コース感度も自分に合わせて調整できます。',
  },
  {
    icon: Users,
    title: '通信対戦を始められない',
    body: 'iPhone・iPadの設定でGame Centerへサインインし、通信状態をご確認ください。「誰かと」または「友達と」を選び、シングルスは2人、ダブルスは4人で参加します。参加者はそれぞれ異なるGame Centerアカウントと、同じ公開バージョンのアプリを使用してください。友達対戦では、必要な人数がそろい、全員が準備完了すると始まります。接続後の通信品質を測定している間は、そのままお待ちください。',
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
    body: 'アプリを完全に終了してから起動し直し、安定した通信環境で更新を確認してください。App Storeに新しいバージョンがある場合は、先にアップデートしてください。改善しない場合は、端末の再起動をお試しください。',
  },
];

export default function SupportPage() {
  return (
    <main id="main-content">
      <SiteHeader currentPage="/support" />
      <div className="document-shell support-shell">
        <LegalHero
          eyebrow="PLAYER SUPPORT"
          title="サポート"
          description="ダウンロード、遊び方、通信対戦、購入についてのよくある質問をまとめています。"
        />

        <div className="support-download"><a href={appRelease.storeUrl} className="button button-primary">App Storeでダウンロード・更新</a><p>バージョン{appRelease.version}の公開内容に合わせたご案内です（2026年11月23日確認）。</p></div>

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
              ゲームの進行データと設定は、原則として利用中のiPhone・iPad本体に保存されます。アプリを削除すると進行データを復元できないことがあります。機種変更や再インストールの前にご注意ください。
            </p>
          </div>
        </section>

        <section className="contact-card" aria-labelledby="contact-title">
          <p className="section-number">CONTACT</p>
          <h2 id="contact-title">お問い合わせ</h2>
          <p>
            不具合、ご質問、ご要望は、以下のメールアドレスまでお問い合わせください。アプリのバージョン、iPhone・iPadの機種、iOS・iPadOSのバージョン、問題が発生した画面と手順を添えていただくと、確認がスムーズです。
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
