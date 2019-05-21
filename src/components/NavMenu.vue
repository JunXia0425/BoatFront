<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="this.$route.path"
    router>
    <template v-for="menu in menuList">
      <el-menu-item :key="menu.id" v-if="!menu.children" :index="menu.url">
        <span slot="title">{{menu.name}}</span>
      </el-menu-item>
      <el-submenu v-if="menu.children" :key="menu.id" :index="menu.url">
        <span slot="title">{{menu.name}}</span>
        <el-menu-item v-for="child in menu.children" :index="child.url" :key="child.id">
          <span slot="title">{{child.name}}</span>
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  data: function () {
    return {
      menuList: []
    }
  },
  methods: {
    openHandle (key, keyPath) {
      console.log(key + '---' + keyPath)
    },
    getData () {
      var url = '/api/api/menu/all'
      this.$axios.post(url, {}).then(response => {
        var data = response.data.result
        this.menuList = this.jsonTree(data, {})
      })
    },
    jsonTree (data, config) {
      // 1.声明了变量，拿到传参过来的值，注意这里拿到的是string类型，不是对应的值
      var id = config.id || 'id'
      var pid = config.pid || 'pid'
      var children = config.children || 'children'
      var idMap = []
      // var newIdMap = []
      var jsonTree = []
      /* 2.v[id]==v[“id”]==v.id
         idMap数组的下标对应着id为下标的相应json数据
         a[1]对应着id为1的json数据，以此类推 */
      data.forEach(function (v) {
        idMap[v[id]] = v
      })
      // 3拿到当前遍历的父元素id
      // 根据父元素id，判断数组里是否存在这样一条数据存在，就判断父元素是否有子元素数组，
      // 若没有就添加一个children数组（传参过来的）把当前元素添加父元素的children数组里,
      // 不存在，就直接添加到jsonTree里
      data.forEach(function (v) {
        var parent = idMap[v[pid]]
        // 定义一个newIdMap
        delete v.parent// 删除{v}的parent和id
        // delete v.id;
        if (parent) {
          !parent[children] && (parent[children] = [])
          parent[children].push(v)
        } else {
          jsonTree.push(v)
        }
      })
      return jsonTree
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>

</style>
