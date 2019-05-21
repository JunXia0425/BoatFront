<template>
  <div class="news-page">
    <div class="page-header">
      <h2>文章列表</h2>
    </div>
    <div class="archive-list">
      <ul>
        <li v-for="article in articles" :key="article.id">
          <h4><a href=""
                 @click.prevent="toArticle(article.id)">{{article.title}}<span>{{article.lastEditTime}}</span></a></h4>
        </li>
      </ul>
      <div class="multipage">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getData (menuid) {
      var url = '/api/api/article/list/' + menuid
      this.$axios.post(url, {
        current: 1,
        size: 10
      }).then(response => {
        this.articles = response.data.result.records
      })
    },
    toArticle (id) {
      this.$router.push('/article/' + id)
    }
  },
  mounted () {
    this.getData(this.$route.params.menuid)
  }
}
</script>

<style scoped>
  .news-page {
    padding: 20px;
  }

  .page-header {
    margin-bottom: 10px;
  }

  .page-header h1 {
    border-bottom: 1px solid #DDD;
    font-size: 24px;
    font-weight: 500;
    color: #333;
    padding-bottom: 10px;
  }

  .page-header h2 {
    border-bottom: 1px solid #DDD;
    font-size: 24px;
    font-weight: 500;
    color: #333;
    padding-bottom: 10px;

  }

  ol, ul {
    list-style: none;
  }

  .archive-list li {
    padding: 10px 0;
    border-bottom: 1px dashed #DDD;
  }

  .archive-list li h4 a {
    color: #409EFF;
    text-decoration: none;
  }

  .archive-list span {
    float: right;
    color: #666;
  }
</style>
