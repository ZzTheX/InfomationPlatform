<template>
  <div class='message'>
    <div class='message_nav'>
      <p @click='handleRouter(0)' :class="{'active': currentIndex === 0}">通知消息</p>
      <p @click='handleRouter(1)' :class="{'active': currentIndex === 1}">互动消息</p>
      <p @click='handleRouter(2)' :class="{'active': currentIndex === 2}">聊聊</p>
      <p @click='handleRouter(3)' :class="{'active': currentIndex === 3}">活动消息</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0,
      messageNavList: ['notification', 'interaction', 'chat', 'active']

    }
  },
  created () {
    this.$store.commit('changeLeftSideTabIndex', 8)
  },
  methods: {
    handleRouter (index) {
      this.currentIndex = index
      this.$router.replace({
        name: this.messageNavList[index]
      })
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
      cursor: pointer;
    }
    p.active {
      border-bottom: 6px solid #FFC733;
    }

  }
}
</style>
