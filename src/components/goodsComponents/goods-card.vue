<template>
  <div class='product_card'>
    <img class='product_card_img' :src="require('../../>../../assets/index/bestsell.png')">
    <div class='product_info'>
      <p class='product_description'>
        <span>{{"商品名称"}}|</span>
        <span>{{"商品描述商品描述".repeat(2)}}</span>
      </p>
      <p class='store_info'>
        <span class='store_number'>可售总数量: {{prodData.inventory}}</span>
        <span class='time'>{{prodData.time}}</span>
      </p>
      <p class='price_info'>
        <span class='prod_price'>{{prodData.price | priceFilter}}</span>
        <span class='prod_origin'>{{prodData.origin}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {
    console.log('goodsCard')
    console.log('goodcard组件中的数据' , this.prodData)
  },
  props: {
    prodData: {
      type: Object,
      required: true
    }
  },
  filters: {
    ommit (text) {
      let a = text || ""
      if(a.length > 17) {
        return  a.slice(0, 17) + '...'
      } else {
        return a
      }
    },
    priceFilter (price) {
      return '￥' + price
    }
  }
}
</script>
<style lang="less" scoped>
.product_card {
  box-sizing: content-box;
  width: 218px;
  height: 314px;
  border-right: 19px solid #fff;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  .product_card_img {
    width: 218px;
  }
  .product_info {
    margin-top: 5px;
    .product_description {
      height: 45px;
      color: #333;
      font-size: 14px;
      line-height: 21px;
      font-weight: 400;
      margin-bottom: 5px;
    }
    .store_info {
      height: 12px;
      margin-bottom: 14px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      color: #666666;
    }
    .price_info {
      display: flex;
      justify-content: space-between;
      .prod_price {
        font-size: 18px;
        color: #FF4040;
      }
      .prod_origin {
        font-size: 12px;
        color: #999999;
      }
    }

  }
}
</style>
