<template>
  <div class="about">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h1 class="mb-4">About Page</h1>
        <p class="lead">これはAboutページです。</p>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">プロジェクトについて</h5>
            <p class="card-text">
              このプロジェクトはVue 3とBootstrapを使用して作成されています。 Vue
              Routerを使用してページ間の遷移を実現しています。
            </p>
            <router-link class="btn btn-primary" to="/">ホームに戻る</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>
