# SOFT TENNIS SPARK 公式サイト

アプリ紹介、サポート、プライバシーポリシー、利用規約を掲載するGitHub Pages用サイト。
ゲーム本体とは独立したGitリポジトリです。このディレクトリ内でGit操作してください。

## 公開先

- サイト: https://developerkerukeru.github.io/soft-tennis-spark-website/
- サポートURL: https://developerkerukeru.github.io/soft-tennis-spark-website/support/
- プライバシーポリシーURL: https://developerkerukeru.github.io/soft-tennis-spark-website/privacy/
- 利用規約: https://developerkerukeru.github.io/soft-tennis-spark-website/terms/
- リポジトリ: https://github.com/developerkerukeru/soft-tennis-spark-website
- お問い合わせ: appdeveloper.kerukeru@gmail.com

## 公開方法

`main`へのpushで `.github/workflows/deploy-pages.yml` がNext.jsの静的サイトを生成し、GitHub Pagesへ公開します（実際のworkflow名は同ディレクトリ参照）。ビルド成果物は`out/`です。ゲームソースやExpo生成物は含めません。

ローカルでGitHub Pagesと同じビルドを行う場合（PowerShell）:

```powershell
$env:GITHUB_ACTIONS = 'true'
$env:GITHUB_REPOSITORY = 'developerkerukeru/soft-tennis-spark-website'
npm run build:github
```

`next.config.ts`はGitHubのリポジトリ名からbasePathを決めます。画像も`NEXT_PUBLIC_BASE_PATH`を付けて参照します。公開後はActionsの成功と公開URLの本文反映を確認してください。

## 2026-10-14 更新

- シングルス・4人ダブルス・形式別ランキングの紹介とFAQを現行仕様に更新。
- プライバシーにユーザー名、育成、通信共有、ランキング、お問い合わせ、GitHub Pagesの扱いを反映。
- ロゴは既存のmarketing/instagram素材、ゲーム画像は2026-10-08の開発時実画面を使用。画面が変更される旨を併記。
- 静的ビルド・TypeScript成功。390×844のブラウザーで4ページの導線と表示、トップ・プライバシー・規約の横あふれなしを確認。
- App Store ConnectのURL入力、審査提出、アプリ本体のEAS Update／Buildはこのサイト更新に含まない。

## 2026-11-01 redesign

- Reuses the current landscape/portrait splash artwork from `art/branding/20261101`, current Expo app icon, and game character portraits. No new artwork was synthesized.
- Screenshots: singles/doubles from `art/qa/smooth-rally-20261101`; training, tournament, portrait gameplay and home from `art/qa/portrait-refine-20261101`. All explicitly presented as development screenshots.
- Responsive key art, four-image interactive gallery, training/tournament/online beta, rival lineup, portrait/landscape customization, pre-release product information.
- Preserves existing support/privacy/terms URLs and public contact email.
- Updates privacy disclosures for AdMob, RevenueCat, Game Center friend rewards and motion controls; separates ad removal and unlimited-heart purchase explanations. Does not update App Store Connect declarations.
- Local production static export + TypeScript passed. Browser widths 320, 390, 768, 1440 checked for horizontal overflow. Gallery switching, navigation to all document pages, asset load and console error checks passed. Real iPhone not tested.
- Read vendor references: Google Mobile Ads iOS data disclosure; RevenueCat Apple App Privacy. Formal release date remains unannounced.

## 2026-11-01 日本語・検索情報の見直し

- 見出しと紹介文を具体的な操作・モード・育成・設定の説明へ改稿。抽象的な決め台詞を削除し、ゲーム画面の説明とサポートFAQも自然な表現へ統一。
- 正式名称・日本語名・iPhone向け・配信準備中を本文と検索用説明文に明記。配信予定と基本プレイ無料についてのFAQを追加。
- 4ページに固有のtitle、description、canonical、OG/Twitter情報。既存キービジュアルから1280×592のJPEG共有画像を生成。
- 本文と一致するVideoGame JSON-LDと4 URLのsitemap.xmlを追加。架空の発売日、評価、レビュー、販売情報は追加しない。
- origin直下のrobots.txtは確認時404（プロジェクト配下のrobots.txtではクロール制御できないため追加なし）。Google Search Consoleへの登録・サイトマップ送信・インデックス登録は未実施。検索掲載やAI回答での引用は保証できない。
- Google Search CentralのAI features guidance / OpenAI crawler documentationを参照。特別なAI用ファイルを前提とせず、静的HTMLの本文・見出し・意味の一致を重視。
- 静的ビルド・TypeScript成功。出力HTMLの4ページmetadata、H1、ローカルリンク/画像、JSON-LD parseを検証。ブラウザー320/390/768/1440幅で確認し、小画面の装飾文字のはみ出しを修正。サポート・規約・プライバシーの導線、ギャラリー4種類の切替、console error 0を確認。
- 検証用の記録はgit管理外のwork/seo-verification.json。サイト更新のみ。

## 2026-11-02 ページ単位のヘッダーナビゲーション

- ヘッダーをホーム・サポート・プライバシーポリシー・利用規約の4ページへのリンクに変更。
- 各ページの現在位置をaria-currentと下線・色で表示。モバイルはロゴ下に2列、全リンク44px高。
- 静的ビルド・TypeScript成功。320/390/768/1440幅で全リンク表示と横あふれなし、4ページ遷移と現在位置の一致、console error 0を確認。PC・スマートフォンの画像確認済み。
