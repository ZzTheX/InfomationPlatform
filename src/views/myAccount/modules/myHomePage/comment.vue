<template>
  <div class='comment'>
    <div class='comment_head'>
      <p>评价内容</p>
      <p>被评价人</p>
      <p>商品名称</p>
    </div>
    <div class='comment_list'>
      <div class='comment_item' v-for='i in 6' :key='i'>
         <p>将就吧，掉好多毛毛，里面穿了一件黑色的线子底，沾了好多好多白色毛毛</p>
         <p>卖家：徐梦的花园</p>
         <p>虎全站课网会员教程全。虎全站课网会员教程全。虎全站课网会员教程全。虎全站课网会员教程全。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
.comment {
  .comment_head {
    display: flex;
    font-size: 18px;
    color: #333;
    height: 46px;
    border-bottom: 1px solid #F0F0F0;
    padding-left: 40px;
    line-height: 46px;
    p:first-child {
      width: 459px;
    }
    p:nth-child(2) {
      width: 247px;
    }
    p:last-child {
      flex: 1;
    }
  }
  .comment_list {
    .comment_item {
      display: flex;
      padding-left: 40px;
      padding-top: 23px;
      height: 140px;
      border-bottom: 1px solid #F0F0F0;
      color: #666666;
      font-size: 16px;
      line-height: 24px;
      p:first-child {
        width: 459px;
        padding-right: 90px;
      }
      p:nth-child(2) {
        width: 247px;
      }
      p:last-child {
        flex: 1;
      }
    }
  }

}
</style>
