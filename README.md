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
