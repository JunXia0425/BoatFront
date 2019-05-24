<template>
  <el-input v-model="keyword" clearable placeholder="请输入关键字" @clear="clickHandle">
    <el-button slot="append" icon="el-icon-search" @click="clickHandle">搜索</el-button>
  </el-input>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      keyword: '',
      clearable: true
    }
  },
  methods: {
    clickHandle () {
      this.$store.commit('putKeyWord', this.keyword)
    },
    clearHandle () {
      this.$store.commit('removeKeyWord')
    }
  },
  mounted () {
    this.$store.commit('removeKeyWord')
  }
}
</script>

<style scoped>

</style>
