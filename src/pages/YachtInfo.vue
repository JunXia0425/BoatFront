<template>
  <div>
    <h1>{{info.name}}</h1>
      <table>
        <tr>
          <td>游艇名称：</td>
          <td>{{info.name}}</td>
          <td>艇长：</td>
          <td>{{info.length}}米</td>
          <td>最高航速：</td>
          <td>{{info.maxSpeed}}节</td>
        </tr>
        <tr>
          <td>产地：</td>
          <td>{{info.region}}</td>
          <td>年份：</td>
          <td>{{info.year}}</td>
          <td>售价：</td>
          <td>{{info.price}}万</td>
          <td>游艇类型：</td>
          <td>{{info.classificationName}}</td>
        </tr>
      </table>
    <div v-html="info.description"></div>
  </div>
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
