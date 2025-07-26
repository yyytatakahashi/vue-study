<template>
  <div class="home container py-5">
    <!-- ヒーローセクション -->
    <div class="bg-light text-dark p-5 rounded-4 shadow-sm mb-5 text-center">
      <h1 class="display-5 fw-bold">Welcome to Vue 3 + Bootstrap</h1>
      <p class="fs-5 text-secondary">ようこそ</p>
    </div>
    <!-- カードグリッド -->
    <div class="row g-4">
      <!-- カード1 -->
      <div class="col-md-6">
        <div class="card border-0 shadow-sm rounded-4 h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-semibold mb-3">Bootstrapとは？</h5>
            <p class="card-text text-muted mb-4">
              Bootstrapは、モダンでレスポンシブなデザインを簡単に構築できるCSSフレームワークです。
            </p>
            <router-link class="btn btn-outline-primary mt-auto" to="/bootmenu"
              >詳しく見る</router-link
            >
          </div>
        </div>
      </div>
      <!-- カード2 -->
      <div class="col-md-6">
        <div class="card border-0 shadow-sm rounded-4 h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-semibold mb-3">CRUDシステムサンプル</h5>
            <p class="card-text text-muted mb-4">CRUDについて学習しましょう。</p>
            <router-link class="btn btn-outline-primary mt-auto" to="/crud">詳しく見る</router-link>
          </div>
        </div>
      </div>
      <!-- カード3 -->
      <div class="col-md-6">
        <div class="card border-0 shadow-sm rounded-4 h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-semibold mb-3">githubの使い方</h5>
            <p class="card-text text-muted mb-4">githubの使い方について</p>
            <router-link class="btn btn-outline-primary mt-auto" to="/git">詳しく見る</router-link>
          </div>
        </div>
      </div>
      <!-- カード4 -->
      <div class="col-md-6">
        <div class="card border-0 shadow-sm rounded-4 h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-semibold mb-3">デプロイ方法</h5>
            <p class="card-text text-muted mb-4">デプロイ方法について</p>
            <router-link class="btn btn-outline-primary mt-auto" to="/git-deploy"
              >詳しく見る</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
}
</script>
