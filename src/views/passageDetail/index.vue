<template>
  <div class='passage_detail'>
    <!-- 文章详情组件 -->
    <div class='passage_card'>
      <p class='passage_title'>{{'文章标题'.repeat(22)}}</p>
      <div class='user_info'>
        <div class='user_info_left'>
          <img src="../../assets/user_avatar.png" width="46" height="46">
          <span>用户名</span>
        </div>
        <span class='user_info_right'>15分钟前</span>
      </div>
      <p class='passage_content'>文章内容文章内容文章内容文章内容章内容文章内容文章内容文章内容文章内容文章内容文章内容章内容文章内容文章内容文章内容文章内容章内容文章内容文章内容文章内容文章内容文章内容文章内容章内容文章内容文章内容文章内容文章内容章内容文章内容文章内容文章内容文章内容文章内容文章内容章内容文章内容文章内容文章内容文章内容章内容文章内容文章内容文章内容文章内容文章内容文章内容章内容...</p>
      <div class='img_list'>
        <img
          width="380"
          height="290"
          :style="{marginRight: i ===3 || i === 6  ? '8px' : '0'}"
          src="../../assets/passage_detail.png"
          v-for='i in 6'
          :key='i'>
      </div>
      <!-- 底部商品信息 -->
      <div class='prod_card'>
        <img
          width="120"
          height="120"
          src="../../assets/goods_brief.png">
        <div class='prod_card_right'>
          <p>商品名字商品名字商品名字商品名字商品名字...</p>
          <p class='prod_price'>
            <span>价格: </span>
            <span>￥200.00</span>
          </p>
          <p>
            <span>时间: </span>
            <span>2020-05-19 - 2020-06-19</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 留言板 -->
    <div class="message_board">

      <div class='message_board_head'><span>留言</span></div>
      <!-- 留言板主体部分 -->
      <div class='message_board_content'>
        <!--  -->
        <div class='message_item' v-for='i in 2' :key='i'>
          <!-- 用户评论 -->
          <div class='user_comment'>
            <img src="../../assets/user_avatar2.png" height="60" width="60">
            <div class="comment_content">
              <span>爱吃青菜的小萝卜</span>
              <p>简直太棒了，买到这么好的东西太划算了！简直太棒了，买到这么好的东西太划算了！简直太棒了，买到这么好的东西太划算了！简直太棒了，买到这么好的东西太划算了！简直太棒了，买到这么好的东西太划算了！简直太棒了，买到这么好的东西太划算了！</p>
              <span>2020-03-01</span>
            </div>
          </div>
          <!-- 用户回复 -->
          <div class='comment_reply'>
              <div class='reply_item' v-for='i in 2' :key='i'>
                <img src="../../assets/user_avatar2.png" height="60" width="60">
                <div class='reply_content'>
                  <span>看山的那边iiii</span>
                  <p>回复<i style='color: #418BF0;font-style:normal'>@爱吃青菜的小萝卜 </i>简直太棒了，买到这么好的东西太划算了！简直太棒了，买到这么好的东西太划算了！简直太棒了，简直太棒了，买到这么好的东西太划算了！简直太棒了，买到这么好的东西太划算了！简直太棒了，买到这么好的东西太划算了！</p>
                  <span>2020-03-01</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.passage_detail {
  min-height: 1000px;
  background-color: #F5F5F5;
  padding-top: 12px;
  .passage_card {
    width: 1200px;
    padding: 20px 23px 32px;
    margin: auto;
    background-color: #fff;
    padding-top: 20px;
    margin-bottom: 20px;
    .passage_title {
      height: 52px;
      font-size: 18px;
      color: #333;
      margin-bottom: 16px;
    }
    .user_info {
      display: flex;
      justify-content: space-between;
      height: 46px;
      line-height: 46px;
      font-size: 16px;
      color: #808080;
      margin-bottom: 18px;
      .user_info_left {
        display: flex;

        > img {
          margin-right: 12px;
        }
      }
    }
    .passage_content {
      font-size: 16px;
      color: #333;
      line-height: 24px;
      margin-bottom: 24px;
    }
    .img_list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 25px;
      > img {
        margin-bottom: 13px;
      }
    }
    .prod_card {
      display: flex;
      height: 120px;
      background-color: #f5f5f5;
      > img {
        margin-right: 15px;
      }
      .prod_card_right {
        flex: 1;
        padding-top: 15px;
        padding-bottom: 14px;
        p:first-child {
          font-size: 18px;
          color: #333333;
        }
        p:last-child {
          font-size: 16px;
          color: #808080;
        }
        .prod_price {
          font-size: 24px;
          color: #C90C22;
          margin-top: 18px;
          margin-bottom: 8px;
        }
      }
    }
  }
  .message_board {
    width: 1200px;
    // height: 500px;
    margin: auto;
    background-color: #fff;
    border-bottom: 63px solid #F5F5F5;
    .message_board_head {
      height: 43px;
      font-size: 18px;
      color: #666666;
      padding-left: 22px;
      padding-top: 13px;
      border-bottom: 1px solid #F0F0F0;
      > span {
        border-bottom: 2px solid #FFC90F;
        padding-bottom: 5px;
      }
    }
    .message_board_content {
      padding: 12px 30px 0 26px;
      .message_item {
        padding-top: 26px;
        border-bottom: 1px solid #E6E6E6;
        .user_comment {
          display: flex;
          padding-bottom: 18px;
          border-bottom: 1px solid #E6E6E6;
          > img {
            margin-right: 13px;
          }
          .comment_content {
            span:first-child {
              font-size: 18px;
              color: #000;
            }
            >p {
              padding-top: 13px;
              font-size: 16px;
              color: #333;
              margin-bottom: 26px;
            }
            span:last-child {
              font-size: 14px;
              color: #808080;
            }
          }
        }
        .comment_reply {
          padding-left: 76px;
          .reply_item {
            display: flex;
            height: 152px;
            padding-top: 26px;
            padding-bottom: 16px;
            img {
              margin-right: 13px;
            }
            .reply_content {
              >p {
                padding-top: 13px;
                margin-bottom: 16px;
                font-size: 16px;
                color: #333333;
              }
              span:last-child {
                font-size: 14px;
                color: #808080;
              }
            }
          }
        }
      }
    }
  }
}
</style>
