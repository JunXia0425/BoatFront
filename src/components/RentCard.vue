<template>
  <el-card :body-style="{ padding: '5px' }" shadow="hover">
    <img :src="getImg()"
         class="image">
    <div style="padding: 5px;">
      <h3>{{info.name}}</h3>
      <div class="bottom clearfix">
        <el-row>
        <el-col >
          艇长：<span>{{info.length}}米</span>
        </el-col>
        <el-col>
          产地：<span>{{info.region}}</span>
        </el-col>
        <el-col>
          年份：<span>{{info.year}}</span>
        </el-col>
        <el-col>
          限载人数：<span>{{info.maxpeople}}人</span>
        </el-col>
          <el-col>
            停泊码头：<span>{{info.wharfName}}</span>
          </el-col>
        </el-row>
        <el-button type="text" class="button" @click="toInfo(info.yachtId)">详情</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'RentCard',
  props: ['info'],
  methods: {
    getImg () {
      if (!this.info.path) {
        return '../../static/default.png'
      }
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
