<template>
  <div class="my_post">
    <div class='head'>
      <el-select placeholder="供应信息"></el-select>
    </div>
    <div class='prod_card_list'>
      <goodsCard v-for='i in 8' :key='i'></goodsCard>
    </div>
  </div>
</template>

<script>
import goodsCard from '../../components/goodsComponents/mini-goods-card'
export default {
  components: {
    goodsCard
  }
}
</script>

<style lang='less' scoped>
.my_post {
  .head {
    height: 52px;
    border-bottom: 1px solid #F0F0F0FF;
    /deep/ .el-select {
      float: right;
    }
  }
  .prod_card_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    padding: 17px 18px 17px 18px;
  }
}
</style>
