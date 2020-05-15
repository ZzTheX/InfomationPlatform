<template>
  <div class='survey'>
    <p>选择类型</p>
    <div @click='goToSurveyFormPage'>供应商相关服务调研</div>
    <div @click='goToSurveyFormPage'>采购商相关服务调研</div>
    <div @click='goToSurveyFormPage'>同城配送需求调研</div>
    <div @click='goToSurveyFormPage'>金融相关服务调研</div>
    <div @click='goToSurveyFormPage'>意见及建议反馈</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goToSurveyFormPage () {
      this.$router.push({name: 'surveyForm'})
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
