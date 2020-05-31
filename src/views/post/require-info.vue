<template>
    <div class='require_info'>
        <el-form label-width="220px">
      <el-form-item label="一级分类">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="采购价格">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="采购总数量">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="最小起购量">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="采购时间段">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="采购城市">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="期望定金">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="是否接受多家供货商一起供货">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="每家供货商供货数量需大于">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="启动采购的最低供货数量">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="零采的最晚等待时间">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="添加图片或视频 ">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="零采的最晚等待时间">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="添加描述详情">
        <el-input type='textarea'></el-input>
      </el-form-item>
      <div class='btns_group'>
          <p>保存商品</p>
          <p>立即发布</p>
      </div>
    </el-form>
    </div>
</template>

<script>
export default{

}
</script>

<style lang='less'>
.require_info {
  padding-top: 56px;
  padding-left: 217px;
  padding-bottom: 61px;
  background-color: #fff;
  border-bottom: 40px solid #F5F5F5;
  .el-input {
    width: 239px;
  }
  .el-textarea__inner {
      width: 454px;
      height: 249px;
  }
  .btns_group {
    display: flex;
    p {
      width:235px;
      height:55px;
      background:rgba(255,199,51,1);
      border-radius:4px;
      line-height: 55px;
      font-size: 22px;
      color: #333;
      text-align: center;
      cursor: pointer;
    }
    p:first-child {
      margin-left: 120px;
      margin-right: 70px;
    }
  }
}
</style>