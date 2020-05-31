<template>
  <div class='supply_info'>
    <el-form label-width="180px">
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
      <el-form-item label="预售价格">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="可售数量">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="可售时间段">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="商品种植/养殖规模">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="销售区域">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="最小起批量">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="期望定金">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="是否支持(拼团)零售">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="单人(地址)最小购买数量">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="最低成团数量">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="最晚成团数量">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="添加产品图片">
        <p>(不大于9张,第一张为默认产品图)</p>
      </el-form-item>
      <el-form-item label="'">
        <img src='../../assets/upload.png' width="80px" height="80px">
      </el-form-item>
      <el-form-item label="添加详情描述">
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
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang='less' scoped>
.supply_info {
  padding-top: 56px;
  padding-left: 217px;
  padding-bottom: 61px;
  background-color: #fff;
  border-bottom: 40px solid #F5F5F5;
  .el-input {
    width: 239px;
  }
  .el-textarea {
    width: 454px;
   
    /deep/.el-textarea__inner {
       height: 240px;

    }
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
