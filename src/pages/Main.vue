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
      <div class="ubb"><p style="text-align: center;"><img src="../upload/image/20190125/15484066109708830.jpg"
                                                           title="1.jpg" alt="1.jpg"><img
        src="../upload/image/20190125/15484066133803129.jpg" title="3.jpg" alt="3.jpg"><img
        src="../upload/image/20190125/15484066192801175.jpg" title="4.jpg" alt="4.jpg"><img
        src="../upload/image/20190125/15484066238217985.jpg" title="5.jpg" alt="5.jpg"><img
        src="../upload/image/20190125/15484066279274870.jpg" title="6.jpg" alt="6.jpg"><img
        src="../upload/image/20190125/15484066309591276.jpg" title="7.jpg" alt="7.jpg"><img
        src="../upload/image/20190125/15484066337098478.jpg" title="8.jpg" alt="8.jpg"><img
        src="../upload/image/20190125/15484066367362150.jpg" title="9.jpg" alt="9.jpg"></p></div>
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
  /*reset start*/
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, button, p, blockquote, th, td, hr, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: 700;
  }

  address, caption, cite, code, dfn, em, th, var {
    font-style: normal;
    font-weight: 400;
  }

  ol, ul {
    list-style: none;
  }

  a, a:hover {
    text-decoration: none;
  }

  fieldset, img {
    border: 0;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  audio, canvas, video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
  }

  select {
    padding: 2px 0;
    height: 22px;
    line-height: 18px;
  }

  button, input, select, textarea {
    font-size: 100%;
  }

  button, input[type="button"], input[type="reset"], input[type="submit"] {
    cursor: pointer;
    -webkit-appearance: button;
  }

  q:before, q:after {
    content: '';
  }

  ins {
    text-decoration: none;
  }

  del {
    text-decoration: line-through;
  }

  mark {
    background: #ff0;
  }

  sub, sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  th {
    text-align: inherit;
  }

  iframe {
    display: block;
  }

  html, body {
    overflow-x: hidden;
  }

  body {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    word-wrap: break-word;
    word-break: break-all;
    font: 12px/1.5 tahoma, "microsoft yahei", "\5FAE\8F6F\96C5\9ED1", Arial;
    color: #000;
    background: #fff;
  }

  .fl {
    _display: inline;
    float: left;
  }

  .fr {
    _display: inline;
    float: right;
  }

  .c {
    *zoom: 1
  }

  .c:before, .c:after {
    display: table;
    content: "";
  }

  .c:after {
    clear: both;
  }

  #main {
    margin: 0 auto;
    width: 1080px;
  }

  .header_main_top .left li {
    float: left;
    padding-left: 17px;
    background: url(../img/icong9.png) 0 10px no-repeat;
  }

  .header_main_top .left .li1 a {
    margin-right: 10px;
  }

  .header_main_top .left li a {
    display: inline-block;
    font-family: "宋体";
    color: #818181;
  }

  .header_main_top .left li a:hover {
    color: #00a8c6;
  }

  .header_main_top .right a {
    display: block;
    padding: 0 10px;
    float: right;
    font-family: "宋体";
    color: #818181;
  }

  .header_main_top .right a:hover {
    color: #00a8c6;
  }

  .header_main_top .right .last {
    position: relative;
    margin-left: 13px;
    padding-left: 17px;
    padding-right: 0;
    background: url(../img/icong13.png) 0 7px no-repeat;
  }

  .header_main_top .right .last i {
    position: absolute;
    top: 30px;
    right: -7px;
    z-index: 1;
    display: none;
    width: 279px;
    height: 127px;
    overflow: hidden;
  }

  .header_main_top .right .last:hover i {
    display: block;
  }

  .header_main_bottom .region b {
    font-size: 26px;
    color: #474747;
    /*font-weight:100;*/
  }

  .header_main_bottom .region .t_title img {
    cursor: pointer;
  }

  .header_main_bottom .region .t_list span {
    float: left;
    font-size: 16px;
    color: #666666;
  }

  .header_main_bottom .region .t_list p {
    float: left;
    font-size: 16px;
    width: 423px;
  }

  .header_main_bottom .region .t_list p a {
    float: left;
    margin-right: 14px;
    display: inline-block;
    color: #666666;
  }

  .header_main_bottom .mannav li {
    float: left;
    position: relative;
    padding: 0 13px;
    height: 80px;
    line-height: 80px;
    background: url(../img/bg3.jpg) right center no-repeat;
  }

  .header_main_bottom .mannav li a {
    font-size: 16px;
    color: #212121;
  }

  .header_main_bottom .mannav li a:hover {
    text-decoration: underline;
  }

  .header_main_bottom .mannav .pull_down .t_t span {
    float: left;
    display: block;
    line-height: 1.1em;
    font-size: 16px;
    color: #b4feff;
  }

  .header_main_bottom .mannav .pull_down .t_t p {
    float: left;
    width: 370px;
  }

  .header_main_bottom .mannav .pull_down .t_t p a {
    display: inline-block;
    padding-right: 10px;
    padding-bottom: 10px;
    color: #b4feff;
  }

  .header_main_bottom .mannav .pull_down .t_t p a:hover {
    text-decoration: none;
  }

  .header_main_bottom .mannav .pull_down i {
    position: absolute;
    top: -10px;
    left: 41px;
    z-index: 1;
    display: block;
    width: 13px;
    height: 10px;
    background: url(../img/icong13.png) 0 0 no-repeat;
  }

  .footer_man .footer_f .ul_list li {
    margin-bottom: 10px;
    line-height: 25px;
  }

  .footer_man .footer_f .ul_list span {
    padding-right: 6px;
    float: left;
    display: inline-block;
    font-size: 16px;
    color: #e0e0e0;
  }

  .footer_man .footer_f .ul_list a {
    padding: 0 14px;
    float: left;
    display: inline-block;
    color: #abacac;
    background: url(../img/icong.png) left center no-repeat;
  }

  .footer_man .footer_f .ul_list a:hover {
    color: #fff;
  }

  .footer_man .footer_r .copyright i {
    position: absolute;
    top: 50px;
    right: 0;
    z-index: 1;
    display: block;
    width: 10px;
    height: 1px;
    border-bottom: 2px solid #555757;
  }

  .footer_man .link span {
    float: left;
    color: #6a6b6b;
  }

  .footer_man .link a {
    margin-right: 20px;
    float: left;
    color: #6a6b6b;
  }

  .footer_man .link a:hover {
    color: #f6f6f6;
  }

  #float li {
    position: relative;
    width: 40px;
    height: 57px;
    cursor: pointer;
  }

  #float li a {
    display: block;
    width: 40px;
    height: 57px;
  }

  .paging a {
    float: left;
    display: block;
    margin-right: 5px;
    padding: 0 15px;
    height: 38px;
    line-height: 38px;
    color: #7a7b75;
    border: 1px solid #e4e4e4;
  }

  .paging a:hover {
    color: #fff;
    background: #44c7c8;
    border: 1px solid #44c7c8;
  }

  .paging .right input {
    float: right;
    margin-left: 5px;
    width: 38px;
    height: 38px;
    line-height: 40px;
    color: #7a7b75;
    text-align: center;
    border: 1px solid #e4e4e4;
    background: #fff;
  }

  .window_pj .title_content .ping .fl span {
    display: block;
    float: left;
    margin-right: 20px;
    height: 23px;
    line-height: 23px;
    color: #666666;
  }

  .window_pj .title_content .ping .fl .rate_span em {
    display: block;
    float: left;
    margin-left: 1px;
    width: 23px;
    height: 23px;
    background: url(../img/icong.png) right 0 no-repeat;
  }

  .window_pj .title_content .ping .fl .rate_span span {
    display: block;
    float: left;
    margin: 0 17px;
    width: 1px;
    height: 23px;
    border-right: 1px solid #e0e0e0;
  }

  .window_pj .title_content .ping .fl .rate_span i {
    display: block;
    float: left;
    height: 23px;
    line-height: 23px;
    font-size: 33px;
    font-style: inherit;
    color: #3dc2c3;
  }

  .window_pj .title_content .ping .fl label {
    display: inline-block;
  }

  .window_pj .title_content .ping p {
    float: right;
    font-family: "宋体";
    color: #929292;
    text-align: right;
  }

  .window_pj .title_content .ping p span {
    display: block;
    color: #2e2a2a;
  }

  .status .fl {
    color: #aae6e8;
  }

  .status .fl a {
    display: inline-block;
    color: #aae6e8;
  }

  .status .fl a:hover {
    text-decoration: underline;
  }

  .status .fl .a1 {
    padding-left: 16px;
    background: url(../img/bg15.jpg) left center no-repeat;
  }

  .status .fr {
    color: #aae6e8;
  }

  .status .fr a {
    color: #aae6e8;
  }

  .status .fr .a1 {
    display: inline-block;
    margin-left: 7px;
    width: 58px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 1px solid #d7f9f9;
    border-radius: 10px;
  }

  .status .fr .a1:hover {
    color: #fff;
    background: #f38708;
    border: 1px solid #f38708;
  }

  .options_title .fl {
    margin-left: 21px;
    padding-left: 13px;
    font-size: 16px;
    color: #323232;
    background: url(../img/icong16.png) left center no-repeat;
  }

  .options_title .fr {
    padding-right: 19px;
  }

  .options .time span {
    float: left;
    display: inline-block;
    margin-right: 10px;
    color: #323232;
  }

  .options .time a {
    float: left;
    display: block;
    padding: 0 10px;
    height: 23px;
    line-height: 23px;
    color: #5d5d5d;
  }

  .options .time a:hover {
    color: #fff;
    background: #44c7c8;
  }

  .shop .fl span {
    display: inline-block;
    margin-right: 10px;
    padding: 3px 0 3px 15px;
    font-size: 16px;
    color: #323232;
    line-height: 1em;
    border-left: 3px solid #44c7c8;
  }

  .shop .fl a {
    display: inline-block;
    padding: 0 14px 0 9px;
    height: 18px;
    line-height: 18px;
    font-family: "å®‹ä½“";
    color: #666666;
    background: url(../img/icong19.png) 93% center no-repeat;
  }

  .shop .fr {
    font-family: "å®‹ä½“";
    color: #666666;
  }

  .shop .fr span {
    display: inline-block;
    margin: 0 3px;
    font-size: 22px;
    font-weight: 700;
    line-height: 1em;
    color: #323232;
  }

  .shop .fr a {
    display: inline-block;
    width: 96px;
    height: 23px;
    line-height: 24px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background: #f38708;
    border-radius: 3px;
    margin-top: 0;
    margin-right: 21px;
    margin-bottom: 0;
    margin-left: 11px;
    padding-top: 1px;
  }

  .shop .fr a:hover {
    background: #44c7c8;
  }

  .public .public_title {
    margin-top: 30px;
    margin-bottom: 25px;
    background: url(../img/bg14.jpg) repeat-x center;
  }

  .public .public_title .title {
    padding-left: 17px;
    padding-right: 10px;
    height: 19px;
    line-height: 19px;
    font-size: 20px;
    color: #323232;
    background: #fff;
    border-left: 3px solid #44c7c8;
  }

  .public .public_title .title_r {
    padding-left: 5px;
    background: #fff;
  }

  .public .public_title .title_r a {
    margin-left: 5px;
  }

  .public .public_title .more {
    display: block;
    width: 57px;
    height: 21px;
    line-height: 21px;
    overflow: hidden;
    color: #7c8080;
    text-indent: 11px;
    background: url(../img/bg9.jpg) 0 0 no-repeat #fff;
  }

  .public .public_title .more:hover {
    color: #fff;
    background-position: 0 bottom;
  }

  .public .public_title .a1 {
    float: right;
    display: block;
    padding: 0 10px;
    height: 19px;
    line-height: 19px;
    overflow: hidden;
    color: #7c8080;
    border: 1px solid #a6aaaa;
    border-radius: 10px;
    background: #fff;
  }

  .public .public_title .a1:hover {
    color: #fff;
    border: 1px solid #44c7c8;
    background: #44c7c8;
  }

  .public .list_r ul {
    width: 1118px;
  }

  .public .list_r ul li {
    position: relative;
    float: left;
    margin-bottom: 25px;
    margin-right: 34px;
    width: 337px;
  }

  .public .list_r ul li:hover {
    cursor: pointer;
  }

  .public .list_r .img {
    position: relative;
    width: 337px;
    height: 225px;
    overflow: hidden;
  }

  .public .list_r .img i {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    display: none;
    width: 100%;
    height: 100%;
    background: url(../img/icong34.png);
  }

  .public .list_r .img:hover i {
    display: block;
  }

  .public .list_r .img_cn {
    padding: 16px 15px;
    height: 103px;
    background: #e7f3fb;
    border: 1px solid #e5e5e5;
  }

  .public .list_r .img_cn h2 a {
    line-height: 1em;
    font-size: 20px;
    font-weight: 100;
    color: #010101;
  }

  .public .list_r .img_cn h2 a:hover {
    color: #44c7c8;
  }

  .public .list_r .img_cn p {
    padding-top: 10px;
    line-height: 1.8;
    font-family: "å®‹ä½“";
    color: #333333;
  }

  .public .list_r .img_cn p span {
    display: inline-block;
    color: #666666;
  }

  .public .list_r .msg h2 {
    padding: 0 0 0 20px;
    height: 46px;
    line-height: 46px;
    font-size: 17px;
    font-weight: 100;
    color: #333333;
  }

  .public .list_r .msg .msg_list a {
    display: block;
    margin-top: 14px;
    padding-left: 12px;
    height: 17px;
    overflow: hidden;
    line-height: 1em;
    color: #333333;
    background: url(../img/bg12.jpg) left center no-repeat;
    white-space: nowrap;
  }

  .public .list_r .msg .msg_list a b {
    font-size: 14px;
    font-weight: 100;
  }

  .public .list_r .msg .msg_list a span {
    margin-right: 3px;
    font-size: 16px;
  }

  .public .list_r .msg .msg_list a:hover {
    color: #f38708;
  }

  .slide-caption h2 {
    padding-top: 18px;
    color: #fff;
    font-size: 18px;
    line-height: 1;
  }

  .slide-caption h2 a {
    color: #fff;
    text-decoration: none;
  }

  .slide-caption h2 a:hover, .slide-caption h2 a:focus {
    color: #e6eae2;
    text-decoration: none;
  }

  .slide-caption p {
    padding: 10px 25px 0 0;
    line-height: 22px;
    color: #FFF;
  }

  .slide-callout p:hover {
    background: #e6eae2;
  }

  .slide-callout p a {
    color: #363636;
    text-decoration: none;
    font-family: Helvetica, Arial, sans-serif;
  }

  .slide-callout p a:hover, .slide-callout p a:focus {
    color: #363636;
    text-decoration: none;
  }

  .slide-callout .more {
    padding: 0;
    height: 35px;
  }

  .slide-callout .more a {
    display: inline-block;
    height: 20px;
    overflow: hidden;
    line-height: 20px;
    padding: 8px 25px 7px 25px;
    background: none;
    font-size: 12px;
    color: #fff;
  }

  .slide-callout .more a:hover, .slide-callout .more a:focus {
    background: #000;
    text-decoration: none;
    color: #fff;
  }

  .public .list_rent {
    width: 1080px;
    overflow: hidden;
  }

  .public .list_rent ul {
    width: 1120px;
  }

  .public .list_rent ul li {
    float: left;
    margin-top: 20px;
    margin-right: 29px;
    width: 249px;
    overflow: hidden;
    cursor: pointer;
  }

  .public .list_rent .img {
    position: relative;
    width: 249px;
    height: 169px;
    overflow: hidden;
  }

  .public .list_rent .img i {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    display: none;
    width: 100%;
    height: 100%;
    background: url(../img/icong34.png);
  }

  .public .list_rent ul .img:hover i {
    display: block;
  }

  .public .list_rent .img_cn {
    padding-top: 18px;
    height: 103px;
  }

  .public .list_rent .img_cn h2 a {
    line-height: 1em;
    font-size: 16px;
    font-weight: 100;
    color: #010101;
  }

  .public .list_rent .img_cn h2 a:hover {
    color: #44c7c8;
  }

  .public .list_rent .img_cn p {
    padding-top: 10px;
    line-height: 1.8;
    font-family: "å®‹ä½“";
    color: #333333;
  }

  .public .list_rent .img_cn p span {
    display: inline-block;
    color: #666666;
  }

  .public .review {
    width: 1080px;
    overflow: hidden;
  }

  .public .review .review_x {
    margin-top: 28px;
  }

  .public .review .review_x .right {
    margin-top: 10px;
    width: 304px;
    height: 33px;
    color: #666666;
  }

  .public .review .review_x .right span {
    float: right;
    display: inline-block;
    margin-right: 5px;
    width: 210px;
    text-align: right;
  }

  .public .review .review_x .right a {
    float: right;
    display: inline-block;
    width: 85px;
    height: 33px;
    line-height: 33px;
    color: #fff;
    text-align: center;
    background: #3dc2c3;
    border-radius: 4px;
  }

  .public .review .review_x .right a:hover {
    color: #fff;
    background: #f38708;
  }

  .public .review .review_x .left {
    width: 412px;
    overflow: hidden;
  }

  .public .review .review_x .left .p_fl {
    float: left;
    padding-right: 10px;
    width: 74px;
    color: #666666;
    text-align: center;
    border-right: 1px solid #e0e0e0;
  }

  .public .review .review_x .left .p_fl span {
    display: block;
    line-height: 1em;
    font-size: 42px;
    font-weight: 700;
    color: #3dc2c3;
  }

  .public .review .review_x .left .x_fl {
    float: left;
    padding-top: 7px;
    padding-left: 15px;
    width: 187px;
    color: #666666;
  }

  .public .review .review_x .left .x_fl .ul_x {
    padding-bottom: 12px;
    display: block;
  }

  .public .review .review_x .left .x_fl .ul_x li {
    float: left;
    margin-right: 2px;
    width: 23px;
    height: 23px;
    overflow: hidden;
    background: url(../img/icong29.png) right top no-repeat;
  }

  .public .review .review_x .left .x_fl .ul_x .on {
    background-position: left top;
  }

  .public .review .review_list {
    margin-top: 25px;
    border-top: 1px solid #e9e9e9;
  }

  .public .review .review_list dd {
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px dashed #adadad;
  }

  .public .review .review_list .img {
    width: 69px;
    height: 69px;
    overflow: hidden;
  }

  .public .review .review_list .img_cn {
    padding-left: 28px;
    width: 970px;
    overflow: hidden;
  }

  .public .review .review_list .img_cn .tab_man {
    display: block;
  }

  .public .review .review_list .img_cn .tab_man li {
    float: left;
    margin-right: 18px;
    color: #666666;
  }

  .public .review .review_list .img_cn .tab_man .li1 span {
    display: inline-block;
    margin-left: 5px;
    width: 53px;
    height: 14px;
    line-height: 13px;
    text-align: center;
    color: #fff;
    background: #f38708;
    border-radius: 2px;
  }

  .public .review .review_list .img_cn .tab_man .li1 .sp1 {
    background: #48a7f8;
  }

  .public .review .review_list .img_cn .tab_man .li1 .sp2 {
    background: #c559c1;
  }

  .public .review .review_list .img_cn .tab_man .li2 {
    margin-right: 5px;
  }

  .public .review .review_list .img_cn .tab_man .li2 i {
    float: left;
    display: block;
    margin-top: 4px;
    width: 12px;
    height: 12px;
    overflow: hidden;
    background: url(../img/icong30.png) right top no-repeat;
  }

  .public .review .review_list .img_cn .tab_man .li2 .on {
    background-position: left top;
  }

  .public .review .review_list .img_cn .text {
    padding-top: 7px;
    font-size: 14px;
    color: #323232;
  }

  .public .review .review_list .p_lsit {
    display: block;
    width: 985px;
  }

  .public .review .review_list .p_lsit li {
    float: left;
    margin-top: 15px;
    margin-right: 17px;
    width: 106px;
    height: 106px;
  }

  .public .review .review_list .img_cn .reply {
    padding-top: 15px;
    font-family: "å®‹ä½“";
    font-size: 14px;
    color: #3dc2c3;
  }

  .public .review .review_list .img_cn .reply span {
    float: left;
    display: block;
  }

  .public .review .review_list .img_cn .reply .hui_span {
    float: left;
    width: 894px;
  }

  .public .review .more {
    margin-top: 20px;
    width: 100%;
  }

  .public .review .more a {
    display: block;
    margin: 0 auto;
    width: 286px;
    height: 42px;
    line-height: 42px;
    overflow: hidden;
    font-size: 14px;
    color: #323232;
    text-align: center;
    border: 1px solid #e9e9e9;
  }

  .public .review .more a:hover {
    color: #fff;
    background: #44c7c8;
    border: 1px solid #44c7c8;
  }

  .about {
    margin-top: 20px;
    padding-top: 16px;
    padding-right: 22px;
    width: 1056px;
    border: 1px solid #e5e6e6;
  }

  .about .public_title {
    background: url(../img/bg14.jpg) repeat-x center;
  }

  .about .public_title .title {
    padding-left: 17px;
    padding-right: 10px;
    height: 19px;
    line-height: 19px;
    font-size: 18px;
    color: #323232;
    background: #fff;
    border-left: 3px solid #44c7c8;
  }

  .about .ubb {
    padding: 20px 0 20px 20px;
    line-height: 1.8;
    font-family: "å®‹ä½“";
    font-size: 14px;
    color: #323232;
  }

  .about .ubb p {
    padding-bottom: 15px;
  }

  .summary {
    padding-top: 17px;
    width: 1080px;
  }

  .summary .title .left {
    padding-left: 9px;
    color: #000;
    font-size: 16px;
    border-left: 3px solid #51c9ca;
  }

  .summary .title .left b {
    margin-right: 17px;
    line-height: 1em;
    font-size: 22px;
    font-weight: 100;
  }

  .summary .title .left span {
    margin-left: 15px;
    vertical-align: middle;
  }

  .summary .title .right a {
    display: inline-block;
    font-family: "å®‹ä½“";
    color: #666666;
  }

  .summary .title .right .a1 {
    padding-left: 15px;
    background: url(../img/bg15.jpg) left center no-repeat;
  }

  .summary .title .right a:hover {
    text-decoration: underline;
  }

  .summary .summary_content {
    margin-top: 15px;
    padding: 22px;
    border: 1px solid #e5e5e5;
    border-bottom: 4px solid #44c7c8;
  }

  .summary .summary_content .top_t table {
    table-layout: fixed;
  }

  .summary .summary_content .top_t table td {
    font-family: "å®‹ä½“";
    font-size: 14px;
    color: #000;
  }

  .summary .summary_content .top_t .td1 {
    color: #666666;
  }

  .summary .summary_content .top_t .td_border {
    border-bottom: 1px solid #e8e8e8;
  }

  .summary .summary_content .top_t .ditu {
    display: inline-block;
    margin-left: 10px;
    padding-left: 15px;
    color: #44c7c8;
    background: url(../img/icong31.png) 0 center no-repeat;
  }

  .summary .summary_content .list_table {
    margin-top: 22px;
  }

  .summary .summary_content .list_table table td {
    height: 44px;
    font-size: 14px;
    text-align: center;
    border: 1px solid #e5e5e5;
  }

  .summary .summary_content .list_table table td a {
    color: #44c7c8;
  }

  .summary .summary_content .list_table table td a:hover {
    text-decoration: underline;
  }

  .summary .summary_content .list_table .tr1 td {
    color: #666666;
    background: #f4f8fb;
  }

  .summary .summary_content .list_table .td1 {
    padding-left: 30px;
    height: 48px;
    text-align: left;
  }

  .summary .summary_content .list_table .table1 td {
    border: none;
  }

  .summary .summary_content .list_table .table1 .td1 {
    border-left: 1px solid #e5e5e5;
    padding: 0 30px;
  }

  .summary .summary_content .link_l {
    padding-top: 20px;
  }

  .summary .summary_content .link_l li {
    float: left;
  }

  .summary .summary_content .link_l li a {
    display: inline-block;
    margin-right: 22px;
    color: #323232;
  }

  .summary .summary_content .link_l .a1 {
    width: 73px;
    height: 27px;
    line-height: 27px;
    overflow: hidden;
    font-size: 14px;
    color: #fff;
    text-align: center;
    background: #f38708;
    border-radius: 3px;
  }

  .summary .summary_content .link_l .a2 {
    width: 73px;
    height: 27px;
    line-height: 27px;
    overflow: hidden;
    font-size: 14px;
    color: #fff;
    text-align: center;
    background: #3dc2c3;
    border-radius: 3px;
  }

  .summary .summary_content .link_l .a3 {
    padding-left: 26px;
    height: 19px;
    line-height: 13px;
    color: #323232;
    background: url(../img/icong31.png) 0 0 no-repeat;
  }

  .summary .summary_content .link_l .a4 {
    padding-left: 22px;
    height: 19px;
    line-height: 13px;
    color: #323232;
    background: url(../img/icong31.png) 0 -182px no-repeat;
  }

  .summary .summary_content .link_l .a5 {
    position: relative;
    padding-left: 30px;
    height: 19px;
    color: #323232;
    background: url(../img/icong31.png) 0 -88px no-repeat;
  }

  .summary .summary_content .link_l .a5 i {
    display: none;
    position: absolute;
    top: 25px;
    right: -50px;
    z-index: 1;
    width: 175px;
    height: 197px;
    background: url(../img/weix.png) 0 0 no-repeat;
  }

  .summary .summary_content .link_l .a5:hover i {
    display: block;
  }

</style>
