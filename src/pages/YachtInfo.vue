<template>
  <div id="main">
    <slider v-bind:yacht-id="this.$route.params.id"></slider>
    <div class="summary">
      <div class="title c">
        <div class="left fl">
          <b>{{info.name}}</b>
        </div>
      </div><!--title end -->
      <div class="summary_content">
        <div class="top_t">
          <table width="100%">
            <tbody>
            <tr>
              <td width="70" class="td1">游艇名称：</td>
              <td width="200" style="font-size: 20px;font-weight: bold;">{{info.name}}</td>
              <td width="46" class="td1">艇长：</td>
              <td width="186">{{info.length}} 米</td>
              <td width="70" class="td1">最高航速：</td>
              <td width="200">{{info.maxSpeed?info.maxSpeed:'-'}} 节</td>
            </tr>
            <tr height="10"></tr>
            <tr>
              <td width="59" class="td1">产地：</td>
              <td width="200">{{info.region?info.region:'-'}}</td>
              <td width="36" class="td1">年份：</td>
              <td width="186">{{info.year}}</td>
              <td width="59" class="td1">售价：</td>
              <td width="144">{{info.price}} 万元</td>
              <td width="70" class="td1">游艇类型：</td>
              <td width="200">{{info.classificationName}}</td>
            </tr>
            </tbody>
            <tfoot>
            <el-row type="flex" justify="center" style="width: 100%">
              <el-col style="padding-top: 20px;">
                <el-button type="primary" round size="medium" @click="$router.push({name : 'buy',params: {info}})">我要购买</el-button>
              </el-col>
            </el-row>
            </tfoot>
          </table>

        </div><!--top_t end -->
      </div><!--summary_content end -->
    </div><!--summary end -->
    <div class="about">
      <div class="public_title c">
        <div class="title fl">游艇简介</div>
      </div>
      <div class="ubb" v-html="info.description" style="min-height: 550px">
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '../components/Slider'

export default {
  name: 'YachtInfo',
  components: {Slider},
  data () {
    return {
      info: {}
    }
  },
  mounted () {
    this.$axios.post('api/api/yacht/getYacht', {id: this.$route.params.id}).then(response => {
      this.info = response.data.result
    }
    )
  }
}
</script>

<style scoped>
  @import "../assets/css/public.css";
  @import "../assets/css/style.css";
</style>
