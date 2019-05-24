<template>
  <div class="block">
    <el-carousel height="350px" type="card">
      <el-carousel-item v-for="item in pics" :key="item.id">
        <img :src="'http://localhost:8082/manage/'+item.path" alt="" style="height: 100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: ['yachtId'],
  data () {
    return {
      pics: []
    }
  },
  methods: {
    getPics () {
      this.$axios.post('api/api/slider-img/get', {yachtId: this.yachtId}).then(res => {
        this.pics = res.data.result
      })
    }
  },
  mounted () {
    this.getPics()
  }
}
</script>

<style scoped>
</style>
