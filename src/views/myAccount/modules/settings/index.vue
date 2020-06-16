<template>
  <div class='settings'>
      <div class='settings_head'>
          <p @click='handClick(0, "personal-info")' :class='{active: tabIndex === 0}'>个人信息</p>
          <p @click='handClick(1, "modify-password")' :class='{active: tabIndex === 1}'>密码管理</p>
          <p @click='handClick(2, "adress-manage")' :class='{active: tabIndex === 2}'>地址管理</p>
          <p @click='handClick(3)' :class='{active: tabIndex === 3}'>帮助文档</p>
          <p @click='handClick(4)' :class='{active: tabIndex === 4}'>关于我们</p>
      </div>
      <router-view></router-view>
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
        this.$store.commit('changeLeftSideTabIndex', 13)
    },
    methods: {
        handClick (index, path) {
            this.tabIndex = index
            this.$router.push({
                path
            })
        }
    }
}
</script>

<style lang='less' scoped>
.settings {
    // height: 1004px;
    background-color:#fff;
    .settings_head {
        display: flex;
        font-size: 20px;
        color: #333333FF;
        border-bottom: 1px solid #F0F0F0FF;
        padding-top: 17px;
        padding-left: 39px;
        p {
          padding-bottom: 10px;
          border-bottom: 6px solid #fff;
          margin-right: 81px;
          cursor: pointer;
        }
        p.active {
          color: #FFC90FFF;
          border-bottom: 6px solid #FFC90FFF;
        }
    }
   

}
</style>