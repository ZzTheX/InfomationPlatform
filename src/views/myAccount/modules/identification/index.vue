<template>
  <div class='identify'>
     <p @click='handleClick("purchase-identify")' class='active'>采购商认证</p>
     <p @click='handleClick("supplier-identify")' >供应商认证</p>
     <p @click="handleClick('real-name-identify')">实人认证</p>
  </div>
</template>

<script>
export default {
  created () {
    this.getCertificationInfo()
  },
  methods: {
    handleClick (path){
      this.$router.push({path})
    },
    getCertificationInfo () {
      this.http.get('/api/member/personalInformation').then(res => {
        console.log(res)
      })
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
