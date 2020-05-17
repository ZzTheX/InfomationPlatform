<template>
  <div class='merchant'>
      <div class='merchant_card'>
          <img src="url(../../../assets/company.png)" alt="">
          <span>河鲜贞诗养殖公司</span>
          <span>昵称名字</span>
          <span>采购商认证</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.merchant {
    width: 1200px;
    margin: auto;
    .merchant_card {
        height: 347px;
        display: flex;
        flex-direction: column;
        padding-top: 90px;
        > img {
            width: 80px;
            height: 80px;
            margin-bottom: 22px;
        }
        span:nth-child(2) {
            color: #333;
            font-size: 22px;
            font-weight: 500;
            margin-bottom: 21px;
        }
        span:nth-child(2) {
            color: #333;
            font-size: 18px;
        }
    }
}
</style>