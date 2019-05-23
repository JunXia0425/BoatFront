<template>
  <el-container>
    <el-main>
      <el-card>
        <div class="news-page">
          <div class="page-header">
            <el-row style="padding-bottom: 10px">
              <el-col :span="18"><h2>{{menu.name}}</h2></el-col>
              <el-col :span="6"><search></search></el-col>
            </el-row>
          </div>
          <div class="archive-list">
            <ul>
              <li v-for="article in articles" :key="article.id">
                <h4><a href=""
                       @click.prevent="toArticle(article.id)">{{article.title}}<span>{{article.lastEditTime}}</span></a></h4>
              </li>
            </ul>
          </div>
          <el-pagination
            layout="total, prev, pager, next"
            :total="this.total"
            :current-page="this.current"
            @current-change="currentChange"
            background>
          </el-pagination>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import Search from './Search'
export default {
  name: 'ArticleList',
  components: {Search},
  data () {
    return {
      menu: {},
      articles: [],
      total: 0,
      current: 0,
      size: 0
    }
  },
  methods: {
    getData () {
      this.getMenu()
      this.$axios.post('api/api/article/list/condition', {
        articlePage: {
          current: this.current,
          size: 10
        },
        menuId: this.$route.params.menuid,
        keyWord: this.keyWord
      }).then(response => {
        var result = response.data.result
        this.articles = result.records
        this.total = result.total
        this.current = result.current
        this.size = result.size
      })
    },
    toArticle (id) {
      this.$router.push('/article/' + id)
    },
    currentChange (currentPage) {
      this.current = currentPage
    },
    getMenu () {
      var url = '/api/api/menu'
      this.$axios.post(url, {id: this.$route.params.menuid}).then(res => {
        this.menu = res.data.result
      })
    }
  },
  mounted () {
    this.getData()
  },
  watch: {
    '$route': 'getData'
  },
  computed: {
    keyWord () {
      return this.$store.state.keyWord
    }
  }
}
</script>

<style scoped>
  .news-page {
    padding: 20px;
  }

  .page-header {
    margin-bottom: 10px;
    border-bottom: 1px solid #DDD;
  }

  .page-header h1 {
    font-size: 24px;
    font-weight: 500;
    color: #333;
    padding-bottom: 10px;
  }

  .page-header h2 {
    font-size: 24px;
    font-weight: 500;
    color: #333;
    padding-bottom: 10px;

  }

  ol, ul {
    list-style: none;
  }
  .archive-list{
    min-height: 550px;
    padding: 10px 20px 10px 20px;
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
