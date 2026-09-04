import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Gamepad2,
  LifeBuoy,
  Radio,
  ShieldCheck,
  Trophy,
} from 'lucide-react';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">SOFT TENNIS GAME FOR iPHONE</p>
          <h1 id="hero-title">
            指先の一打が、
            <br />
            <em>コートを走る。</em>
          </h1>
          <p className="hero-lead">
            移動、打点、フリックの速さ。ソフトテニスらしい駆け引きを、
            親しみやすい3Dコートで楽しむiPhoneゲームです。
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#about">
              ゲームについて <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" href="/support">
              サポートを見る
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="screen-frame">
            <Image
              src="/gameplay.png"
              alt="SOFT TENNIS SPARKの3D試合画面"
              width={844}
              height={390}
              priority
            />
          </div>
          <div className="score-card" aria-hidden="true">
            <span>RALLY</span>
            <strong>GAME ON</strong>
          </div>
        </div>
      </section>

      <section className="release-links" aria-label="リリース情報">
        <Link href="/privacy">
          <ShieldCheck aria-hidden="true" />
          <span>
            <b>プライバシーポリシー</b>
            <small>データの取扱いを確認</small>
          </span>
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
        <Link href="/support">
          <LifeBuoy aria-hidden="true" />
          <span>
            <b>サポート</b>
            <small>困ったときの解決方法</small>
          </span>
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <p className="section-number">01 / ABOUT THE GAME</p>
        <h2 id="about-title">
          ソフトテニスの面白さを、
          <br />
          いつでも手の中に。
        </h2>
        <p>
          ストローク、ボレー、スマッシュ、2種類のサーブを、ひとつのフリック操作で打ち分けます。
          練習場から大会、Game
          Centerを利用した1対1通信対戦まで、自分のペースで上達できます。
        </p>
      </section>

      <section className="feature-section" aria-labelledby="feature-title">
        <div className="section-heading">
          <p className="section-number">02 / PLAY YOUR WAY</p>
          <h2 id="feature-title">覚える。挑む。つながる。</h2>
          <p>
            初めての一打から真剣勝負まで、プレイに合わせて選べるモードを用意しています。
          </p>
        </div>
        <div className="feature-grid">
          <article>
            <Gamepad2 aria-hidden="true" />
            <p>TRAINING</p>
            <h3>実践で身につく操作</h3>
            <span>
              ストローク、ボレー、スマッシュ、サーブをコート上で段階的に練習。
            </span>
          </article>
          <article>
            <Trophy aria-hidden="true" />
            <p>TOURNAMENT</p>
            <h3>勝ち上がる大会</h3>
            <span>
              個性の異なる選手たちと対戦し、より高いステージを目指します。
            </span>
          </article>
          <article>
            <Radio aria-hidden="true" />
            <p>ONLINE</p>
            <h3>Game Center対戦</h3>
            <span>
              Game Centerを利用して、離れたプレイヤーとリアルタイムで1対1対戦。
            </span>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
