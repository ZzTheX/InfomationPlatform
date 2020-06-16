<template>
   <div class='product_card' @click='goToEditMyPost'>
    <img class='product_card_img' :src="prodData.main_picture">
    <div class='product_info'>
      <p class='product_description'>
        <span>{{prodData.product_name}}</span>
        <!-- <span>{{'prodData.des | ommit'}}</span> -->
      </p>
      <p class='store_info'>
        <span class='store_number'>可售总数量: {{prodData.num}}</span>
        <span class='time'>{{dateFormat(prodData.start_time)}}</span>
      </p>
      <p class='price_info'>
        <span class='prod_price'><i v-if='prodData.is_support_bulk_purchase'>拼</i>{{prodData.product_price | priceFilter}}</span>
        <span class='prod_origin'>{{prodData.product_address}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { dateFormat } from '../../utils/transform.js'
export default {
  data () {
    return {

    }
  },
  props: {
    prodData: {
      required: false
    }
  },
  methods: {
    goToEditMyPost () {
      this.$router.push({
        name: 'supplyForm'
      })
    },
    dateFormat: dateFormat
  },
  filters: {
    priceFilter (price) {
      return '￥'+ (+price).toFixed(2)
    }
  }
}
</script>

<style lang='less' scoped>
.product_card {
  box-sizing: content-box;
  display: flex;
  width: 218px;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 39px;
  border-right: 18px solid #fff;
  .product_card_img {
    width: 218px;
  }
  .product_info {
    width: 100%;
    height: 95px;
    padding-top: 6px;

    .product_description {
      line-height: 21px;
      margin-bottom: 5px;
    }
    .store_info {
      display: flex;
      height: 13px;
      font-size: 12px;
      color: #666666;
      line-height: 12px;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .price_info {
      display: flex;
      justify-content: space-between;
      .prod_price {
        font-size: 18px;
        color: #FF3F3F;
        >i {
            display: inline-block;
            background-color:  #FFC90F;
            color: white;
            border-radius: 2px;
            width: 19px;
            height: 19px;
            font-size: 17px;
            text-align: center;
            font-style: normal;
        }
      }
      .prod_origin {
        padding-left: 13px;
        color: #999;
        font-size: 12px;
        background-image: url('../../assets/myAccount/position.png');
        background-repeat: no-repeat;
        background-size: 9px 13px;
        background-position: 0 46%;
      }
    }
  }
}
</style>
