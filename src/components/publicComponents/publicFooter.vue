<template>
  <div class="public_footer">
    <div class="inner">
      <div class="footer_left">
        <div class='square'></div>
        <p>信息平台</p>
      </div>
      <div class="footer_right">
        <div class='footer_right_items'>
          <span v-for='(item, index) in footerItems' :key='index'>{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footerItems: ['个人中心', '购物车', '我的订单', '浏览记录', '消息中心', '问题反馈']
    }
  }
};
</script>
<style lang='less'>
.public_footer {
  width: 100%;
  height: 90px;
  background: rgba(112, 112, 112, 1);
  position: relative;
  bottom: 0;
  .inner {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .footer_left {
      display: flex;
      box-sizing: border-box;
      padding-top: 24px;
      padding-bottom: 24px;
      div.square {
        box-sizing: border-box;
        width:42px;
        height:42px;
        background:rgba(255,255,255,1);
        border:2px solid rgba(245,245,245,1);
      }
      p {
        color: #fff;
        font-size: 18px;
        line-height: 42px;
        margin-left: 9px;
        cursor: pointer;
      }
    }
    .footer_right {
      box-sizing: border-box;
      padding: 37px 0 37px 0;
      color: #fff;
      font-size: 14px;
      .footer_right_items {
        display: flex;
        span {
          width: 90px;
          border-right: 2px solid #fff;
          margin-right: 16px;
          text-align: left;
          cursor: pointer;
        }
        span:last-child {
          border-right: none;
        }
      }
    }

  }
}
</style>
