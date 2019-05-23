<template>
    <el-main>
      <yacht-filter></yacht-filter>
      <el-row :gutter="20" style="min-height: 500px">
        <el-col :span="4" v-for="(o) in list" :key="o.id" style="margin-bottom: 20px;">
          <ItemCard :info="o"></ItemCard>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="block">
            <el-pagination
              layout="total, prev, pager, next"
              :total="this.total"
            :current-page="this.current"
            @current-change="currentChange"
            background>
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </el-main>
</template>

<script>
import ItemCard from '../components/ItemCard'
import YachtFilter from '../components/YachtFilter'
export default {
  name: 'Show',
  data () {
    return {
      list: [],
      total: 0,
      current: 0,
      size: 0
    }
  },
  methods: {
    getData () {
      var url = '/api/api/yacht/list/condition'
      this.$axios.post(url, {yachtPage: {current: this.current, size: 12}, query: this.query}).then((response) => {
        var result = response.data.result
        this.list = result.records
        this.total = result.total
        this.current = result.current
        this.size = result.size
      })
    },
    currentChange (currentPage) {
      this.current = currentPage
    }
  },
  mounted () {
    this.getData()
  },
  watch: {
    current: function () {
      this.getData()
    },
    query: function () {
      this.getData()
    }
  },
  computed: {
    query () {
      return this.$store.getters.getChoice
    }
  },
  components: {YachtFilter, ItemCard}
}
</script>

<style scoped>

</style>
