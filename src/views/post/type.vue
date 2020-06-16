<template>
  <div class='post_types'>
    <div @click='toFillForm("supply-form")' class='active'>供应信息</div>
    <div @click='toFillForm("require-form")'>需求信息</div>
    <div @click='toFillForm("post-essay")'>发布推文</div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('stepChange', false)
  },
  methods: {
    toFillForm (path) {
      // this.$store.commit('stepChange', true)
      this.$router.push(path)
    }
  }
}
</script>

<style lang='less' scoped>
.post_types {
     box-sizing: content-box;
     width: 1200px;
     margin: auto;
     display: flex;
     flex-direction: column;
     align-items: center;
     height: 594px;
     background-color: #fff;
     font-size: 30px;
     color: #333;
     text-align: center;
     padding-top: 80px;
     border-bottom: 200px solid #F5F5F5;
     div {
         width: 569px;
         height: 89px;
         line-height: 89px;
         background-color: #E6E6E6;
         margin-bottom: 46px;
         cursor: pointer;
     }
      div.active {
         background-color: #FFC90F;
     }
 }
</style>
