<template>
<div class='register'>
  <div class='register_wrap'>
    <div class='form_title'>
      <span>注册</span>
    </div>
    <div class='form_main'>
      <div>
        <input type="text" placeholder="手机号">
      </div>
      <div class='verify_code'>
        <input type="text" placeholder="请输入6位短信验证码">
        <span>获取短信验证码</span>
      </div>
      <div>
        <input type="password" placeholder="输入密码">
      </div>
      <div>
        <input type="password" placeholder='确认密码'>
      </div>
      <div>
        <input type="text" placeholder="选择地区">
      </div>
      <button>注册</button>
      <span @click='goToLoginPage'>已有账号, 立即登录</span>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goToLoginPage () {
      this.$router.push({name: 'login'})
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
          color: #77828D;
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
    }
  }
}
</style>
