<template>
  <div class='post_types'>
    <div 
      :class='{active: currentIndex === 0}'
      @click='toFillForm("supply-form")' 
      @mouseenter="handleMouseEnter(0)" >供应信息</div>
    <div 
      :class='{active: currentIndex === 1}'
      @click='toFillForm("require-form")' 
      @mouseenter="handleMouseEnter(1)" >需求信息</div>
    <div 
      :class='{active: currentIndex === 2}'
      @click='toFillForm("post-essay")' 
      @mouseenter="handleMouseEnter(2)">发布推文</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0
    }
  },
  created () {
    this.$store.commit('stepChange', false)
  },
  methods: {
    toFillForm (path) {
      // this.$store.commit('stepChange', true)
      this.$router.push(path)
    },
    handleMouseEnter (value) {
      this.currentIndex = value
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
     div.active{
       background-color: #FFC90F;
     }
 }
</style>
