<template>
  <div class='goods_brief'>
    <img class='goods_img' src="" alt="">
    <div class='text_intro'>
      <p class='goods_name'></p>
      <p class='goods_price'></p>
      <p class='goods_time'></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang='less' scoped>
.goods_brief {
  display: flex;
  width: 100%;
  height: 120px;
  background-color: #F0F0F0;
  .goods_img {
    width: 120px;
    height: 120px;
  }
  .text_intro {
    padding-left: 13px;
    background-color: rgba(245, 245, 245);
    .goods_name {
      font-size: 18px;
      color: #FF333333;
      line-height: 48px;
    }
    .goods_price {
      font-size: 24px;
      color: #FFC90C22;
      line-height: 37px;
    }
    .goods_time {
      font-size: 16px;
      color: #FF808080;
      line-height: 27px;
    }
  }
}
</style>
