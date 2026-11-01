import Link from 'next/link';
import { pageMetadata, siteUrl } from '@/lib/seo';
import { ArrowDown, ArrowRight, ChevronRight } from 'lucide-react';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { GameGallery } from '@/components/game-gallery';

export const metadata = pageMetadata(
  '',
  'SOFT TENNIS SPARK（ソフトテニススパーク）公式サイト',
  'SOFT TENNIS SPARKはiPhone向けの3Dソフトテニスゲーム。フリック操作でショットを打ち分け、練習・大会・2人のシングルス・4人のダブルスを楽しめます。基本プレイ無料予定。現在リリース準備中です。',
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
              'iPhone向けの3Dソフトテニスゲーム。練習、大会、Game Centerによる2人・4人の通信対戦に対応。現在リリース準備中。',
            inLanguage: 'ja',
            gamePlatform: 'iOS',
            operatingSystem: 'iOS',
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
          <p className="eyebrow">iPhone向けソフトテニスゲーム</p>
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
          <span className="status-dot" /> iPhone向け・リリース準備中
          <small>基本プレイ無料予定 / 広告・App内課金あり</small>
          <a href="#game" className="button button-primary">
            ゲーム紹介を見る <ArrowDown size={17} />
          </a>
        </div>
      </section>
      <div className="news-strip">
        <span>NEWS</span>
        <time dateTime="2026-11-01">2026.11.01</time>
        <p>
          公式サイトをリニューアル。新しいビジュアルとゲーム情報を公開しました。
        </p>
        <a href="#screens" aria-label="ゲーム画面を見る">
          <ArrowRight size={20} />
        </a>
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
                サーブ・レシーブ・ストローク・ボレー・スマッシュ・ラリーの6種類から選べます。球種やコートなどの条件を設定して、練習したいショットに取り組めます。
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
                地区大会から世界大会まで、各地の大会で優勝を目指します。シングルスとダブルスで個性豊かなCPU選手と対戦し、自分の選手を育てていきます。
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
                Centerを使って対戦相手を探したり、友達を招待したりできます。シングルスは2人、ダブルスは4人で遊べます。ランダム対戦での勝利数を競うランキングもあります。
              </p>
              <div className="mode-tags">
                <span>2人 / 4人</span>
                <span>Game Center</span>
              </div>
            </article>
          </div>
          <p className="fine-print">
            通信対戦・ランキングにはインターネット接続とGame
            Centerへのサインインが必要です。通信対戦は開発中のβ機能です。
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
            { id: 'haru', name: 'ハル' },
            { id: 'ren', name: 'レン' },
            { id: 'nova', name: 'ノヴァ' },
            { id: 'zenith', name: 'ゼニス' },
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
                <small>{c.id.toUpperCase()}</small>
                {c.name}
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
                初期設定は横画面です。設定で縦画面対応を有効にすると、端末の向きに合わせて切り替わります。
              </dd>
            </div>
            <div>
              <dt>操作をカスタマイズ</dt>
              <dd>
                ショットボタンの位置・サイズや視点設定を、縦横それぞれで調整できます。
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
              src={`${base}/images/home.webp`}
              alt="選手の育成とプレイモードを選べる縦画面ホーム"
              width="390"
              height="794"
              loading="lazy"
            />
            <figcaption>ホーム画面</figcaption>
          </figure>
          <figure>
            <img
              src={`${base}/images/portrait.webp`}
              alt="縦画面でプレイするストローク練習"
              width="390"
              height="844"
              loading="lazy"
            />
            <figcaption>縦画面プレイ</figcaption>
          </figure>
        </div>
      </section>
      <section className="start-section" id="information">
        <div className="section-wrap start-inner">
          <div>
            <p className="eyebrow">RELEASE INFORMATION</p>
            <h2>配信について</h2>
            <p>
              SOFT TENNIS SPARK
              <br />
              iPhone向け・リリース準備中
            </p>
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
                <dd>iPhone</dd>
              </div>
              <div>
                <dt>プレイ人数</dt>
                <dd>1人 / 通信対戦 2人・4人</dd>
              </div>
              <div>
                <dt>料金</dt>
                <dd>
                  基本プレイ無料予定
                  <br />
                  <small>広告・App内課金あり</small>
                </dd>
              </div>
              <div>
                <dt>配信時期</dt>
                <dd>決まり次第、本サイトでお知らせします</dd>
              </div>
            </dl>
            <Link href="/support" className="spec-support">
              遊び方・よくある質問 <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="final-notes section-wrap">
        <p>
          掲載画像は開発中のものです。内容・仕様は変更される場合があります。キービジュアルはイメージです。
        </p>
        <Link href="/support">
          プレイヤーサポート <ArrowRight size={16} />
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
