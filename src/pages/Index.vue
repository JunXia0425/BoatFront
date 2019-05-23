<template>
  <div>
    <el-container>
      <el-header>
        <Menu></Menu>
      </el-header>
      <el-main style="min-height: 500px">
          <router-view></router-view>
      </el-main>
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Menu from '../components/Menu'
import MyFooter from '../components/MyFooter'

export default {
  name: 'Index',
  components: {MyFooter, Menu}
}
</script>
<style scoped>
</style>
