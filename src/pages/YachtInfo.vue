<template>
  <el-container>
    <el-main>
      <el-card>
        <el-row>
          <el-col>
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
                </table>
              </div><!--top_t end -->
            </div><!--summary_content end -->
          </el-col>
          <el-col>
            <el-divider>游艇简介</el-divider>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div v-html="info.description" style="padding: 20px 50px;min-height: 550px">
            </div>
          </el-col>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'YachtInfo',
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
</style>
