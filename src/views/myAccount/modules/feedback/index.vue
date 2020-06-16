<template>
  <div class='feedback'>
    <p>问题反馈</p>
    <textarea name="" id="" cols="30" rows="10" placeholder="请输入您的反馈意见，以便我们及时处理。"></textarea>
    <button>提交</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
    this.$store.commit('changeLeftSideTabIndex', 9)
  }
}
</script>

<style lang='less' scoped>
.feedback {
  width:966px;
  height:1004px;
  background:rgba(255,255,255,1);
  // padding: 45px 39px 0 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    width: 100%;
    height: 60px;
    background-color: #FEFAEA;
    color: #333;
    font-weight: bold;
    text-align: center;
    line-height: 60px;
    margin-bottom: 33px;
  }
  textarea {
    width: 92%;
    // margin: auto;
    height: 366px;
    display: block;
    padding: 20px 20px 0 20px;
    outline: none;
    border: 2px solid #E6E6E6;
    font-size: 16px;
    color: #808080;
  }
  button {
    width:310px;
    height:55px;
    margin-top: 44px;
    background:rgba(255,199,51,1);
    border-radius:4px;
    outline: none;
    border: none;
    font-size: 24px;
    color: #333;
    line-height: 55px;
  }
}
</style>
