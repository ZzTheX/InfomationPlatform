<template>
  <div class='goods_list_page'>
    <div class='goods_list_nav'>
      <p>区域</p>
      <p>默认</p>
      <p>成熟时间</p>
      <p>价格排序</p>
      <p>筛选</p>
    </div>
    <div class='goods_list_mian'>
      <goods-card></goods-card>
    </div>
  </div>
</template>

<script>
import goodsCard from '../../components/goodsComponents/prod-card'
export default {
  data () {
    return {

    }
  },
  components: {
    goodsCard
  }
}
</script>

<style lang='less' scoped>
.goods_list_page {
  width: 1200px;
  height: 1855px;
  margin: auto;
  .goods_list_nav {
    display: flex;
    justify-content: space-around;
    padding-left: 121px;
    padding-right: 56px;
    height:50px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(214,214,214,1);
    line-height: 50px;
    color: #333;
    font-size: 18px;
    margin-bottom: 21px;
  }
  .goods_list_mian {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }
}
</style>
