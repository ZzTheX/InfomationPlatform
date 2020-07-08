<template>
  <div 
    class='product_card' 
    :style="{marginRight: (prodCardIndex + 1) % 4 === 0 ? '0' : '24px' }"
    @click='goToDetailPage(prodData.product_id, prodData.product_tag)'>
    <img class='product_card_img' :src="prodData.main_picture" alt="">
    <div class='product_info'>
      <p class='product_description'>
        <span>{{prodData.product_name}}</span>
      </p>
      <p class='store_info'>
        <span class='store_number'>可售总数量: {{prodData.num}}</span>
        <span class='time'>{{dateFormat(prodData.release_time)}}</span>
      </p>
      <p class='price_info'>
        <span class='prod_price'>{{prodData.product_price | priceFilter}}</span>
        <span class='prod_origin'>{{prodData.prod_origin}}</span>
      </p>
    </div>
  </div>
</template>
<script>
import {dateFormat} from '../../utils/transform.js'
export default {
  data () {
    return {

    }
  },
  created () {
    console.log('prod-card:', this.prodData)
      setTimeout(() => {
          console.log(this.prodCardIndex)
      }, 1000)
  },
  props: {
    prodData: {
      // type: Object,
      required: true
    },
    prodCardIndex: {
        type: Number,
        required: true
    }
  },
  filters: {
    ommit (text) {
      var text = text || ''
      if(text.length > 17) {
        return  text.slice(0, 17) + '...'
      } else {
        return text
      }
    },
    priceFilter (price) {
      return '￥' + price
    }
  },
  methods: {
    goToDetailPage (id, tag) {
      // id 为商品id  tag为商品分类 tag=1供应商品 tag=2需求商品
      this.$router.push({
        name: 'prodDetail',
        query: {
          product_id: id,
          product_tag: tag
        }
      })
    },
    dateFormat: dateFormat
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
