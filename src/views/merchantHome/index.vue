<template>
 <div class="wrapper">
    <div class='merchant'>
      <div class='merchant_card'>
          <img src="../../assets/company.png" alt="">
          <span class='company_name'>河鲜贞诗养殖公司</span>
          <span>昵称名字</span>
          <span>采购商认证</span>
      </div>
      <div class="home_nav">
        <span class='active'>我发布的</span>
        <span>评论</span>
        <span>帖子</span>
        <span>动态</span>
      </div>
      <div class='main_content'>
        <div class='company_intro'>
          <div class='viewers'>
            <span>赞</span>
            <span>关注</span>
            <span>粉丝</span>
          </div>
          <div class='company_text_intro'>
            <p>公司简介</p>
            <p>这是一段自我介绍，抓取填写信息自动补充，最后填写的简介。这是一段自我介绍，抓取填写信息自动补充，最后填写的简介。这是一段自我介绍，抓取填写信息自动补充，最后填写的简介。</p>
          </div>
        </div>
        <div class='content_right'>
          <router-view></router-view>
        </div>
      </div>
  </div>
 </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.wrapper {
  background-color: #F5F5F5FF;
  padding-top: 22px;
}
.merchant {
    width: 1200px;
    margin: auto;
    background-color: #F5F5F5FF;
    .merchant_card {
        height: 322px;
        border-bottom: 1px solid #F0F0F0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 90px;
        padding-bottom: 72px;
        align-content: flex-start;
        justify-content: space-between;
        background-color: #fff;
        > img {
            width: 80px;
            height: 80px;
            margin-bottom: 22px;
        }
        span:nth-child(2) {
            color: #333;
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 21px;
        }
        span:nth-child(3) {
            color: #333;
            font-size: 18px;
        }
        span:nth-child(4) {
          width: 81px;
          height: 22px;
          line-height: 22px;
          font-size: 12px;
          color: #fff;
          text-align: center;
          background-color: #10B4FEFF;
          margin-top: 10px;
        }
    }
    .home_nav {
      height: 51px;
      line-height: 51px;
      padding-left: 277px;
      padding-right: 349px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 14px;
      background-color: #fff;
      > span {
        border-bottom: 3px solid #fff;
      }
      >span.active {
        border-bottom: 3px solid #FFC733FF;
      }
    }
    .main_content {
      display: flex;
      .company_intro {
        width: 222px;
        margin-right: 14px;
        .viewers {
          display: flex;
          justify-content: space-around;
          height: 53px;
          line-height: 54px;
          font-size: 14px;
          background-color: #fff;
          color: #333333FF;
          margin-bottom: 17px;
          > span {
            background-repeat: no-repeat;
            background-position: 0 50%;
            padding-left: 21px;
          }
          span:first-child {
            background-image: url('../../assets/thumb_up.png');
            background-size: 15px 14px;
          }
          span:nth-child(2) {
            background-image: url('../../assets/star.png');
            background-size: 15px 15px;
          }
          span:nth-child(3) {
            background-image: url('../../assets/heart.png');
            background-size: 16px 13px;
          }
        }
        .company_text_intro {
          padding: 23px 12px 32px 12px;
          text-align: center;
          background-color: #fff;
          p:first-child {
            font-size: 18px;
            color: #333333FF;
            font-weight: bold;
            margin-bottom: 18px;
          }
          p:last-child {
            font-size: 16px;
            color: #484848FF;
          }
        }
      }
      .content_right {
        flex: 1;
        background-color: #fff;
      }
    }
}
</style>
