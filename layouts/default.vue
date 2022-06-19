<!-- 基本レイアウト -->
<template>
  <div>
    <!-- ヘッダー -->
    <Header></Header>
    <!-- メイン -->
    <div class="container w-full md:max-w-3xl mx-auto pt-16">
      <Nuxt/>
    </div>
    <!-- フッター -->
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
