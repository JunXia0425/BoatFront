<template>
<el-input v-model="keyword" placeholder="请输入关键字"><el-button slot="append" icon="el-icon-search" @click="$store.commit('putKeyWord',keyword)">搜索</el-button></el-input>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      keyword: ''
    }
  }
}
</script>

<style scoped>

</style>
