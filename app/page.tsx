import Link from 'next/link';
import { ArrowDown, ArrowRight, ChevronRight } from 'lucide-react';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { GameGallery } from '@/components/game-gallery';
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export default function Home() {
  return (
    <main id="main-content">
      <SiteHeader />
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
          <p className="eyebrow">その一打に、きみらしさを。</p>
          <h1>
            コートに、<em>夢中になれ。</em>
          </h1>
          <p className="intro-description">
            狙って、打ち分けて、勝ち上がる。
            <br className="mobile-break" />
            指先で楽しむ3Dソフトテニス。
          </p>
        </div>
        <div className="release-status">
          <span className="status-dot" /> iPhone向け・リリース準備中
          <small>基本プレイ無料 / 広告・App内課金あり</small>
          <a href="#game" className="button button-primary">
            ゲームを知る <ArrowDown size={17} />
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
            読む。走る。
            <br />
            一打で、変える。
          </h2>
          <div>
            <p>
              相手のいない場所へ、鋭いドライブ。
              <br />
              ネット際へ詰めて、決めるボレー。
              <br />
              頭上を越えるロブで、ラリーの流れを変える。
            </p>
            <p className="muted">
              移動と打点、フリックの速さがプレーをつくる。
              <br />
              ソフトテニスの駆け引きを、立体的なコートで楽しもう。
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
            <h2>
              きみのペースで、
              <br />
              きみの挑戦を。
            </h2>
            <p>
              一打を磨く日も、勝負に挑む日も。
              <br />
              今日の気分に合ったコートへ。
            </p>
          </div>
          <div className="mode-list">
            <article>
              <span className="mode-index">01 / TRAINING</span>
              <h3>
                ひとつずつ、
                <br />
                うまくなる。
              </h3>
              <p>
                サーブ・レシーブ・ストローク・ボレー・スマッシュ・ラリー。6つの練習で、苦手な一打を得意な一打へ。球種やコートを選び、自分のペースで繰り返せます。
              </p>
              <div className="mode-tags">
                <span>6つの練習</span>
                <span>チュートリアル</span>
              </div>
            </article>
            <article>
              <span className="mode-index">02 / TOURNAMENT</span>
              <h3>
                目指すは、
                <br />
                その先の頂点。
              </h3>
              <p>
                地区大会から、さらに大きな舞台へ。異なるプレースタイルのライバルに挑戦。シングルスとダブルスで勝利を重ね、自分の選手を育てよう。
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
              <h3>
                ひとりの熱中を、
                <br />
                みんなの熱戦に。
              </h3>
              <p>
                Game
                Centerで誰かとマッチング、または友達を招待。2人のシングルス、4人のダブルスで対戦できます。ランダム対戦の勝利でランキングにも挑戦。
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
          <h2 id="rivals-title">
            個性がぶつかる、
            <br />
            ライバルたち。
          </h2>
          <p>
            次のコートで待つのは、どんな相手？
            <br />
            勝ち進むほどに、新しい出会いがある。
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
            プレーも、視点も。
            <br />
            <em>自分らしく。</em>
          </h2>
          <p>
            ラケットを選び、キャラクターを着せ替え。
            <br />
            育成した選手で、自分のテニスを見つけよう。
          </p>
          <dl>
            <div>
              <dt>3つの視点</dt>
              <dd>固定・TPS・FPS。コートの見え方を、自分好みに。</dd>
            </div>
            <div>
              <dt>縦でも、横でも</dt>
              <dd>
                広く見渡す横画面と、持ちやすい縦画面。設定で縦画面対応を切り替えられます。
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
            PLAY YOUR WAY.
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
            <p className="eyebrow">NEXT MATCH, YOUR SPARK.</p>
            <h2>
              次の一打が、
              <br />
              待っている。
            </h2>
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
                  基本プレイ無料
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
