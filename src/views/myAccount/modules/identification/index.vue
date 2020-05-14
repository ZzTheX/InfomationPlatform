<template>
  <div class='identify'>
     <p @click='handleClick()' class='active'>采购商认证</p>
     <p @click='handleClick()' >供应商认证</p>
     <p @click='handleClick()' >实人认证</p>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick (){
      this.$router.push({})
    }
  }
}
</script>

<style lang='less' scoped>
.identify {
    padding-top: 176px;
    p {
        width: 490px;
        height: 127px;
        line-height: 127px;
        text-align: center;
        font-size: 30px;
        color: #333333FF;
        margin: auto;
        margin-bottom: 29px;
        background-color: #FFFCF5;
        border: 2px solid #F0F0F0;
        cursor: pointer;
    }
    p.active {
         background-color: #FFC90F;
    }
}
</style>
