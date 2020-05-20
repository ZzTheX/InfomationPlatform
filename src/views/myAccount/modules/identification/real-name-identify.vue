<template>
  <div class='real_name_form'>
    <div class='form_title'>实人认证</div>
    <div class="form_content">
      <el-form
        label-width='180px'>
        <el-form-item label='姓名: '>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label='性别: '>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label='身份证号码: '>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label='生日:'>
          <el-date-picker
            v-model="birthday"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label='邮箱:'>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label='联系地址:'>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label='上传身份证反面(必填):'>
          <img
            width="310px"
            height="168px"
            src="../../../../assets/up_load.png" >
        </el-form-item>
        <el-form-item label='上传身份证正面(必填):'>
          <img
            width="310px"
            height="168px"
            src="../../../../assets/up_load.png" >
        </el-form-item>
      </el-form>
      <div class='submit_button'>提交认证</div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      birthday: ''
    }
  }
}
</script>

<style lang='less' scoped>
.real_name_form {
  .form_title {
    height: 60px;
    line-height: 60px;
    color: #333;
    font-size: 20px;
    text-align: center;
    background-color: #FEFAEA;
    margin-bottom: 40px;
  }
  .form_content {
    padding-right: 306px;
    padding-left: 170px;
    .el-form {
      width: 490px;
      /deep/.el-form-item__label {
        color: #333;
        font-size: 16px;
      }
    /deep/ .el-date-editor {
      width: 310px;
    }
      img {
        cursor: pointer;
      }
    }
  }
  .submit_button {
    width: 310px;
    height: 55px;
    line-height: 55px;
    background-color: #ffc733;
    border-radius: 4px;
    font-size: 24px;
    text-align: center;
    color: #333;
    float: right;
    cursor: pointer;
  }
}
</style>
