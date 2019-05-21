<template>
    <el-container>
      <el-main>
      <h2>{{article.title}}</h2>
      <h4>
        <span>{{article.editor}}</span>
        <span>{{article.time}}</span>

      </h4>
      <div v-html="article.content" style="padding: 0 50px"></div>
      </el-main>
    </el-container>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      article: {}
    }
  },
  methods: {
    getArticle (id) {
      var url = '/api/api/article/' + id
      this.$axios.post(url, {}).then(response => {
        this.article = response.data.result
      })
    }
  },
  mounted () {
    var id = this.$route.params.articleid
    this.getArticle(id)
  }
}
</script>

<style scoped>

</style>
