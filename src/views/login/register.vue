<template>
<div class='register'>
  <div class='register_wrap'>
    <div class='form_title'>
      <span>注册</span>
    </div>
    <div class='form_main'>
      <div>
        <input type="text" placeholder="手机号" v-model.number="registerData.mobile">
      </div>
      <div class='verify_code'>
        <input type="text" placeholder="请输入6位短信验证码" v-model.number="registerData.code">
        <span @click='getSMSCode' v-show='isShowGetCode'>获取验证码</span>
        <span v-show="!isShowGetCode">{{count + '秒后重新获取'}}</span>
      </div>
      <div>
        <input type="password" placeholder="输入密码" v-model.number="registerData.password">
      </div>
      <div>
        <input type="password" placeholder='确认密码'>
      </div>
      <div class='choose_area'>
        <el-cascader v-model='registration_city' :options='cityList' @change='handleChange'></el-cascader>
      </div>
      <button @click='handleRegister'>注册</button>
      <span @click='goToLoginPage'>已有账号, 立即登录</span>
    </div>
  </div>
</div>
</template>
<script>
import validate from '../../auth/validate'
import qs from 'qs'
export default {
  data () {
    return {
      from: '',
      isShowGetCode: true,
      SMSCode: '',
      count: 60,
      registration_city: '',
      registerData: {
        address: '20,2500,2522',
        code: '',
        mobile: '',
        password: '',
        registration_id: 'pc'
      },
      cityList: []
    }
  },
  computed: {
    
  },
  created () {
    this.getCitiesList()
    // 保存登录注册之前的页面路由路径
    this.from = this.$route.query.from || '/'
  },
  methods: {
    goToLoginPage () {
      this.$router.push({name: 'login'})
    },
    handleChange (value) {
      console.log(value)
    },
    handleRegister () {
      this.registerData.address = this.registration_city.join(',')
      this.http.post('/api/member/register', qs.stringify(this.registerData), {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(res => {
        if(res.data.code === 200) {
          this.$message({
            message: '注册成功',
            type: 'success'
          })
          console.log('注册成功返回数据:', res)
          localStorage.setItem('token', res.data.result.token)
          localStorage.setItem('username', res.data.result.username)
          this.$router.replace(this.from)
        } else {
          this.$$message({
            message: res.data.message,
            type: 'warning'
          })
        }
        

      })
    },
    getSMSCode () {
      let phone = this.registerData.mobile
      // 验证合法手机号
      console.log(phone)
      if(validate.isPhone(phone)) {
        // 1 开启定时器  获取验证码倒计时
          let timer = setInterval(() => {
            this.isShowGetCode = false
            if(this.count <= 0) {
              clearInterval(timer)
              this.isShowGetCode = true
              this.count = 60
              return 
            }
            this.count --
        },1000)
        // 2手机号验证通过 发送验证码
        this.http.get(`/api/member/sendRegisterCode?mobile=${phone}`).then( res => {
          if(res.data.code === 200) {
            this.$message({
              message: '验证码已发送',
              type: 'success'
            })
            console.log('验证码返回数据:', res)
          }
        })
      } else {
        this.$message({
          message: '请输入正确的手机号',
          type: 'warning'
        })
      }
    },
    getCitiesList () {
      this.http.get('/api/member/option/getAddressOption').then(res => {
        console.log('城市列表:', res)
        this.cityList = res.data.result.map(item => {
          return {
            label: item.name,
            value: item.id,
            children: item.children.map(item => {
              return {
                label: item.name,
                value: item.id
              }
            })
          }
        })
      })
    }
  }
}
</script>

<style lang='less' scoped>
.register {
  height: 862px;
  background-color: #F9F9FB;
  padding-top: 58px;
  .register_wrap {
    display: flex;
    flex-direction: column;
    width: 489px;
    height: 683px;
    padding-left: 42px;
    padding-top: 35px;
    padding-right: 39px;
    margin: auto;
    background-color: #ffffff;
    align-content: flex-start;
    .form_title {
      height: 37px;
      text-align: center;
      span {
        font-size: 20px;
        color: #333333;
        font-weight: 500;
        padding-bottom: 15px;
        border-bottom: 3px solid #FFC90F;
      }
    }
    .form_main {
      .verify_code {
        position: relative;
        > span {
          position: absolute;
          top: 50%;
          right: 0;
          color: #DA8A19;
          cursor: pointer;
        }
      }
      >div {
        height: 80px;
        border-bottom: 1px solid #E6E6E6;
        padding-top: 20px;
        >input {
          width: 100%;
          height: 54px;
          font-size: 18px;
          // color: #77828D;
          color: #333;
          outline: none;
          border: none;
          padding-left: 5px;
          // background-color: #eee;
        }
      }
      >button {
        display: block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #FFC90F;
        outline: none;
        border: none;
        border-radius: 4px;
        font-size: 20px;
        color: #FEFEFE;
        font-weight: 500;
        margin-top: 83px;
        margin-bottom: 24px;
        cursor: pointer;
      }
      >span {
        font-size: 16px;
        color: #06B4FD;
        cursor: pointer;
      }
      .choose_area {
        /deep/.el-cascader {
          width: 100%;
          height: 59px;
          .el-input {
            border: none;
            font-size: 18px;
            /deep/.el-input__inner {
              border: none;
              padding-left: 0px;
            }
          }
        }
      }
    }
  }
}
</style>
