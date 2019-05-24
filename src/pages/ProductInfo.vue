<template>
  <div id="main">
    <div class="summary">
      <div class="title c">
        <div class="left fl">
          <b>{{info.productName}}</b>
        </div>
      </div><!--title end -->
      <div class="summary_content">
        <div class="top_t">
          <table width="100%">
            <tbody>
            <tr>
              <td width="70" class="td1">装备名称：</td>
              <td width="200" style="font-size: 20px;font-weight: bold;">{{info.productName}}</td>
              <td width="46" class="td1">产地：</td>
              <td width="186">{{info.region}}</td>
              <td width="70" class="td1">类别：</td>
              <td width="200">{{info.typeName}}</td>
            </tr>
            <tr height="10"></tr>
            <tr>
              <td width="70" class="td1">价格：</td>
              <td width="200"><font color="#FF3300"><strong>￥ {{info.price}}</strong></font></td>
            </tr>
            </tbody>
          </table>

        </div><!--top_t end -->
      </div><!--summary_content end -->
    </div><!--summary end -->
    <div class="about">
      <div class="public_title c">
        <div class="title fl">装备简介</div>
      </div>
      <div class="ubb" v-html="info.description" style="min-height: 550px">
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '../components/Slider'

export default {
  name: 'ProductInfo',
  components: {Slider},
  data () {
    return {
      info: {}
    }
  },
  mounted () {
    this.$axios.post('api/api/product/getProduct', {id: this.$route.params.id}).then(response => {
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
