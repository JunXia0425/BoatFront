<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="游艇">
        <el-input v-model="name" disabled></el-input>
      </el-form-item>
      <el-form-item label="库存数量">
        <el-input-number v-model="form.stock" :min="1" :max="1000" label="库存数量"></el-input-number>
      </el-form-item>
      <el-form-item label="停靠码头">
        <el-select v-model="form.leasingYacht.wharf" placeholder="请选择停靠码头">
          <el-option v-for="item in wharf" :label="item.wharf" :value="item.id" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-row v-for="(route,index) in form.routes" :key="index">
        <el-col :span="12">
          <el-form-item :label="'航线'+(index+1)">
            <el-input v-model="route.routeDesc"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="价格">
            <el-input v-model="route.price"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button @click="removeRoute(route)" v-if="form.routes.length!==1">删除</el-button>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button @click="addRoute()">添加航线</el-button>
      </el-form-item>
      <el-form-item label="限载人数">
        <el-input-number v-model="form.leasingYacht.maxpeople" :min="1" :max="10" label="限载人数"></el-input-number>
      </el-form-item>
      <el-form-item label="游艇卧室">
        <el-input-number v-model="form.leasingYacht.bedroom" :min="1" :max="10" label="游艇卧室"></el-input-number>
      </el-form-item>
      <el-form-item label="标配船员">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="form.leasingYacht.standardSeaman"
          maxlength="50"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="标配项目">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="form.leasingYacht.standardSubject"
          maxlength="50"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="选配项目">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="form.leasingYacht.apolegamySubject"
          maxlength="50"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="保险说明">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="form.leasingYacht.insuranceDeclare"
          maxlength="30"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">出租</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        leasingYacht: {
          id: '',
          maxpeople: 0,
          wharf: '',
          bedroom: 0,
          standardSeaman: '',
          standardSubject: '',
          apolegamySubject: '',
          insuranceDeclare: ''
        },
        stock: {
          id: this.form.leasingYacht.id,
          count: 0
        },
        routes: [
          {
            routeDesc: '',
            price: 0
          }
        ]
      },
      wharf: [],
      name: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    getWharfs () {
      this.$axios.get('api/api/wharf/list').then(res => {
        var data = res.data.result
        this.wharf = data
      })
    },
    addRoute () {
      this.form.routes.push({
        routeDesc: '',
        price: 0
      })
    },
    removeRoute (route) {
      var index = this.form.routes.indexOf(route)
      if (index !== -1) {
        this.form.routes.splice(index, 1)
      }
    }
  },
  mounted () {
    this.getWharfs()
  }
}
</script>

<style scoped>

</style>
