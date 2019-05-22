<template>
  <div>
    <el-container>
      <el-header>
        <Menu></Menu>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
      <el-footer>
        <div class="footer"></div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Menu from '../components/Menu'

export default {
  name: 'Index',
  components: {Menu}
}
</script>

<style scoped>
  .footer {
    width: 100%;
    height: 100px;
    background-color: #28a5c4;
  }
</style>
