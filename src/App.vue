<template>
  <div id="app">
    <!-- Bootstrap ナビゲーションバー -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">My Vue App</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/" active-class="active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" active-class="active">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- ルーターで表示されるコンテンツ -->
    <main class="container mt-4">
      <router-view />
    </main>
  </div>
</template>

<style>
.router-link-active {
  font-weight: bold;
}
</style>
