<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">🗓</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">자세히보기</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">추가</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <h2>해야할 목록 🗓</h2>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.container h2 {
  text-align: center;
  margin: 25px auto;
}
</style>