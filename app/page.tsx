import Link from 'next/link';
import { pageMetadata, siteUrl } from '@/lib/seo';
import { appRelease } from '@/lib/release';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { GameGallery } from '@/components/game-gallery';

export const metadata = pageMetadata(
  '',
  'SOFT TENNIS SPARK（ソフトテニススパーク）公式サイト',
  'SOFT TENNIS SPARKはiPhone・iPad向けの3Dソフトテニスゲーム。フリック操作でショットを打ち分け、練習・大会・2人のシングルス・4人のダブルスを楽しめます。iPhone・iPad向けにApp Storeで配信中。基本プレイ無料。',
);
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export default function Home() {
  return (
    <main id="main-content">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoGame',
            '@id': siteUrl + '/#game',
            name: 'SOFT TENNIS SPARK',
            alternateName: 'ソフトテニススパーク',
            url: siteUrl + '/',
            description:
              'iPhone・iPad向けの3Dソフトテニスゲーム。練習、大会、Game Centerによる2人・4人の通信対戦に対応。App Storeで配信中。基本プレイ無料。',
            inLanguage: ['ja', 'en'],
            datePublished: appRelease.releasedAt,
            sameAs: appRelease.storeUrl,
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'JPY',
              url: appRelease.storeUrl,
              availability: 'https://schema.org/InStock',
              description: '基本プレイ無料。広告・App内課金あり。',
            },
            gamePlatform: 'iOS',
            operatingSystem: 'iOS 16.4 / iPadOS 16.4以降',
            genre: ['スポーツ', 'ソフトテニス'],
            image: siteUrl + '/images/keyvisual.webp',
            playMode: [
              'https://schema.org/SinglePlayer',
              'https://schema.org/MultiPlayer',
            ],
            numberOfPlayers: {
              '@type': 'QuantitativeValue',
              minValue: 1,
              maxValue: 4,
            },
          }).replace(/</g, '\u003c'),
        }}
      />
      <section
        className="keyvisual"
        aria-label="SOFT TENNIS SPARK キービジュアル"
      >
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet={`${base}/images/keyvisual-portrait.webp`}
          />
          <img
            src={`${base}/images/keyvisual.webp`}
            width="1280"
            height="592"
            alt="SOFT TENNIS SPARK。青空のスタジアムに集結する個性豊かなテニスプレイヤーたち"
            fetchPriority="high"
          />
        </picture>
        <span className="visual-label">OFFICIAL WEBSITE</span>
      </section>
      <section className="hero-intro">
        <div>
          <p className="eyebrow">iPhone・iPad向けソフトテニスゲーム</p>
          <h1>
            SOFT TENNIS <em>SPARK</em>
          </h1>
          <p className="intro-description">
            ソフトテニススパークは、フリック操作でショットを打ち分ける3Dソフトテニスゲームです。
            <br className="mobile-break" />
            練習や大会のほか、2人・4人での通信対戦を楽しめます。
          </p>
        </div>
        <div className="release-status">
          <strong>App Storeで配信中</strong>
          <small>基本プレイ無料 / 広告・App内課金あり</small>
          <a href={appRelease.storeUrl} className="button button-primary">
            App Storeでダウンロード
          </a>
          <a href="#game" className="intro-more">ゲーム紹介を見る</a>
        </div>
      </section>
      <div className="news-strip">
        <span>NEWS</span>
        <time dateTime={appRelease.updatedAt}>2026.11.22</time>
        <p>
          バージョン1.0.1を公開。友達とのペア参加、スタンプ、練習ランキングに対応しました。
        </p>
        <a href="#updates">更新内容</a>
      </div>
      <section className="game-intro section-wrap" id="game">
        <div className="section-label">
          <span>01</span> THE GAME
        </div>
        <div className="intro-grid">
          <h2>
            フリック操作で
            <br />
            ショットを打ち分ける
          </h2>
          <div>
            <p>
              フリックの方向でドライブ、スライス、ロブを打ち分けられます。
              <br />
              ボレーやスマッシュも使って、ラリーの中で得点を狙いましょう。
              <br />
              相手の動きを見ながらコースを狙い、打つタイミングを合わせる駆け引きを楽しめます。
            </p>
            <p className="muted">
              移動スティックとショットボタンで操作します。
              <br />
              初めて遊ぶ方は、チュートリアルで基本操作から練習できます。
            </p>
          </div>
        </div>
        <GameGallery />
      </section>
      <section className="modes-section" id="modes">
        <div className="section-wrap">
          <div className="section-label">
            <span>02</span> GAME MODES
          </div>
          <div className="section-title">
            <h2>練習・大会・通信対戦</h2>
            <p>
              ショットの練習、CPUとの大会、友達との対戦に対応しています。
              <br />
              遊び方に合わせてモードを選べます。
            </p>
          </div>
          <div className="mode-list">
            <article>
              <span className="mode-index">01 / TRAINING</span>
              <h3>練習場</h3>
              <p>
                サーブ・レシーブ・ストローク・ボレー・スマッシュ・ラリーの6種類から選べます。球種やコートなどの条件を設定して、練習したいショットに取り組めます。練習はハート消費なし。成功数・連続成功数のランキングにも挑戦できます。
              </p>
              <div className="mode-tags">
                <span>6つの練習</span>
                <span>チュートリアル</span>
              </div>
            </article>
            <article>
              <span className="mode-index">02 / TOURNAMENT</span>
              <h3>大会</h3>
              <p>
                地区大会から全国・世界、そして天界大会へ。シングルスで個性豊かなCPU選手と対戦し、各大会の優勝を目指します。獲得したコインや育成の星で、選手やラケットを強化できます。
              </p>
              <div className="mode-tags">
                <span>CPU対戦</span>
                <span>選手の育成</span>
              </div>
            </article>
            <article>
              <span className="mode-index">
                03 / ONLINE <b>β版</b>
              </span>
              <h3>通信対戦</h3>
              <p>
                Game
                Centerを使って、2人のシングルス・4人のダブルスを楽しめます。友達とペアを組んで対戦相手を探したり、友達同士で再戦したりできます。試合の合間にはスタンプで挨拶できます。
              </p>
              <div className="mode-tags">
                <span>2人 / 4人</span>
                <span>Game Center</span>
              </div>
            </article>
          </div>
          <p className="fine-print">
            通信対戦・ランキングにはインターネット接続とGame
            Centerへのサインインが必要です。ダブルスの通信対戦には4人の参加者が必要です。通信対戦はβ版として提供しています。
          </p>
        </div>
      </section>
      <section className="rivals section-wrap" aria-labelledby="rivals-title">
        <div className="section-label">
          <span>03</span> THE RIVALS
        </div>
        <div className="section-title">
          <h2 id="rivals-title">登場キャラクター</h2>
          <p>
            大会では、さまざまな選手が対戦相手として登場します。
            <br />
            見た目だけでなく、プレースタイルの違いにも注目です。
          </p>
        </div>
        <div className="rival-lineup">
          {[
            { id: 'haru', name: 'ハル', title: 'はじめての挑戦者' },
            { id: 'ren', name: 'レン', title: '県大会の強打者' },
            { id: 'shion', name: 'マッハ', title: '高速ストローカー' },
            { id: 'reina', name: 'レイナ', title: '全国の女王' },
            { id: 'leo', name: 'クロフォード', title: 'フィジカルエリート' },
            { id: 'luna', name: 'ルナ', title: '幻影のレフティ' },
            { id: 'jin', name: 'レオ', title: '世界王者' },
            { id: 'cosmo', name: 'アマテニス', title: 'ソフトテニスの女神' },
          ].map((c) => (
            <figure key={c.id}>
              <img
                src={base + '/images/' + c.id + '.webp'}
                width="384"
                height="512"
                alt={c.name + 'のゲーム内キャラクター'}
                loading="lazy"
              />
              <figcaption>
                {c.name}
                <small>{c.title}</small>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="fine-print">登場選手の一部を紹介しています。</p>
      </section>
      <section className="your-style section-wrap" id="style">
        <div className="style-copy">
          <div className="section-label">
            <span>04</span> YOUR STYLE
          </div>
          <h2>
            選手の育成と
            <br />
            <em>プレイ設定</em>
          </h2>
          <p>
            選手の能力を育てたり、ラケットや着せ替えを選んだりできます。
            <br />
            視点や操作ボタンも、遊びやすい設定に調整できます。
          </p>
          <dl>
            <div>
              <dt>3つの視点</dt>
              <dd>
                コートを見渡す固定視点、選手を後ろから見るTPS視点、選手の目線で見るFPS視点を選べます。
              </dd>
            </div>
            <div>
              <dt>縦画面・横画面に対応</dt>
              <dd>
                iPhoneは縦画面・横画面、iPadは横画面で遊べます。iPhoneでは視点やショットボタンの位置・サイズを、縦横それぞれに設定できます。
              </dd>
            </div>
            <div>
              <dt>操作をカスタマイズ</dt>
              <dd>
                フリック感度・コース感度、操作ボタンの左右入れ替え、フリック方向への球種の割り当てを調整できます。ゲーム内の表示は日本語・英語に対応しています。
              </dd>
            </div>
          </dl>
        </div>
        <div className="portrait-showcase">
          <span className="orbit-word" aria-hidden="true">
            SCREEN MODES
          </span>
          <figure>
            <img
              src={`${base}/images/store-home.webp`}
              alt="選手の育成とプレイモードを選べる縦画面ホーム"
              width="554"
              height="1200"
              loading="lazy"
            />
            <figcaption>ホーム画面</figcaption>
          </figure>
          <figure>
            <img
              src={`${base}/images/store-portrait.webp`}
              alt="iPhoneの縦画面でプレイするシングルスのサーブ"
              width="554"
              height="1200"
              loading="lazy"
            />
            <figcaption>縦画面プレイ</figcaption>
          </figure>
        </div>
      </section>
      <section className="release-updates section-wrap" id="updates" aria-labelledby="updates-title">
        <div className="section-title">
          <div><p className="eyebrow">UPDATE</p><h2 id="updates-title">バージョン{appRelease.version}の更新内容</h2></div>
          <p><time dateTime={appRelease.updatedAt}>2026年11月22日公開</time><br />App Storeからアップデートできます。</p>
        </div>
        <div className="update-grid">
          <article><h3>友達とペアで通信対戦</h3><p>友達と一緒にダブルスの対戦相手を探せます。シングルス・ダブルスの「どちらでも」での募集や、友達との再戦にも対応しました。</p></article>
          <article><h3>スタンプで挨拶</h3><p>対戦相手やペアに、スタンプで挨拶や声かけができます。試合終了後にも送り合えます。</p></article>
          <article><h3>ハートを使わず練習</h3><p>練習はハート消費なしで遊べるようになりました。6種類の練習で、成功数と連続成功数の世界ランキングにも挑戦できます。</p></article>
          <article><h3>操作とチュートリアルを改善</h3><p>コース感度の調整や操作ボタンの左右入れ替えに対応。チュートリアルの見本再生・タイミング案内と、オーバーサーブの打ちやすさも改善しました。</p></article>
        </div>
        <p className="fine-print">詳しい更新内容は<a href={appRelease.storeUrl}>App Storeのバージョン履歴</a>をご覧ください。</p>
      </section>
      <section className="start-section" id="information">
        <div className="section-wrap start-inner">
          <div>
            <p className="eyebrow">RELEASE INFORMATION</p>
            <h2>今すぐプレイ</h2>
            <p>
              SOFT TENNIS SPARK
              <br />
              iPhone・iPad向けに配信中
            </p>
            <a href={appRelease.storeUrl} className="button button-primary download-button">App Storeでダウンロード</a>
            <p className="download-note">基本プレイ無料 / 広告・App内課金あり</p>
          </div>
          <div className="spec-panel">
            <h3>ゲーム情報</h3>
            <dl>
              <div>
                <dt>タイトル</dt>
                <dd>SOFT TENNIS SPARK</dd>
              </div>
              <div>
                <dt>ジャンル</dt>
                <dd>3Dソフトテニス</dd>
              </div>
              <div>
                <dt>対応端末</dt>
                <dd>iPhone / iPad</dd>
              </div>
              <div>
                <dt>プレイ人数</dt>
                <dd>1人 / 通信対戦 2人・4人</dd>
              </div>
              <div>
                <dt>料金</dt>
                <dd>
                  基本プレイ無料
                  <br />
                  <small>広告・App内課金あり</small>
                </dd>
              </div>
              <div>
                <dt>配信開始</dt>
                <dd><time dateTime={appRelease.releasedAt}>2026年11月15日</time></dd>
              </div>
              <div>
                <dt>対応OS</dt>
                <dd>{appRelease.minimumOS}</dd>
              </div>
              <div>
                <dt>対応言語</dt>
                <dd>日本語 / 英語</dd>
              </div>
            </dl>
            <Link href="/support" className="spec-support">
              遊び方・よくある質問
            </Link>
          </div>
        </div>
      </section>
      <section className="final-notes section-wrap">
        <p>
          掲載画面には以前のバージョンや開発中のものを含みます。現在のアプリとは表示が異なる場合があります。キービジュアルはイメージです。
        </p>
        <Link href="/support">
          プレイヤーサポート
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
