<template>
  <div class="block">
    <el-carousel height="350px">
      <el-carousel-item v-for="item in pics" :key="item.id">
        <img :src="'http://localhost:8082/manage/'+item.path" alt="" style="height: 100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      pics: []
    }
  },
  methods: {
    getPics () {
      this.$axios.post('api/api/slider-img/get', {yachtId: 'a6759d1169147f1c4174bf9267def352'}).then(res => {
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #000000;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #000000;
  }
</style>
