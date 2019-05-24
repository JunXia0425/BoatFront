<template>
  <div id="page">
    <ul class="cb-slideshow">
      <li><span>Image 01</span>
        <div><h3>保障·便捷</h3></div>
      </li>
      <li><span>Image 02</span>
        <div><h3>开心·交友</h3></div>
      </li>
      <li><span>Image 03</span>
        <div><h3>舒适·旅行</h3></div>
      </li>
      <li><span>Image 04</span>
        <div><h3>平价·高服务</h3></div>
      </li>
      <li><span>Image 05</span>
        <div><h3>租赁</h3></div>
      </li>
    </ul>
    <div class="container">
      <header>
        <h1>租艇 <span>购艇 这里都有</span></h1>
        <h2>各种装备等你来拿</h2>
        <h2>快快加入我们</h2>
        <p class="codrops-demos">
          <router-link to="/yachtshow">进入首页</router-link>
        </p>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style scoped>
  @import "../assets/css/jq22.css";
  @import "../assets/css/style3.css";
</style>
