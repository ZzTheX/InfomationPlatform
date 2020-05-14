<template>
  <div class='message'>
    <div class='message_nav'>
      <p class='active'>通知消息</p>
      <p>互动消息</p>
      <p>聊聊</p>
      <p>活动消息</p>
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
.message {
  .message_nav {
    height: 52px;
    display: flex;
    padding-left: 39px;
    font-size: 20px;
    color: #333333;
    line-height: 52px;
    border-bottom: 1px solid #F0F0F0;
    p {
      border-bottom: 6px solid #fff;
      margin-right: 102px;
    }
    p.active {
      border-bottom: 6px solid #FFC733;
    }

  }
}
</style>
