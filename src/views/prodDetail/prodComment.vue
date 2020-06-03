<template>
  <div class='comment'>
    <div class='input_area'>
      <input type="text" placeholder="请输入您的留言" ref='input' v-model='inputValue'>
      <button>留言</button>
    </div>
    <div class='comment_list'>
      <div class='comment_item' v-for='i in 3' :key='i'>
        <img :src="require('../../assets/user.png')" alt="">
      <div class='comment_text'>
        <span>用户昵称</span>
        <p>超级棒啊！太爱了，第一套明制，一直想买没买，看见是现货就更草了，没有让我失望，但是那个领子扣上云母扣就有点不一样高低了，然后上袄底下脏了一小块，其他的没啥了，整体很棒啊！有暗纹真的爱了，马面是客服小姐姐给我换了白色的，爱了爱了</p>
        <div class='img_list'>
          <img width='50' height='50' :src='require("../../assets/comment.png")' alt="">
          <img width='50' height='50' :src='require("../../assets/comment.png")' alt="">
          <img width='50' height='50' :src='require("../../assets/comment.png")' alt="">
        </div>
        <p>
          <span class='time'>2020年03月04日  11:27</span>
          <span @click='handleResponse()'>回复</span>
        </p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleResponse (e) {
     this.$refs.input.focus()
     this.inputValue = '回复用户昵称: '
    }
  }
}
</script>

<style lang='less' scoped>
.comment {
  .input_area {
    height: 88px;
    border-bottom: 1px solid #F0F0F0FF;
    padding: 23px 27px 21px 26px;
    display: flex;
    justify-content: space-between;
    > input {
      width: 796px;
      background-color: #F5F5F5FF;
      border-radius: 4px;
      height: 44px;
      padding: 14px 0 15px 15px;
    }
    > button {
      width: 100px;
      background-color: #FFC90FFF;
      color: #333333;
      font-size: 16px;
      height: 44px;
      line-height: 44px;
      text-align: center;
    }
  }
  .comment_list {
   .comment_item {
      display: flex;
      padding: 25px 26px 24px 26px;
      border-bottom: 1px solid #F0F0F0;
      > img {
      width: 50px;
      height: 50px;
      margin-right: 18px;
    }
    .comment_text {
      font-size: 14px;
      color: #333;
      >span:first-child {
        display: block;
        font-size: 16px;
        margin-bottom: 14px;
      }
      >p:nth-child(2) {
        margin-bottom: 14px;
      }
      .img_list {
        display: flex;
        margin-top: 40px;
        margin-bottom: 20px;
        >img {
          width: 50px;
          height: 50px;
          flex-grow: 1;
          margin-right: 16px;
        }
      }
      .time {
        font-size: 14px;
        color: #999999;
        margin-right: 18px;
      }
      .time + span {
        cursor: pointer;
      }
    }
   }
  }
}
</style>
