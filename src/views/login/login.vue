<template>
  <div class='login'>
    <div class='login_tab'>
      <span @click='toggleLoginType(1)' :class='{ active: loginType === 1}'>密码登录</span>
      <span @click='toggleLoginType(0)' :class='{ active: loginType === 0}'>验证码登录</span>
    </div>
    <div class='login_input_area'>
      <div class='phone_input_wrap'>
        <input type="text" placeholder="手机号" v-model.number='userInfo.phone'>
      </div>
      <!-- v-if切换验证码登录与密码登录 -->
      <div v-if='loginType' class='password_input_wrap'>
        <input class='password' type="password" placeholder="登录密码" v-model.number='userInfo.password'>
      </div>
      <div class='code_input_wrap' v-else>
        <input class='code' type="text" placeholder="请输入6位短信验证码" v-model.number='userInfo.password'>
        <button class="get_code" @click='getCode'>获取验证码</button>
      </div>
    </div>
    <div class='to_regist'>
      <span @click='goToRegister'>注册</span>
      <span>忘记密码?</span>
    </div>
    <button class='login_buttton' @click='handleLogin'>登录</button>
    <p class='user_agreement'>用户协议</p>
    <div class='other_login_ways'>
     <p>其他登录方式</p>
      <span class='alipay_icon'></span>
      <span class='wechatpay_icon'></span>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  data () {
    return {
      userInfo: {
        login_method: 1,
        phone: '',
        password: ''
      },
      loginType: 1
    }
  },
  created () {
    console.log(this.$route.query.from)
  },
  methods: {
    toggleLoginType (loginType) {
      this.loginType = loginType
    },
    goToRegister () {
      let query = this.$route.query
      this.$router.push({
        name: 'register',
        query
      })
    },
    handleLogin () {
      let path = this.$route.query.from
      if(this.userInfo.phone && this.userInfo.password) {
          this.http({
            url: '/api/member/login',
            method: 'POST',
            data: qs.stringify(this.userInfo),
            headers: {
              'Content-Type':'application/x-www-form-urlencoded'
            }
          }).then(res => {
            let token = res.data.result.token
            let { username } = res.data.result
            localStorage.setItem('token', token)
            localStorage.setItem('username', username)
            this.$message({
              message: '登录成功',
              type: 'success'
            })
            this.$router.replace({
              path
            })
          })
          
      }
    },
    getCode () {
      console.log('获取登录验证码')
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  width: 489px;
  height: 612px;
  margin: auto;
  border: 1px solid #eee;
  background-color: #fff;
  padding: 34px 39px 0 41px;
  .login_tab {
    height: 38px;
    // padding: 0 113px 0 113px;
    margin-bottom: 69px;
    display: flex;
    justify-content: space-around;
    span {
      color: #333;
      font-size: 20px;
      cursor: pointer;
    }
    .active {
      border-bottom: 3px solid #FFC90F;
    }
  }
  .login_input_area {
    height: 127px;
    .phone_input_wrap {
      border-bottom: 1px solid #E6E6E6;
      margin-bottom: 42px;
      input {
        display: block;
        // padding-left: 15px;
        width: 100%;
        height: 47px;
        line-height: 47px;
        border: none;
        outline: none;
        font-size: 18px;
      }
    }
    .password_input_wrap {
      padding-bottom: 20px;
      border-bottom: 1px solid #E6E6E6;
      input {
        font-size: 18px;
        width: 100%;
        color: #77828D;
        // padding-left: 15px;

      }
    }
    .code_input_wrap {
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
      border-bottom: 1px solid  #E6E6E6;
      input {
        // padding-left: 15px;
        border: none;
        outline: none;
        background-color: #fff;
        font-size: 18px;
      }
      .get_code {
        border: none;
        outline: none;
        font-size: 18px;
        color: #DA8A19;
        background-color: #fff;
        cursor: pointer;
      }
    }
  }
  .to_regist {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    color:rgba(6, 180, 253, 1);
    margin-bottom: 60px;
    span {
      cursor: pointer;
    }
  }
  .login_buttton {
    width: 100%;
    height: 50px;
    background-color: rgba(255, 201, 15, 1);
    margin-bottom: 23px;
    outline: none;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
  .user_agreement {
    height: 64px;
    color: #666666;
    font-size: 16px;
    cursor: pointer;
    border-bottom: 1px solid rgb(230, 230, 230);
  }
  .other_login_ways {
    padding-top: 34px;
    font-size: 18px;
    color: #666;
    display: flex;
    align-items: center;
    span {
      width: 41px;
      height: 41px;
      background-size: cover;
      cursor: pointer;
    }
    span.alipay_icon {
      margin-right: 43px;
      margin-left: 48px;
      background-image: url('../../assets/login/alipay.png');
    }
    span:last-child {
      background-image: url('../../assets/login/wechat.png');
    }
  }

}
</style>
