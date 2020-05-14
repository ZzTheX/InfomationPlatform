<template>
   <div class='product_card'>
    <img class='product_card_img' :src="require('../../assets/index/bestsell.png')">
    <div class='product_info'>
      <p class='product_description'>
        <span>品牌名称</span>
        <span>{{'prodData.des | ommit'}}</span>
      </p>
      <p class='store_info'>
        <span class='store_number'>可售总数量: 9999</span>
        <span class='time'>2020-05-10</span>
      </p>
      <p class='price_info'>
        <span class='prod_price'>199</span>
        <span class='prod_origin'>成都</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.product_card {
  display: flex;
  width: 218px;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 39px;
  .product_card_img {
    width: 218px;
  }
  .product_info {
    width: 100%;
    height: 95px;
    padding-top: 6px;

    .product_description {
      height: 55px;
      line-height: 21px;
    }
    .store_info {
      display: flex;
      height: 13px;
      font-size: 12px;
      line-height: 12px;
      background-color: #eee;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .price_info {
      display: flex;
      justify-content: space-between;
      .prod_price {
        &::before {
          content: '拼';
          background-color:  #FFC90F;
          color: white;
          border-radius: 2px;
          width: 19px;
          height: 19px;
        }
      }
    }
  }
}
</style>
