<template>
  <div class='notification'>
    <div class='message_list'>
      <div class='message_item' v-for='i in 4' :key='i'>
        <div class='message_ttile'>
          <span>消息通知的标题</span>
          <span>2020-03-18</span>
        </div>
        <p class='message_content'>消息的通知内容文案，消息的通知内容文案消息的通知内容文案消息的通知内容文案消息的通知内容文案，消息的通知内容文案消息的通知内容文案，消息的通知内容文案消息的通知内容文案消息的通知内容文案消息的通知内容文案消息的通知内容文案消息的通知内容文案</p>
        <span>查看详情 &gt;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.notification {
  padding: 0 39px 0 40px;
  .message_list {
    .message_item {
      padding-top: 31px;
      padding-bottom: 21px;
      border-bottom: 1px solid #E6E6E6;
      .message_ttile {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        >span:first-child {
          color: #333;
          font-size: 18px;
          font-weight: 500;
        }
        >span:last-child {
          color: #808080;
          font-size: 16px;
        }
      }
      .message_content {
        margin-bottom: 20px;
        &+span {
          color: #3AA4F6;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
