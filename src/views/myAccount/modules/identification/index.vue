<template>
  <div class='identify'>
     <p @click='handleClick("purchase-identify")' class='active'>采购商认证</p>
     <p @click='handleClick("supplier-identify")' >供应商认证</p>
     <p @click="handleClick('real-name-identify')">实人认证</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
        // 供应商认证状态   0未提交  1审核中   2审核未通过   3审核已通过
        supplier_certification: '',
        // 实名认证状态
        verified: '',
        // 采购商认证状态
        buyer_certification: ''
    }
  },
  created () {
    this.getCertificationInfo()
    this.$store.commit('changeLeftSideTabIndex', 7)
  },
  methods: {
    handleClick (path){
      this.$router.push({
        path,
        query: {
            supplier_certification: this.supplier_certification,
            buyer_certification: this.buyer_certification,
            verified: this.verified
          }
        })
    },
    getCertificationInfo () {
      this.http.get('/api/member/personalInformation').then(res => {
        console.log('个人信息返回数据：', res)
        if(res.data.code === 200) {
          this.supplier_certification  = res.data.result.supplier_certification
          this.buyer_certification  = res.data.result.buyer_certification
          this.verified  = res.data.result.verified
        }
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
