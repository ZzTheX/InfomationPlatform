<template>
  <div class='passage_card'>
    <p class='passage_title' @click='goToDetailPage'>{{passageData.article_name}}</p>
    <div class='user_info'>
       <img :src='passageData.face' class='user_avatar'>
       <span class='user_name'>{{passageData.nickname}}</span>
       <span class='post_time'>{{passageData.release_time}}</span>
    </div>
    <p class='passage_content'>{{(passageData.article_content || '') | textOmit}}</p>
    <div class='prod_img_list'>
      <img :src="item" alt="" v-for='item in passageData.picture' :key='item'>
    </div>
    <div 
      class='prod_info' 
      v-for='(item, index) in passageData.products' 
      :key='index'
      @click='goToProductDetail(item.product_id, item.product_tag)'>
      <img class='prod_img_mini' :src="item.main_picture">
      <div class='prod_desc'>
        <p class='prod_name'>{{item.product_name}}</p>
        <p class='prod_price'>价格: ￥{{item.price}}</p>
        <p class='prod_time'>时间：{{item.start_time}}-{{item.end_time}}</p>
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

  },
  methods: {
    goToDetailPage () {
      this.$router.push('/passage-detail')
    },
    goToProductDetail (product_id, product_tag) {
      this.$router.push({
        name: 'prodDetail',
        query: {
          product_tag,
          product_id
        }
      })
    }
  }
};

</script>
<style lang='less' scoped>
.passage_card {
  width: 590px;
  padding: 15px 19px 22px;
  background-color: #fff;
  margin-bottom: 24px;
  cursor: pointer;
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
    // height: 72px;
    font-size: 16px;
    color: #666666;
    margin-bottom: 16px;
  }
  .prod_img_list {
    width: 570px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 22px;
    img {
      width: 170px;
      height: 170px;
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
  .prod_info {
    display: flex;
    height: 120px;
    background-color: #F5F5F5;
    margin-bottom: 20px;
    cursor: pointer;
    .prod_img_mini {
      width: 120px;
      height: 120px;
      margin-right: 15px;
      margin-bottom: 20px;
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
