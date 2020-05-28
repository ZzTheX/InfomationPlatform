<template>
  <div class='chat'>
    <div class='chat_list'>
        <div class="chat_item" v-for='i in 4' :key='i'>
          <img :src="require('../../../../assets/user.png')" alt="">
          <div>
            <span>用户名</span>
            <p>消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容</p>
            <span>2020-03-18  17:25</span>
          </div>
          <img :src="require('../../../../assets/strawberry.png')" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.chat {
  padding-left: 40px;
  padding-right: 38px;
  .chat_list {
    .chat_item {
      display: flex;
      padding-top: 23px;
      padding-bottom: 24px;
      justify-content: space-between;
      border-bottom: 1px solid #E6E6E6;
      >img:first-child {
        width: 60px;
        height: 60px;
        margin-right: 13px;
      }
      > div {
        > span:first-child {
          font-size: 18px;
          color: #000;
          font-weight: 500;
          margin-bottom: 13px;
        }
        > p {
          width: 636px;
          font-size: 16px;
          color: #333;
          margin-top: 13px;
          margin-bottom: 20px;
        }
        >span:last-child {
          font-size: 14px;
          color: #808080;
        }
      }
      >img:last-child {
        width: 102px;
        height: 102px;
      }
    }
  }
}
</style>
