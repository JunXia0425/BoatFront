<template>
  <el-card :body-style="{ padding: '5px' }" shadow="hover">
    <img :src="getImg()"
         class="image">
    <div style="padding: 5px;">
      <h3>{{info.productName}}</h3>
      <div class="bottom clearfix">
        <el-row>
          <el-col>
            描述：<span>{{info.description}}</span>
          </el-col>
          <el-col>
            产地：<span>{{info.region}}</span>
          </el-col>
<!--          <el-col>-->
<!--            价格：<span>{{info.price}}</span>-->
<!--          </el-col>-->
        </el-row>
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
      return 'http://localhost:8082/manage/' + this.info.path
    },
    toInfo (id) {
      this.$router.push('/main/' + id)
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
