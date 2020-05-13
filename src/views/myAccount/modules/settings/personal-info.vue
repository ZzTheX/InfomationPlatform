<template>
  <div class='my_info'>
     <el-form :inline='false'>
         <el-form-item label='头像'>
             <img 
             width="92"
             height="92"
             :src="avatarSrc" >
             <modify-button></modify-button>
         </el-form-item>
         <el-form-item label='登录ID'>
             <p>123456789</p>
         </el-form-item>
         <el-form-item label='昵称'>
             <p>昵称</p>
         </el-form-item>
         <el-form-item label='性别'>
             <p>性别</p>
         </el-form-item>
         <el-form-item label='生日'>
             <p>19980326</p>
         </el-form-item>
         <el-form-item label='常住'>
             <p>成都</p>
         </el-form-item>
         <el-form-item label='简介'>
             <el-input type='textarea'></el-input>
         </el-form-item>
         <el-form-item label='喜欢的'>
             <el-tag type="info" v-for='item in 3' :key=item>标签{{item}}</el-tag>
         </el-form-item>
         <el-form-item label='登录密码'>
             <el-textarea></el-textarea>
         </el-form-item>
         <el-form-item label='收货地址'>
             <el-textarea></el-textarea>
         </el-form-item>
     </el-form>
  </div>
</template>

<script>
import modifyButton from './modify-button.vue'
export default {
    data () {
        return {
            avatarSrc: require('../../../../assets/user_avatar1.png')
        }
    },
    components: {
        modifyButton
    }
}
</script>

<style lang='less' scoped>
.my_info {
    padding-top: 51px;
    padding-left: 41px;
    .el-form-item {
        display: flex;
    }
}
</style>