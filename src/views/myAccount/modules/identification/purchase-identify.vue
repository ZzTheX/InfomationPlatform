<template>
  <div class='purchase'>
      <p class='head'>采购认证</p>
      <div class='form_content'>
        <el-form
          label-width='150px'>
          <el-form-item label='采购商名称:'>
            <el-input></el-input>
          </el-form-item>
          <el-form-item label='公司名称:'>
            <el-input></el-input>
          </el-form-item>
          <el-form-item label='公司税号:'>
            <el-input></el-input>
          </el-form-item>
          <el-form-item label='企业规模:'>
            <el-select></el-select>
          </el-form-item>
          <el-form-item label='业务负责人:'>
            <el-input></el-input>
          </el-form-item>
          <el-form-item label='联系电话:'>
            <el-input></el-input>
          </el-form-item>
          <el-form-item label='联系邮箱:'>
            <el-input></el-input>
          </el-form-item>
          <el-form-item label='上传营业执照照片:'>
           <el-upload>
             <el-button size="medium">选择文件</el-button>
           </el-upload>
          </el-form-item>
          <el-form-item label=''>
            <span type='info' >支持文件拓展名：pdf、jpg、png...</span>
          </el-form-item>
          <el-form-item label=''>
            <div class='submit_button'>提交认证</div>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.purchase {
    .head {
        height: 60px;
        background-color: #FEFAEA;
        font-size: 20px;
        font-weight: 540;
        line-height: 60px;
        text-align: center;
        margin-bottom: 40px;
    }
    .form_content {
      // display: flex;
      // flex-direction: flex-end;
      padding-right: 306px;
      padding-left: 199px;
      /deep/.el-form-item__label {
        color: #333;
        font-size: 16px;
      }
      .el-select {
        width: 311px;
      }
      .submit_button {
        width:310px;
        height:55px;
        line-height: 55px;
        background:rgba(255,199,51,1);
        border-radius:4px;
        color: #333;
        font-size: 24px;
        text-align: center;
        cursor: pointer;
      }
    }
}
</style>
