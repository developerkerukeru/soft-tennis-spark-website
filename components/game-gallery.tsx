'use client';
import { useState } from 'react';
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const shots = [
  {
    name: 'シングルス',
    image: 'singles',
    text: 'シングルスの対戦画面',
    alt: '3Dコートでのシングルス対戦画面',
  },
  {
    name: 'ダブルス',
    image: 'doubles',
    text: 'ダブルスの対戦画面',
    alt: '4人のプレイヤーが並ぶダブルス対戦画面',
  },
  {
    name: '練習場',
    image: 'training',
    text: '練習の種類と球出し条件を選択',
    alt: '6つの練習と球出し条件を選択する画面',
  },
  {
    name: '大会',
    image: 'tournament',
    text: '大会と対戦相手を確認',
    alt: '地区大会から先の大会と対戦相手を確認する画面',
  },
];
export function GameGallery() {
  const [selected, setSelected] = useState(0);
  const shot = shots[selected];
  return (
    <div className="game-gallery" id="screens">
      <div className="gallery-top">
        <span>IN-GAME SCREENSHOTS</span>
        <span>0{selected + 1} / 04</span>
      </div>
      <div className="gallery-screen" aria-live="polite">
        <img
          src={`${base}/images/${shot.image}.webp`}
          width="814"
          height="390"
          alt={shot.alt}
          loading="lazy"
        />
      </div>
      <div className="gallery-bottom">
        <p>{shot.text}</p>
        <div
          className="gallery-controls"
          role="group"
          aria-label="ゲーム画面の選択"
        >
          {shots.map((item, i) => (
            <button
              key={item.image}
              type="button"
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
