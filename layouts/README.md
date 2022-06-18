# layouts

レイアウトが指定されていないすべてのページに `layouts/default.vue` が使用されます。
必ず `<Nuxt>` コンポーネントを追加してください。


カスタムコンポーネントを作成した場合は、ページに指示する必要があります。

`layouts/blog.vue` を指定する場合

```html
<script>
export default {
  layout: 'blog',
}
</script>
```


## エラーページ

`layouts/error.vue` はエラーが発生したとき常に表示されるコンポーネントです。

このレイアウトは特別であり、ページとして扱う必要があります。

