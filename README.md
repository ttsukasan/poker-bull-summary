# nuxt-pages-sample

https://ttsukasan.github.io/nuxt-pages-sample/

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

## `.nojekyll` の追加

`npm run generate` で `dist/.nojekyll` が作成されることを確認

## GitHub Actions の設定

`.github/workflows/gh-pages.yml` を作成し、記載する

PushしてActionsが動作することを確認

`gh-pages` ブランチが作成されることを確認
 
## github pages の設定

リポジトリの Settings > Pages を設定

**Source** Branch: `gh-pages` `/(root)`

_Your site is ready to be published at_ で表示しているものがサイトのURLとなる。

トップページ表示されることを確認（5分くらい待つ）

## Project pages として表示

`nuxt.config.js` に記載

`my_project_name` はブランチ名に置き換える

```
+ router: {
+   base: '/my_project_name/'
+ }
```

```
  link: [
-   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
+   { rel: 'icon', type: 'image/x-icon', href: '/my_project_name/favicon.ico' }
  ]
```

Faviconなどが表示されることを確認

## Google tag manager

```bash
$ npm install @nuxtjs/gtm
```

`nuxt.config.js` に記載

```javascript
export default {
  modules: [
    '@nuxtjs/gtm',
  ],
  gtm: {
    id: 'GTM-XXXXXXX'
  }
}
```
