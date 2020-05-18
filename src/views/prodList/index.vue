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
      <goods-card v-for='(item, index) in prodListData' :key='index' :prodData='item' :prodCardIndex="index"></goods-card>
    </div>
    <div class='pagination'>
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"></el-pagination>
    </div>
  </div>
</template>

<script>
import goodsCard from '../../components/goodsComponents/goods-card.vue'
export default {
  data () {
    return {
      prodListData: [
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/0/507', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/0/507', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'}
      ]
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
  // height: 1855px;
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
    p {
      cursor: pointer;
    }
  }
  .goods_list_mian {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .pagination {
    margin-top: 20px;
    height: 50px;
  }
}
</style>
