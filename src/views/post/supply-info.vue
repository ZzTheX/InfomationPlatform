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
}
</style>
