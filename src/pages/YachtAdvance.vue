<template>
  <el-card class="box-card">
    <el-row>
      <el-col>
        <div class="title">
          <span style="color:#000">游艇预定</span>
        </div>
      </el-col>
    </el-row>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-row>
      <el-col>
        <el-form-item label="游艇型号">
          <span style="font-size: 22px;line-height: 1em;">{{this.$store.state.yachtName}}</span>
        </el-form-item>
      </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="出航日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.advanceOrder.tripDate" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="出航时间">
            <el-time-picker placeholder="选择时间" format="HH:mm" value-format="HH:mm" v-model="form.advanceOrder.tripTime"
                            style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="选择航线">
            <el-select v-model="form.advanceOrder.route" placeholder="请选择活动区域">
              <el-option v-for="route in routes" :label="route.routeDesc+'  ¥ '+route.price" :value="route.id" :key="route.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="出航人数">
            <el-input-number size="small" v-model="form.advanceOrder.peopleCount"></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="出航目的">
            <el-select v-model="form.advanceOrder.tripPurpose" placeholder="请选择出航目的">
              <el-option v-for="p in purposes" :label="p.purpose" :value="p.id" :key="p.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <p style="font-size: 12px;">为更好的为您服务，请选择出航目的及填写您的需求</p>
        </el-col>
      </el-row>
      <el-row>
      <el-col>
        <el-form-item label="需求备注">
          <el-input type="textarea" rows="4" v-model="form.advanceOrder.remark"></el-input>
        </el-form-item>
      </el-col>
      </el-row>
      <el-row>
      <el-col>
        <el-divider></el-divider>
      </el-col>
      </el-row>
      <el-row>
      <el-col :span="12">
        <el-form-item label="手机号码">
          <el-input v-model="form.advanceOrder.phone"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="您的姓名">
          <el-input v-model="form.advanceOrder.customerName"></el-input>
        </el-form-item>
      </el-col>
      </el-row>
      <el-row>
      <el-col>
        <el-form-item>
          <el-radio-group v-model="form.advanceOrder.gender">
            <el-radio :label="0">先生</el-radio>
            <el-radio :label="1">女士</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      </el-row>
      <el-row>
      <el-col>
        <el-form-item label="是否开票">
          <el-radio-group v-model="needInvoice">
            <el-radio :label="false">不需要</el-radio>
            <el-radio :label="true">需要</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      </el-row>
      <el-row>
      <el-col>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-divider></el-divider>
        </el-col>
      </el-row>
      <el-row v-if="needInvoice">
        <el-col :span="12">
          <el-form-item label="发票抬头" prop="title">
            <el-input v-model="form.invoice.invoiceTitle"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发票明细" prop="detial">
            <el-input v-model="form.invoice.invoiceDetials" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮寄地址" prop="address">
            <el-input v-model="form.invoice.postAddress"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮政编码" prop="postcode">
            <el-input v-model="form.invoice.postcode"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="收件人" prop="addressee">
            <el-input v-model="form.invoice.addressee"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系电话" prop="phone">
            <el-input v-model="form.invoice.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <p style="font-size: 12px"><span style="color: red">*</span> 注：以上发票及邮递信息务必填写完整，普通邮递不另收费，如需加急，我们将采用快递到付。</p>
        </el-col>
      </el-row>
    </el-form>
  </el-card>

</template>

<script>
export default {
  name: 'YachtAdvance',
  data () {
    // var validatePostcode = (rule, value, callback) => {
    //   let regx = '/^[0-9]{6}$/'
    //   let re = new RegExp(regx)
    //   if (value === '') {
    //     callback(new Error('请输入邮编'))
    //   } else if (re.test(value) !== true) {
    //     callback(new Error('邮编格式错误'))
    //   } else {
    //     if (this.form.invoice.postcode !== '') {
    //       this.$refs.ruleForm.validateField('checkPostcode')
    //     }
    //     callback()
    //   }
    // }
    let yachtName = this.$store.state.yachtName
    return {
      // rules: {
      //   title: [{ require: true, message: '请输入发票抬头', trigger: 'blur'
      //   }]
      // },

      needInvoice: false,
      form: {
        advanceOrder: {
          yachtName: yachtName,
          tripDate: '',
          tripTime: '',
          route: '',
          peopleCount: 5,
          tripPurpose: '',
          remark: '',
          phone: '',
          gender: 0,
          customerName: '',
          yachtId: this.$route.params.id,
          invoice: ''
        },
        invoice: {
          invoiceTitle: '',
          invoiceDetials: '游艇项目咨询费',
          postAddress: '',
          postcode: '',
          addressee: '',
          phone: ''
        }
      },
      routes: [],
      purposes: []
    }
  },
  computed: {
    rules () {
      return {
        title: [
          {require: this.needInvoice, message: '请输入发票抬头', trigger: 'blur'}
        ],
        detial: [
          {require: this.needInvoice, message: '请输入发票明细', trigger: 'blur'}
        ],
        address: [
          {require: this.needInvoice, message: '请输入邮寄地址', trigger: 'blur'}
        ],
        postcode: [
          {require: this.needInvoice, message: '请输入邮政编码', trigger: 'blur'}
        ],
        addressee: [
          {require: this.needInvoice, message: '请输入收件人', trigger: 'blur'}
        ],
        phone: [
          {require: this.needInvoice, message: '请输入手机号', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.needInvoice) {
        let url = 'api/api/advance-order/save'
        this.$axios.post(url, this.form).then(
          res => {
            let result = res.data
            this.$message({
              message: result.msg,
              type: result.status === 1 ? 'success' : 'error'
            })
            this.$router.push('/rent')
          }
        )
      } else {
        let url = 'api/api/advance-order/save-no-invoice'
        this.$axios.post(url, this.form.advanceOrder).then(
          res => {
            let result = res.data
            this.$message({
              message: result.msg,
              type: result.status === 1 ? 'success' : 'error'
            })
            this.$router.push('/rent')
          }
        )
      }
      console.log('submit!')
    },
    getRoutes () {
      let url = 'api/api/route/list-by-yachtId?id=' + this.$route.params.id
      this.$axios.get(url).then(res => {
        var data = res.data
        this.routes = data.result
      })
    },
    getPurpose () {
      let url = 'api/api/purpose/list'
      this.$axios.get(url).then(res => {
        this.purposes = res.data.result
      })
    }
  },
  mounted () {
    this.getRoutes()
    this.getPurpose()
  }
}
</script>

<style scoped>
  .title {
    padding-bottom: 22px;
    border: none;
  }

  .title span {
    display: block;
    padding-left: 13px;
    font-size: 18px;
    color: #0000;
    line-height: 1em;
    border-left: 3px solid #49c3c7;
  }

  .box-card {
    margin: 30px auto 0 auto;
    padding: 35px 40px 30px;
    width: 695px;
    background: #fff;
  }
</style>
