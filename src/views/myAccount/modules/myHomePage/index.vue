<template>
  <div class='my_homepage'>
    <div class='homepage_nav'>
      <span @click="handClick(0, 'my-posts')" :class='{active: tabIndex === 0}' >我发布的</span>
      <span @click="handClick(1, 'comments')" :class='{active: tabIndex === 1}' >评论</span>
      <span :class='{active: tabIndex === 2}' >帖子</span>
      <span :class='{active: tabIndex === 3}' >动态</span>
    </div>
    <div class='my_homepage_main'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tabIndex: 0
    }
  },
  created () {
    this.$store.commit('changeLeftSideTabIndex', 0)
  },
  methods: {
    handClick (index, path) {
      console.log(index)
      this.tabIndex = index
      this.$router.push(path)
    }
  },
  components: {
  }
}
</script>

<style lang='less' scoped>
.my_homepage {
  width: 100%;
  background-color: #fff;
  .homepage_nav {
    display: flex;
    width: 100%;
    height: 51px;
    line-height: 51px;
    font-size: 20px;
    color: #333;
    padding-left: 40px;
    border-bottom: 1px solid #F0F0F0;
    background-color: #fff;
    span {
      padding-bottom: 10px;
      margin-right: 124px;
      border-bottom: 5px solid transparent;
      cursor: pointer;
      &.active {
        color: #FFC733;
        border-bottom: 5px solid #FFC733;
      }
    }
  }
  .my_homepage_main {
    min-height: 1109px;
  }
}
</style>
