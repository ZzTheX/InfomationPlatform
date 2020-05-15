<template>
  <div class='best_in_season'>
    <productCard v-for='(item, index) in prodList' :key='item' :prodData='item' :prodCardIndex='index'></productCard>
  </div>
</template>
<script>
import productCard from '../../components/goodsComponents/prod-card'
export default {
  data () {
    return {
      prodList: [
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
  mounted () {
    setTimeout(() => {
      this.prodList.push(JSON.parse(JSON.stringify(this.prodList)))
      console.log(this.prodList)
    }, 1000)
  },
  components: {
    productCard
  }
};
</script>
<style lang="less" scoped>
  .best_in_season {
    width: 100%;
    padding-top: 38px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }
</style>
