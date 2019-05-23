<template>
    <el-container>
      <el-main>
      <el-card>
        <h2 style="font-size: 24px;text-align: center">{{article.title}}</h2>
        <el-row>
          <el-col>
              <el-divider>编辑：{{article.editor}}    时间：{{article.lastEditTime}}</el-divider>
          </el-col>
          <el-col>
            <div class="content" v-html="article.content" style="padding: 20px 50px;min-height: 450px;"></div>
          </el-col>
        </el-row>
      </el-card>
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
h2 {
  margin: 0 auto;
}
</style>
