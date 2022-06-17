# nuxt-pages-sample
nuxtでGithubPagesを書いてみる

参考 https://qiita.com/peaceiris/items/154fc3f9bccf9e4eb137

# create

プレーンな設定で作成

```
> npx create-nuxt-app nuxt-pages-sample

create-nuxt-app v4.0.0
Generating Nuxt.js project in nuxt-pages-sample
? Project name: nuxt-pages-sample
? Programming language: JavaScript
? Package manager: Npm
? UI framework: None
? Nuxt.js modules: None
? Linting tools: None
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Static (Static/Jamstack hosting)
? Development tools: None
? What is your GitHub username? ttsukasan
? Version control system: Git
```

## Build Setup

```bash
# インストール
$ npm install

# 動作確認
$ npm run dev

# ビルド
$ npm run generate
```

## `dist` ディレクトリを作成

`dist/.keep` を作成、コミットする

## `.nojekyll` の追加

`npm run generate` で `dist/.nojekyll` が作成されることを確認

## GitHub Actions の設定

`.github/workflows/gh-pages.yml` を作成し、記載する

## github pages の設定



## Project pages として表示


