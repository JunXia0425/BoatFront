<template>
  <div id="main">
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
              <td width="70" class="td1">游艇长度:</td>
              <td width="200">{{info.length}} 米</td>
              <td width="46" class="td1">限载:</td>
              <td width="186">{{info.maxpeople}} 人</td>
              <td width="70" class="td1">游艇卧室:</td>
              <td width="200">{{info.bedroom?info.bedroom:'-'}} 间</td>
            </tr>
            <tr height="10"></tr>
            <tr>
              <td width="59" class="td1">出厂年份：</td>
              <td width="200">{{info.year?info.year:'-'}} 年</td>
              <td width="36" class="td1">产地：</td>
              <td width="186">{{info.region}}</td>
              <td width="59" class="td1">最高速度：</td>
              <td width="144">{{info.maxSpeed?info.maxSpeed:'-'}} 节</td>
              <td width="59" class="td1">标配船员：</td>
              <td width="200">{{info.standardSeaman}}</td>
            </tr>
            <tr height="10"></tr>
            <tr>
              <td class="td1">标配项目：</td>
              <td colspan="3">{{info.standardSubject}}</td>
            </tr>
            <tr height="10"></tr>
            <tr>
              <td class="td1">选配项目：</td>
              <td colspan="7">{{info.apolegamySubject}}</td>
            </tr>
            <tr height="15"></tr>
            <tr>
              <td colspan="8" class="td_border"></td>
            </tr>
            <tr height="15"></tr>
            <tr>
              <td class="td1">游艇隶属：</td>
              <td colspan="3">{{info.belonging===0?'企业':'船东'}}</td>
              <td class="td1">停泊码头：</td>
              <td colspan="3">{{info.wharfName}}</td>
            </tr>
            <tr height="10"></tr>
            <tr>
              <td class="td1">保险说明：</td>
              <td colspan="7">{{info.insuranceDeclare}}</td>
            </tr>
            </tbody>
          </table>
        </div><!--top_t end -->
        <div class="list_table">
          <table width="100%">
            <tbody>
            <tr class="tr1">
              <td class="td1" width="516">游艇航线</td>
              <td width="246">租艇玩专享价</td>
              <td width="238">门市价</td>
            </tr>
            <tr v-for="(route,index) in info.routes" :key="index">
              <td class="td1">{{route.routeDesc}}
              </td>
              <td><font color="#FF3300"><strong>￥{{route.price}}</strong></font>元</td>
              <td>-</td>
            </tr>
            <tr>
              <td colspan="3">
                <table width="100%" class="table1">
                  <tbody>
                  <tr height="65">
                    <td width="95" style="color:#666666;">价格备注</td>
                    <td class="td1">重大节假日价格通常有所上浮，请咨询客服</td>
                  </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            </tbody>
          </table>
        </div><!--list_table end -->
        <ul class="link_l c" style="padding-left:20px;">
          <li><a target="_blank" class="a1" @click.prevent="advance()">立即预定</a></li>
        </ul><!--link_l end -->
      </div><!--summary_content end -->
    </div><!--summary end -->
    <div class="about">
      <div class="public_title c">
        <div class="title fl">游艇简介</div>
      </div>
      <div class="ubb"><p style="text-align: center;"><img src="../assets/upload/image/20190125/15484066109708830.jpg"
                                                           title="1.jpg" alt="1.jpg"><img
        src="../assets/upload/image/20190125/15484066133803129.jpg" title="3.jpg" alt="3.jpg"><img
        src="../assets/upload/image/20190125/15484066192801175.jpg" title="4.jpg" alt="4.jpg"><img
        src="../assets/upload/image/20190125/15484066238217985.jpg" title="5.jpg" alt="5.jpg"><img
        src="../assets/upload/image/20190125/15484066279274870.jpg" title="6.jpg" alt="6.jpg"><img
        src="../assets/upload/image/20190125/15484066309591276.jpg" title="7.jpg" alt="7.jpg"><img
        src="../assets/upload/image/20190125/15484066337098478.jpg" title="8.jpg" alt="8.jpg"><img
        src="../assets/upload/image/20190125/15484066367362150.jpg" title="9.jpg" alt="9.jpg"></p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      info: {}
    }
  },
  methods: {
    getData () {
      let url = 'api/api/leasing-yacht/info?id=' + this.$route.params.id
      this.$axios.get(url).then(
        res => {
          this.info = res.data.result
        }
      )
    },
    advance () {
      this.$store.commit('putYachtName', this.info.name)
      this.$router.push('/advance/' + this.$route.params.id)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
  @import "../assets/css/public.css";
  @import "../assets/css/style.css";
</style>
