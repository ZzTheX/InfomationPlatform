<template>
  <div class='suplier'>
    <div class='form_title'>供应商认证</div>
    <div class='form_wraper'>
      <el-form
        label-width='340px'>
        <el-form-item label='供应商名称：'>
            <el-input></el-input>
        </el-form-item>
        <el-form-item label='种植养殖园地：'>
            <el-input></el-input>
        </el-form-item>
        <!-- 园地卡片 -->
        <div style='padding-left: 340px'>园地卡片</div>
        <el-form-item label='园地负责人：'>
            <el-input></el-input>
        </el-form-item>
        <el-form-item label='联系电话：'>
            <el-input></el-input>
        </el-form-item>
        <el-form-item label='联系邮箱：'>
            <el-input></el-input>
        </el-form-item>
        <el-form-item label='联系地址：'>
            <el-input></el-input>
        </el-form-item>
        <div style='padding-left: 340px'>补充信息</div>
        <el-form-item label='公司名称：'>
            <el-input></el-input>
        </el-form-item>
        <el-form-item label='公司税号：'>
            <el-select></el-select>
        </el-form-item>
        <el-form-item label='企业规模：'>
            <el-input></el-input>
        </el-form-item>
        <el-form-item
          id='hisiri'
          label='上传营业执照照片：'>
            <el-upload>
              <el-button type='info'>选择文件</el-button>
              <span>未选择任何文件</span>
            </el-upload>
        </el-form-item>
        <el-form-item label=''>
           <span class='hint_info'>支持文件拓展名：pdf、jpg、png...</span>
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
<style lang='less'>
.suplier {
  .form_title {
    height: 60px;
    line-height: 60px;
    background-color: #FEFAEA;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #333;
    margin-bottom: 33px;
  }
  .form_wraper {
    padding-right: 306px;
    .el-form {
      #hisiri {
  margin-bottom: 0;
}
      .hint_info {
        font-size: 12px;
        color: #666;
      }
      .submit_button {
        width:310px;
        height:55px;
        line-height: 55px;
        text-align: center;
        background:rgba(255,199,51,1);
        border-radius:4px;
        cursor: pointer;
      }
    }

  }
}
</style>
