<template>
  <el-menu
    :default-active="'1'"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#2b2d2d"
    text-color="#fff"
    active-text-color="#ffd04b"
  router>
    <el-menu-item index="/yachtshow">游艇展</el-menu-item>
    <el-submenu index="/rent">
      <template slot="title">租游艇</template>
      <el-menu-item index="/rent">游艇出租</el-menu-item>
      <el-menu-item index="/qrent">求租</el-menu-item>
      <el-menu-item index="/yacht-entering">游艇入驻</el-menu-item>
      <el-menu-item index="/yacht-service">游艇服务</el-menu-item>
    </el-submenu>
    <el-submenu index="/play">
      <template slot="title">玩游艇</template>
      <el-menu-item index="/regulations">政策法规</el-menu-item>
      <el-menu-item index="/yacht-knowlege">游艇知识</el-menu-item>
      <el-menu-item index="/license">驾照培训</el-menu-item>
      <el-menu-item index="/nautical-knowlege">航海知识</el-menu-item>
    </el-submenu>
    <el-menu-item index="/suporting">游艇配套</el-menu-item>
    <el-menu-item index="/newtech">新技术</el-menu-item>
    <el-menu-item index="/articlelist/54e014ff3fb1e1e1bcb38c9c009f1cba">新闻资讯</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
