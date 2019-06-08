<template>
  <el-card class="box-card">
    <el-row>
      <el-col>
        <div class="title">
          <span style="color:#000">游艇购买</span>
        </div>
      </el-col>
    </el-row>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-row>
        <el-col>
          <el-form-item label="游艇型号">
            <el-input v-model="form.yachtName" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="手机号码" prop="phone">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="您的姓名" prop="customerName">
            <el-input v-model="form.customerName"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <p style="font-size: 12px"><span style="color: red">*</span> 注：以上信息务必填写完整，预定成功后我们的客服将会主动与您联系，商榷交货事宜。</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-divider></el-divider>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <span style="color: red;font-size: 20px;font-weight: bold">¥{{form.price}}</span>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">预定</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'Buying',
  data () {
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else {
        const patt = new RegExp('^1[3|4|5|8][0-9]\\d{4,8}$')
        var b = patt.test(value)
        if (b) {
          callback()
        } else {
          callback(new Error('请输入正确手机号'))
        }
      }
    }
    return {
      form: {
        yachtName: this.$route.params.info.name,
        yachtId: this.$route.params.info.id,
        phone: '',
        customerName: '',
        // price: this.$route.params.info.price * 10000
        price: this.$route.params.info.price
      },
      rules: {
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        customerName: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const url = '/api/alipay/page/gotoPayPage?yachtId=' + this.form.yachtId +
            '&yachtName=' + this.form.yachtName +
            '&phone=' + this.form.phone +
            '&customerName=' + this.form.customerName +
            '&price=' + this.form.price
          location.replace(url)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
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
