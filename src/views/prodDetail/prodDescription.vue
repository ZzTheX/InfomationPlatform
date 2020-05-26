<template>
  <div class='prod_desc'>
    <div class='publish_time'>
      <span>发布日期</span>
      <span>2020-02-01</span>
    </div>
    <p class='text_info'>{{'商品描述'.repeat(30)}}</p>
    <div class='prod_imgs_list'>
      <img
        v-for='i in 9'
        :key='i'
        width="276"
        height="230"
        :style='{marginRight: i%3 === 0 ? "0" : "35px"}'
        :src="require('../../assets/prod_list_img.png')" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.prod_desc {
  // height: 2000px;
  padding: 36px 35px 0 31px;
  font-size: 16px;
  color: #333;
  .publish_time {
    margin-bottom: 19px;
  }
  .text_info {
    margin-bottom: 19px;
  }
  .prod_imgs_list {
    > img {
      margin-bottom: 33px;
    }
  }
}
</style>
