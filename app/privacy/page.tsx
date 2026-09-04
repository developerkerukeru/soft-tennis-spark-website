import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalHero, SiteFooter, SiteHeader } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description:
    'SOFT TENNIS SPARKにおける利用者情報の取扱いについて説明します。',
};

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <div className="document-shell">
        <LegalHero
          eyebrow="PRIVACY POLICY"
          title="プライバシーポリシー"
          description="SOFT TENNIS SPARK（以下「本アプリ」）における、利用者情報の取扱いを説明します。"
        />

        <aside className="document-summary" aria-label="概要">
          <p>
            <strong>基本方針</strong>
          </p>
          <p>
            本アプリは、広告配信や行動追跡を行いません。ゲームの進行データは原則としてお使いの端末内に保存されます。
          </p>
        </aside>

        <article className="document-body">
          <p className="updated">制定・最終更新：2026年9月4日</p>

          <section>
            <h2>1. 収集・保存する情報</h2>
            <h3>端末内に保存される情報</h3>
            <p>
              本アプリは、ゲームの提供と設定の維持のため、次の情報を端末内に保存します。これらは通常、運営者のサーバーへ送信されません。
            </p>
            <ul>
              <li>ゲームの進行状況、チュートリアルの完了状況</li>
              <li>操作・音量・表示などの設定</li>
              <li>ゲーム内コイン、装備、ショップおよび所持品の状態</li>
              <li>購入済みアイテムの利用状態を確認するための端末内情報</li>
            </ul>
            <p>
              本アプリを削除した場合、端末内のデータも削除され、復元できないことがあります。
            </p>
          </section>

          <section>
            <h2>2. Game Centerを利用する場合</h2>
            <p>
              通信対戦はAppleのGame Centerを使用します。利用者がGame
              Centerへサインインし通信対戦を開始した場合、本人確認、対戦相手の検索、リアルタイム対戦のために、Appleが管理するプレイヤー識別子、表示名、対戦接続情報などが処理されます。
            </p>
            <p>
              対戦中は、プレイヤーの位置、打球・得点の状態、利き手、選択中の装備など、試合を同期するために必要なゲーム情報が対戦相手の端末との間で送受信されます。本アプリの運営者は独自の対戦サーバーを運用しておらず、対戦履歴を独自サーバーへ保存しません。
            </p>
          </section>

          <section>
            <h2>3. App内課金を利用する場合</h2>
            <p>
              App内課金はAppleのStoreKitを使用します。購入処理、支払情報および取引の管理はAppleが行います。本アプリは、購入対象の商品ID、購入・復元の結果、利用権を反映するために必要な取引情報を受け取ることがあります。運営者がクレジットカード番号や銀行口座などの決済情報を取得・保存することはありません。
            </p>
          </section>

          <section>
            <h2>4. アプリ更新サービス</h2>
            <p>
              本アプリは、更新データを配信するためExpoの更新サービスを利用します。更新の確認・取得時に、IPアドレス、端末やOSの種類、アプリおよび更新のバージョン、通信日時などの技術情報がサービス提供者により処理される場合があります。
            </p>
          </section>

          <section>
            <h2>5. 広告、解析および端末権限</h2>
            <p>
              本アプリは、第三者広告、広告目的のトラッキング、利用行動を分析するための解析SDKを使用していません。また、位置情報、カメラ、マイク、連絡先、写真へのアクセスを要求しません。
            </p>
          </section>

          <section>
            <h2>6. 利用目的</h2>
            <p>
              本ポリシーに記載する情報は、ゲームの進行と設定の保存、通信対戦、購入内容の提供・復元、アプリの安全な配信および更新、不具合対応のためにのみ利用します。
            </p>
          </section>

          <section>
            <h2>7. 保存期間と削除</h2>
            <p>
              端末内のゲームデータは、利用者が本アプリを削除するか、該当データを初期化するまで保存されます。AppleおよびExpoが処理する情報の保存期間は、各サービスの規定に従います。Game
              Centerの利用停止やApple
              Accountに関する管理は、iOSの設定およびAppleの窓口から行えます。
            </p>
          </section>

          <section>
            <h2>8. お子さまの利用</h2>
            <p>
              本アプリは、運営者が氏名、住所、メールアドレスなどを入力させる仕組みを設けておらず、お子さまから個人情報を意図的に収集しません。Game
              CenterおよびApp内課金の利用には、Apple
              Accountのファミリー設定や購入承認など、保護者の管理機能をご利用ください。
            </p>
          </section>

          <section>
            <h2>9. 安全管理</h2>
            <p>
              本アプリは、取り扱う情報を必要最小限にし、OSおよび各サービスが提供する保護機能を用いて、不正アクセス、漏えい、改ざんなどの防止に努めます。ただし、インターネット通信の完全な安全性を保証するものではありません。
            </p>
          </section>

          <section>
            <h2>10. 外部サービスのポリシー</h2>
            <p>
              AppleおよびExpoによる情報の取扱いについては、各社の最新のポリシーをご確認ください。
            </p>
            <ul className="link-list">
              <li>
                <a
                  href="https://www.apple.com/jp/legal/privacy/jp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Appleプライバシーポリシー
                </a>
              </li>
              <li>
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/jp/terms.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Appleメディアサービス利用規約（Game Centerを含む）
                </a>
              </li>
              <li>
                <a
                  href="https://expo.dev/privacy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Expo Privacy Policy
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2>11. 本ポリシーの変更</h2>
            <p>
              機能の変更や法令への対応などにより、本ポリシーを変更することがあります。重要な変更がある場合は、本ページまたは本アプリ内で分かりやすくお知らせします。
            </p>
          </section>

          <section>
            <h2>12. お問い合わせ</h2>
            <p>
              本ポリシーおよび本アプリに関するお問い合わせ方法は、
              <Link href="/support">サポートページ</Link>をご確認ください。
            </p>
          </section>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
