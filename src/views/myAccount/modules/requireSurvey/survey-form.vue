<template>
  <div class='survey_form'>
    <p>{{title}}</p>
    <div>
      <el-form
      label-width="85px"
      :label-position="'left'">
        <el-form-item label='您的身份:' v-show="isShowIdSelect">
          <el-select v-model='id' v-show="isShowIdSelect">
            <el-option v-for='i in options'
                       :key='i'
                       :label='i.label'
                       :value='i.value'></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label='所在地:'>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label='联系人:'>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label='联系电话:'>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label='详情描述:'>
          <el-input type='textarea' size='medium' class='cur'></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      isShowIdSelect: '',
      id: '供应商',
      options: [
        {
          label: '供应商',
          value: '供应商'
        },
        {
          label: '其他',
          value: '其他'
        }
      ]
    }
  },
  props: {
    surveyForm: {
      requiredType: Object,
      isRequired: true
    }
  },
  created () {
    this.title = this.$route.query.title
    this.isShowIdSelect = this.$route.query.isShowIdSelect
  }
}
</script>

<style lang='less' scoped>
.survey_form{
  height: 1004px;
  padding-left: 225px;
  padding-right: 273px;
  padding-top: 36px;
  >p {
    font-size: 24px;
    color: #000000;
    text-align: center;
    margin-bottom: 36px;
  }
  /deep/ .el-textarea__inner {
    height: 280px;
  }
}
</style>
