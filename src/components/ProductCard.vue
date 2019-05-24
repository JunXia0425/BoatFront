<template>
  <el-card :body-style="{ padding: '5px' }" shadow="hover">
    <img :src="getImg()"
         class="image">
    <div style="padding: 5px;">
      <h3>{{info.productName}}</h3>
      <div class="bottom clearfix">
        <el-row>
          <el-col>
            类别：<span>{{info.typeName}}</span>
          </el-col>
          <el-col>
            产地：<span>{{info.region}}</span>
          </el-col>
          <el-col>
            价格：<span>{{info.price}}</span> 元
          </el-col>
        </el-row>
        <el-button type="text" class="button" @click="toInfo(info.id)">详情</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['info'],
  methods: {
    getImg () {
      if (!this.info.imgUrl) {
        return '../../static/default.png'
      }
      return 'http://localhost:8082/manage/' + this.info.imgUrl
    },
    toInfo (id) {
      this.$router.push('/productinfo/' + id)
    }
  }

}
</script>

<style scoped>
  .bottom {
    margin-top: 13px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  td span {
    color: #333333;
  }

  table {
    width: 100%;
    margin-bottom: 5px;
    text-align: left;
  }
</style>
