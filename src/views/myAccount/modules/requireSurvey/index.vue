<template>
  <div class='survey'>
    <p>选择类型</p>
    <div @click='goToSurveyFormPage(false, "供应商相关服务调研")'>供应商相关服务调研</div>
    <div @click='goToSurveyFormPage(false, "采购商相关服务调研")'>采购商相关服务调研</div>
    <div @click='goToSurveyFormPage(true, "同城配送需求调研")'>同城配送需求调研</div>
    <div @click='goToSurveyFormPage(true, "金融相关服务调研")'>金融相关服务调研</div>
    <div @click='goToSurveyFormPage(true, "意见及建议反馈")'>意见及建议反馈</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
    this.$store.commit('changeLeftSideTabIndex', 10)
  },
  methods: {
    goToSurveyFormPage (isShowIdSelect, title) {
      this.$router.push(
        {
          path: 'survey-form',
          query: {
            isShowIdSelect,
            title
          }
        })
    }
  }
}
</script>

<style lang='less' scoped>
.survey {
  height: 1004px;
  padding-top: 36px;
  text-align: center;
  >p{
    font-size: 24px;
    color: #000;
    margin-bottom: 43px;
  }
  >div {
    width: 427px;
    height: 100px;
    font-size: 20px;
    color: #333;
    line-height: 100px;
    margin: auto;
    background-color: #FFFCF5;
    border: 2px solid #F0F0F0;
    border-radius: 6px;
    margin-bottom: 26px;
    cursor: pointer;
  }
}
</style>
