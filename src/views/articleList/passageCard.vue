<template>
  <div class='passage_card'>
    <p class='passage_title'>{{passageData.passageTitle | textOmit}}</p>
    <div class='user_info'>
       <img :src='passageData.userAvatar' class='user_avatar'>
       <span class='user_name'>{{passageData.userName}}</span>
       <span class='post_time'>{{passageData.postTime}}</span>
    </div>
    <p class='passage_content'>{{passageData.passageContent | textOmit}}</p>
    <div class='prod_img_list'>
      <img :src="passageData.prodImg" alt="">
      <img :src="passageData.prodImg" alt="">
      <img :src="passageData.prodImg" alt="">
    </div>
    <div class='prod_info'>
      <img class='prod_img_mini' :src="passageData.imgMini">
      <div class='prod_desc'>
        <p class='prod_name'>商品名字商品名字商品名字商品名字商品名字...</p>
        <p class='prod_price'>￥799.99</p>
        <p class='prod_time'>时间：2020.02.02-2020.03.13</p>
      </div>
    </div>
  </div>
</template>

<script>
// import goodsBriefInfo from './goodsBriefIntro.vue'
export default {
  name: 'passageCard',
  data () {
    return {

    }
  },
  filters: {
    textOmit (value) {
      if (value.length > 43) {
        return value.slice(0, 43) + '...'
      } else {
        return value
      }
    }
  },
  props:['passageData'],
  components: {
    // goodsBriefInfo
  },
  created (){

  }
};

</script>
<style lang='less' scoped>
.passage_card {
  width: 590px;
  height: 564px;
  padding: 15px 19px 22px;
  background-color: #fff;
  margin-bottom: 24px;
  .passage_title {
    height: 55px;
    line-height: 27px;
    font-size: 18px;
    margin-bottom: 11px;
  }
  .user_info {
    font-size: 16px;
    overflow: hidden;
    height: 46px;
    line-height: 46px;
    margin-bottom: 14px;
    .user_avatar {
      width: 46px;
      height: 46px;
      margin-right: 9px;
      float: left;
    }
    .user_name {
      float: left;
      color: #333333;
    }
    .post_time {
      color: #808080;
      float: right;
    }
  }
  .passage_content {
    height: 72px;
    font-size: 16px;
    color: #666666;
    margin-bottom: 16px;
  }
  .prod_img_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 22px;
    img {
      width: 170px;
      height: 170px;
    }
  }
  .prod_info {
    display: flex;
    height: 120px;
    background-color: #eee;
    .prod_img_mini {
      width: 120px;
      height: 120px;
      margin-right: 15px;
    }
    .prod_desc {
      padding-top: 15px;
      .prod_name {
        font-size: 18px;
        color: #333;
        margin-bottom: 16px;
      }
      .prod_price {
        font-size: 24px;
        color: #C90C22;
        margin-bottom: 8px;
      }
      .prod_time {
        font-size: 16px;
        color: #808080;
      }
    }
  }
}
</style>
