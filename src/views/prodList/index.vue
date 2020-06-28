<template>
  <div class='goods_list_page'>
    <div class='goods_list_nav'>
      <p @click="handleConditionSearch('area')">区域</p>
      <p @click="handleConditionSearch('default')">默认</p>
      <p @click="handleConditionSearch('saleTime')">可售时间</p>
      <p @click="handleConditionSearch('salePrice')">价格排序</p>
      <p >筛选</p>
    </div>
    <div class='goods_list_mian'>
      <goods-card 
        v-for='(item, index) in prodList' 
        :key='index' 
        :prodData='item' 
        :prodCardIndex="index"
        @click.native='goToProductDetail(item.product_tag, item.product_id)'></goods-card>
    </div>
    <div class='pagination'>
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[16]"
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
      currentPage4: 0,
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
      ],
      prodList: []
    }
  },
  created () {
    console.log(this.$route.query)
    this.getProductList()
  },
  methods: {
    handleConditionSearch (condition) {
      if(condition === 'saleTime') {
        this.http({
         url: '/api/product/getProductList',
         method: 'get',
         params: {
           time: 1
         }
        }).then(res => {
          console.log('可售时间排序', res)
        })
      }
    },
    sortBySaleTime () {

    },
    getProductList () {
      let paramas = {
        keyword: this.$route.query.keyword
      }
      this.http({
        method: 'get',
        url: '/api/product/getProductList',
        paramas
      }).then(res => {
        console.log('商品列表数据res:',res)
        this.prodList = res.data.result.rows
        this.$store.commit('goodsListChange', this.prodList)
      })
    },
    goToProductDetail (product_tag, product_id) {
      this.$router.push({
        name: 'prodDetail',
        query: {
          product_tag,
          product_id
        }
      })
    },
    handleSizeChange () {

    },
    handleCurrentChange () {

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
    p:last-child {
      padding-right: 25px;
      background-image: url('../../assets/filtrate.png');
      background-size: 16px 18px;
      background-position: 100% 50%;
      background-repeat: no-repeat;
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
