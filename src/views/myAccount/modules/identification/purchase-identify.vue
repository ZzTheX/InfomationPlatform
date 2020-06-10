<template>
  <div class='purchase'>
      <p class='head'>采购认证</p>
      <div class='form_content'>
        <el-form
          label-width='150px'>
          <el-form-item label='采购商名称:'>
            <el-input v-if='false' v-model="purchaserInfo.supplier_name"></el-input>
            <el-tag type='info' v-if='true'>采购商名称</el-tag>
          </el-form-item>
          <el-form-item label='公司名称:'>
            <el-input v-model="purchaserInfo.company_name"></el-input>
          </el-form-item>
          <el-form-item label='公司税号:'>
            <el-input v-model="purchaserInfo.company_tax_id"></el-input>
          </el-form-item>
          <el-form-item label='企业规模:'>
            <el-select v-model='purchaserInfo.enterprise_size'>
              <el-option 
                v-for="(item, index) in sizeList"
                :value="item.value"
                :label='item.label'
                :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label='业务负责人:'>
            <el-input v-model='purchaserInfo.principal'></el-input>
          </el-form-item>
          <el-form-item label='联系电话:'>
            <el-input v-model='purchaserInfo.contact_number'></el-input>
          </el-form-item>
          <el-form-item label='联系邮箱:'>
            <el-input v-model='purchaserInfo.contact_email'></el-input>
          </el-form-item>
          <el-form-item label='上传营业执照照片:'>
           <el-upload
            :multiple='fasle'
            action='http://platform.taogoucloud.com/api/member/option/uploadFile'
            :file-list="fileList"
            list-type="picture"
            :on-success='imgUploadSucess'
            >
             <el-button size="medium">选择文件</el-button>
           </el-upload>
          </el-form-item>
          <el-form-item label=''>
            <span type='info' >支持文件拓展名: pdf、jpg、png...</span>
          </el-form-item>
          <el-form-item label=''>
           <img src="" alt="">
          </el-form-item>
          <el-form-item label=''>
            <div class='submit_button' @click='getCertification'>提交认证</div>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: [],
      sizeList: [
        {
          label: '1-10人',
          value: '1-10人'
        },
        {
          label: '10-50人',
          value: '10-50人'
        },
        {
          label: '50-100人',
          value: '50-100人'
        },
        {
          label: '100人以上',
          value: '100人以上'
        }
      ],
      purchaserInfo: {
        "business_license": "",
        "certification_type": 1,
        "company_name": "",
        "company_tax_id": "",
        "contact_address": "",
        "contact_email": "",
        "contact_number": "",
        "enterprise_size": "",
        "principal": "",
        "supplier_name": ""
      }
    }
  },
  methods: {
    imgUploadSucess (res, file, fileList) {
      // console.log(res, file, fileList)
      this.purchaserInfo.business_license = res.data.result
    },
    getCertification () {
      this.http.post('/api/approve/certification', this.purchaserInfo).then(res => {
        console.log(res)
        if(res.data.code === 200) {
           this.$message({
            message: res.data.msg,
            type: 'success'
           })
           this.$router.go(-1)
        } else {
          this.$message({
            message: res.data.msg,
            type: 'warning'
          })
        }
       
        
      })
    }
  }

}
</script>

<style lang='less' scoped>
.purchase {
    .head {
        height: 60px;
        background-color: #FEFAEA;
        font-size: 20px;
        font-weight: 540;
        line-height: 60px;
        text-align: center;
        margin-bottom: 40px;
    }
    .form_content {
      // display: flex;
      // flex-direction: flex-end;
      padding-right: 306px;
      padding-left: 199px;
      /deep/.el-form-item__label {
        color: #333;
        font-size: 16px;
      }
      .el-select {
        width: 311px;
      }
      .submit_button {
        width:310px;
        height:55px;
        line-height: 55px;
        background:rgba(255,199,51,1);
        border-radius:4px;
        color: #333;
        font-size: 24px;
        text-align: center;
        cursor: pointer;
      }
    }
}
</style>
