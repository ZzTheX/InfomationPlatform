<template>
  <div class='product_card' :style="{marginRight: (prodCardIndex + 1) % 4 === 0 ? '0' : '24px' }">
    <img class='product_card_img' :src="prodData.src" alt="">
    <div class='product_info'>
      <p class='product_description'>
        <span>{{prodData.brand}}|</span>
        <span>{{prodData.des | ommit}}</span>
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
      setTimeout(() => {
          console.log(this.prodCardIndex)
      }, 1000)
  },
  props: {
    prodData: {
      type: Object,
      required: true
    },
    prodCardIndex: {
        type: Number,
        required: true
    }
  },
  filters: {
    ommit (text) {
      if(text.length > 17) {
        return  text.slice(0, 17) + '...'
      } else {
        return text
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
  width: 282px;
  height: 365px;
  margin-bottom: 38px;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  .product_card_img {
    width: 282px;
    height: 258px;
  }
  .product_info {
    margin-top: 5px;
    .product_description {
      height: 62px;
      color: #333;
      font-size: 16px;
      line-height: 26px;
      font-weight: 400;
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
        font-size: 20px;
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
