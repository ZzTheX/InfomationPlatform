<template>
  <div class='password_modify'>
    <el-form label-width='100px'>
      <el-form-item label='新密码:'>
        <el-input type='password' v-model='password'></el-input>
      </el-form-item>
      <el-form-item label='确认新密码:'>
        <el-input type='password' v-model='passwordInfo.password'></el-input>
      </el-form-item>
      <el-form-item label='手机号:'>
        <el-input v-model="passwordInfo.phone"></el-input>
      </el-form-item>
      <el-form-item label='验证码:'>
        <el-input v-model="passwordInfo.code"></el-input>
        <span class='send_code' @click='getSMSCode' v-if='isShowSendCode'>发送验证码</span>
        <span class='send_code' v-else>{{count}}秒后重新获取</span>
      </el-form-item>
     <el-form-item label=' '>
        <div class="submmit" @click='updatePassword'>提交</div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import qs from 'qs'
export default{
  data () {
    return {
      isShowSendCode: true,
      count: 60,
      password: '',
      passwordInfo: {
        code: '',
        password: '',
        phone: ''
      }
    }
  },
  methods: {
    getSMSCode () {
      this.isShowSendCode = false
      let timer = setInterval(() => {
        this.count--
        if(this.count <= 0) {
          this.isShowSendCode = true
          clearInterval(timer)
        }
      }, 1000)
      this.http.get('/api/member/sendUpdatePasswdCode?phone='+this.passwordInfo.phone).then(res => {
        if(res.data.code === 200) {
          this.$message({
            type: 'success',
            message: '验证码已发送，请注意查收'
          })
        } else {
          this.$message({
            type: 'warning',
            message: res.data.code
          })
        }
      })
    },
    updatePassword () {
      let { code, phone, password } = this.passwordInfo
      if(!code || !phone || !password) {
        this.$message({
          type: 'warning',
          message: '信息填写不完整, 请检查后重新提交'
        })
        return
      }
      if(this.password != this.passwordInfo.password) {
        this.$message({
          message: '两次输入密码不一致，请重新输入',
          type: 'warning'
        })
        return
      }
      this.http.post('/api/member/updatePasswd', qs.stringify(this.passwordInfo), {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then((res) => {
        if(res.data.code === 200) {
          this.$message({
            type: 'success',
            message: '密码修改成功'
          })
          this.passwordInfo = {}
        } else {
          this.$message({
            type: 'warning',
            message: res.data.msg
          })
        }
      })
    }
  }
}
</script>

<style lang='less'>
 .password_modify {
   padding-top: 50px;
   padding-left: 160px;
   .el-form {
     .el-input {
       width: 240px;
     }
   }
   .send_code {
     display: inline-block;
     margin-left: 15px;
     color: #DA8A19;
     cursor: pointer;
   }
   .submmit {
     background-color: #ffc90f;
     width: 240px;
     height: 40px;
     line-height: 40px;
     text-align: center;
   }
 }
</style>