<template>
  <div class="bootmenu">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h1 class="mb-4">Bootstrap紹介メニュー</h1>
        <p class="lead">学びたいBootstrapを選んでください</p>
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">フォーム（Forms）</h5>
            <p class="card-text">フォームについて学びましょう！</p>
            <router-link class="btn btn-primary col-12" to="/bootforms">見てみる</router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-8 mx-auto">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">未定</h5>
            <p class="card-text">○○について学びましょう！</p>
            <router-link class="btn btn-primary col-12" to="">見てみる</router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-8 mx-auto">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">未定</h5>
            <p class="card-text">○○について学びましょう！</p>
            <router-link class="btn btn-primary col-12" to="">見てみる</router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-8 mx-auto">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">未定</h5>
            <p class="card-text">○○について学びましょう！</p>
            <router-link class="btn btn-primary col-12" to="">見てみる</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bootMenu',
}
</script>
