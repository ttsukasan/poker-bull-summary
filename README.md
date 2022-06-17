# nuxt-pages-sample
nuxtでGithubPagesを書いてみる

# create

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
? What is your GitHub username? t.tsukamoto
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

## `.nojekyll` の追加

`npm run generate` で `dist/.nojekyll` が作成されることを確認

## GitHub Actions の設定

`.github/workflows/gh-pages.yml` を作成し、記載する

