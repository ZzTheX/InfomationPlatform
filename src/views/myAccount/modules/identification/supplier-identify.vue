<template>
  <div class="suplier">
    <div class="form_title">供应商认证</div>
    <div class="form_wraper">
      <el-form label-width="340px">
        <el-form-item label="供应商名称：">
          <el-input v-show='!isSubmmited' v-model='certiData.supplier_name'></el-input>
          <p v-show='isSubmmited'>{{certificationInfo.supplier_name}}</p>
        </el-form-item>
        <el-form-item label="种植养殖园地：">
          <div @click="goAddField" class="addFieldBtn">点击添加园地<img src="../../../../assets/triangle.png" alt=""></div>
        </el-form-item>
        <!-- 园地卡片 -->
        <div class="kapian">
          <div class="head">
            <span>园地一</span>
            <span>x</span>
          </div>
          <span>地址：四川省攀枝花市仁和区炳仁路路口</span>
          <span>规模：50亩</span>
          <span class="title">主营产品</span>
          <div class="goods">
            <span>芒果：35亩</span>
            <span>预计产量：30吨</span>
            <span>预计产量：30吨</span>
          </div>
          <div class="goods">
            <span>芒果：35亩</span>
            <span>预计产量：30吨</span>
            <span>预计产量：30吨</span>
          </div>
          <div class="pic">
            <img src="../../../../assets/category.png" alt />
            <img src="../../../../assets/category.png" alt />
            <img src="../../../../assets/category.png" alt />
          </div>
        </div>
        <el-form-item label="园地负责人：">
          <el-input v-show='!isSubmmited' v-model='certiData.principal'></el-input>
           <p v-show='isSubmmited'>{{certificationInfo.principal}}</p>
        </el-form-item>
        <el-form-item label="联系电话：">
          <el-input v-show='!isSubmmited' v-model='certiData.contact_number'></el-input>
           <p v-show='isSubmmited'>{{certificationInfo.contact_number}}</p>
        </el-form-item>
        <el-form-item label="联系邮箱：">
          <el-input v-show='!isSubmmited' v-model='certiData.contact_email'></el-input>
           <p v-show='isSubmmited'>{{certificationInfo.contact_email}}</p>
        </el-form-item>
        <el-form-item label="联系地址：">
          <el-input v-show='!isSubmmited' v-model='certiData.contact_address'></el-input>
           <p v-show='isSubmmited'>{{certificationInfo.contact_address}}</p>
        </el-form-item>
        <el-form-item label="补充信息(选填)">
          <el-tag type='warning'>如有, 请提交以便于获得更高信用授权</el-tag>
        </el-form-item>
        <!-- <div style="padding-left: 340px">补充信息</div> -->
        <el-form-item label="公司名称：">
          <el-input v-show='!isSubmmited' v-model="certiData.company_name"></el-input>
           <p v-show='isSubmmited'>{{certificationInfo.company_name}}</p>
        </el-form-item>
        <el-form-item label="公司税号：">
          <el-input v-show='!isSubmmited' v-model="certiData.company_tax_id"></el-input>
           <p v-show='isSubmmited'>{{certificationInfo.company_tax_id}}</p>
        </el-form-item>
        <el-form-item label="企业规模：">
         <el-input v-show='!isSubmmited' v-model='certiData.enterprise_size'></el-input>
          <p v-show='isSubmmited'>{{certificationInfo.enterprise_size}}</p>
        </el-form-item>
        <el-form-item id="hisiri" label="上传营业执照照片:" v-show='!isSubmmited'>
          <label for="licenseUpload">
            <img :src="certiData.business_license" v-show='isShowLicense'>
            <div class='upload' v-show='!isShowLicense'>+</div>
            <input type="file" id='licenseUpload' style="display:none" @change='onchange'>
          </label>
        </el-form-item>
        <el-form-item id="hisiri" label="营业执照照片:" v-show='isSubmmited'>
            <img :src="certificationInfo.business_license" >
        </el-form-item>
        <el-form-item label>
          <span class="hint_info">支持文件拓展名:pdf、jpg、png...</span>
        </el-form-item>
        <el-form-item label>
          <div v-show='!isSubmmited' class="submit_button" @click='submitSupplierCerti'>提交认证</div>
          <div v-show='isSubmmited' class="submit_button">{{supplier_certification | certificationStatus}}</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      supplier_certification: 0,
      isShowLicense: false,
      certificationInfo: {},
      certiData: {
          business_license: '',
          certification_type: 1,
          company_name: "",
          company_tax_id: "",
          contact_address: "",
          contact_email: "",
          contact_number: "",
          enterprise_size: "",
          principal: '',
          supplier_name: '',
      } 
    }
  },
  filters: {
    certificationStatus (value) {
       console.log('certificationStatus',value)
      if(value === 1) {
       return '审核中'
      } else if(value === 2) {
        return  '审核未通过'
      } else if (value === 3) {
        return  '审核已通过'
      }
    }
  },
  computed: {
    isSubmmited () {
      return this.supplier_certification > 0
    }
  },
  created () {
    console.log('status;', this.supplier_certification)
    this.supplier_certification = this.$route.query.supplier_certification
    this.getCertificationInfo()
  },
  methods:{
    getCertificationInfo () {
      this.http.get('/api/approve/getCertification?certification_type=1').then(res => {
        if(res.data.code === 200) {
          console.log('供应商认证信息', res)
          this.certificationInfo = res.data.result
        }
      })
    },
    onchange (e) {
      let file = e.target.files[0]
      let formData = new FormData()
      formData.append('file', file)
      this.http.post('/api/member/option/uploadFile', formData).then(res => {
        // console.log('营业执照上传返回数据：', res)
        this.certiData.business_license = res.data.result
        this.isShowLicense = true
      })
    },
    goAddField () {
     this.$router.push({
       path: "add-field",
       qurey: ""
     })
    },
    submitSupplierCerti () {
      console.log('园地信息:', this.$store.state.gardens)
      this.certiData.gardens = this.$store.state.gardens
      this.http.post('/api/approve/certification', this.certiData).then(res => {
        if(res.data.code === 200) {
          this.$message({
            type: 'success',
            message: res.data.msg
          })
          this.$router.replace({
            name: 'identification'
          })
        }
      })
    },
    handleSucess (res, file) {
      console.log(res, file)
    }

  }
}
</script>
<style lang='less'>
.suplier {
  .form_title {
    height: 60px;
    line-height: 60px;
    background-color: #fefaea;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #333;
    margin-bottom: 33px;
  }
  .form_wraper {
    padding-right: 306px;
    .el-form {
      .addFieldBtn {
        width: 320px;
        height: 41px;
        padding:0 11px;
        border-radius: 5px;
        border: 1px solid rgba(214, 214, 214, 1);
         display: flex;
        justify-content: space-between;
        align-items: center;
        img{
          width: 6px;
          height: 10px;
        }
      }
      #hisiri {
        margin-bottom: 0;
        img {
          width: 309px;
          
        }
        .upload {
          width: 200px;
          height: 200px;
          text-align: center;
          line-height: 200px;
          border: 1px dashed #999;
          color: #909090;
          font-size: 80px;
          // font-weight: ;
        }
      }
      .hint_info {
        font-size: 12px;
        color: #666;
      }
      .submit_button {
        width: 310px;
        height: 55px;
        line-height: 55px;
        text-align: center;
        background: rgba(255, 199, 51, 1);
        border-radius: 4px;
        cursor: pointer;
      }
      .kapian {
        width: 372px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(214, 214, 214, 1);
        padding: 17px;
        margin: 15px 0 15px 288px;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        * {
          display: flex;
        }
        span {
          margin-bottom: 8px;
        }
        .head {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          display: flex;
          align-items: center;
          justify-content: space-between;
          span:last-child {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 12px;
            height: 12px;
            font-size: 20px;
            padding-bottom: 6px;
            border: 1px solid;
          }
        }
        .title {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          margin-top: 10px;
        }
        .goods {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }
        .pic {
          display: flex;
          justify-content: space-between;
          img {
            width: 92px;
            height: 92px;
          }
        }
      }
    }
  }
}
</style>
