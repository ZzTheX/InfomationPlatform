<template>
  <div class="real_name_form">
    <div class="form_title">实人认证</div>
    <div class="form_content">
      <el-form label-width="180px">
        <el-form-item label="姓名: ">
          <p v-if='verified'>{{myIdInfo.name}}</p>
          <el-input v-else v-model="myIdInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="性别: ">
          <p v-if='verified'>{{myIdInfo.sex}}</p>
          <el-select v-else v-model="myIdInfo.sex" placeholder="请选择">
            <el-option value="男">男</el-option>
            <el-option value="女">女</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="身份证号码: ">
          <p v-if='verified'>{{myIdInfo.id_card}}</p>
          <el-input v-else maxlength="18" v-model="myIdInfo.id_card"></el-input>
        </el-form-item>
        <el-form-item label="生日:">
          <p v-if='verified'>{{myIdInfo.birthday}}</p>
          <el-date-picker v-else v-model="myIdInfo.birthday" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="邮箱:">
          <p v-if='verified'>{{myIdInfo.email}}</p>
          <el-input v-else type="email" v-model="myIdInfo.email"></el-input>
        </el-form-item>
        <el-form-item label="联系地址:">
          <p v-if='verified'>{{myIdInfo.address}}</p>
          <el-input v-else v-model="myIdInfo.address"></el-input>
        </el-form-item>
        <el-form-item label="上传身份证正面(必填):">
          <label for="id_front_pic">
            <img width="310px" height="168px" :src="frontImg"/>
          </label>
          <input type="file" id="id_front_pic" ref="frontPic" @change='uploadIdPic' style="display:none;">
        </el-form-item>
        <el-form-item label="上传身份证反面(必填):">
          <label for="id_back_pic">
            <img width="310px" height="168px" :src="reverseImg" />
          </label>
          <input type="file" id="id_back_pic" ref="backPic" @change='uploadIdPic' style="display:none;" />
        </el-form-item>
      </el-form>
      <div class="submit_button" @click='submitMyInfo'>提交认证</div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
// import { createNamespacedHelpers } from "vuex";
// const { mapActions } = createNamespacedHelpers("RealName");
export default {
  data() {
    return {
      verified: false,
      frontImg: "", //正面照片路劲 /img/up_load.e25d68a6.png
      reverseImg: "", //反面照片路劲 /img/up_load.e25d68a6.png
      myIdInfo: {
        address: "", //联系地址
        birthday: "", //生日
        email: "", //电子邮箱
        id_card: "", //身份证号码
        id_card_image: '', //证件照
        name: "", //姓名
        sex: "" 
        }
    }
  },
  created () {
    this.getVerifiedInfo()
  },
  methods: {
    uploadIdPic (e) {
      let file = e.target.files[0]
      let formdata = new FormData()
      formdata.append('file',file)
      this.http.post('/api/member/option/uploadFile', qs.stringify(formdata), {
        headers: {'Content-Type': '"multipart/form-data"'}
      }).then(res => {
        console.log('上传身份证图片返回信息:', res);
        if(res.data.code === 200) {
          this.myIdInfo.id_card_image = res.data.result
        }
      
      })
      
    },
    submitMyInfo () {
      this.http.post('/api/approve/realPersonCertification', this.myIdInfo, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(res => {
        console.log('实名认证返回信息:', res)
        if(res.data.code === 200) {
          this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
      })
    },
    getVerifiedInfo () {
      this.http.get('/api/member/personalInformation').then(res => {
        if(res.data.code === 200) {
          this.verified = res.data.result.verified
        }
        this.getMyInfo()
      })
    },
    getMyInfo () {
      if(this.verified  === false) { return }
      this.http.get('/api/approve/getRealPersonCertification').then(res => {
        console.log('获取我的实名认证资料:', res)
        this.myIdInfo = res.data.result
      })
    }

    //   changeFront(e,flg){
    //     let file = e.files[0];
    //     let formdata = new FormData();
    //     formdata.append('file',file);
    //     this.upload(formdata)
    //     if(picData.msg == "上传图片成功" && picData.code == 200){ 
    //       switch(flg){                             //  判断是正面还是反面
    //         case 'front' : this.frontImg = picData.result; 
    //           this.id_card_image.frontImg = picData.result; break; // 正面
    //         case 'reverse' :this.reverseImg = picData.result;
    //           this.id_card_image.reverseImg = picData.result; break ;//  反面
    //       }
    //     }else{
    //       alert("重新上传");
    //     }
    //  },
    // 上传
    // cilckBtn(){
    //   let emailTest = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    //   if(this.name){
    //     if(this.sex){
    //       if(this.id_card.length==18){
    //         if(this.birthday){
    //           if(emailTest.test(this.email)){
    //             if(this.address){
    //               if(this.id_card_image.frontImg&&this.id_card_image.reverseImg){
    //                 let result = this.authentication({
    //                   name:this.name,
    //                   sex:this.sex,
    //                   id_card:this.id_card,
    //                   birthday:new Date(this.birthday).getTime()/1000,
    //                   email:this.email,
    //                   address:this.address,
    //                   id_card_image:[this.id_card_image.frontImg,this.id_card_image.reverseImg]
    //                 });
    //                 console.log(result,"服务器返回");
    //               }else{
    //                 alert("请上传身份证照片");
    //               }
    //             }else
    //             alert("请输入联系地址")
    //           }else if(!this.email){
    //             alert("请输入邮箱")
    //           }else{
    //             alert("邮箱格式有误")
    //           }
    //         }else{
    //           alert("请选择您的生日")
    //         }
    //       }else if(!this.id_card){
    //         alert("请输入身份证号码")
    //           }else{
    //         alert("请输入正确的身份证号码")
    //       }
    //     }else{
    //       alert("请选择性别")
    //     }
    //   }else{
    //       alert("请输入姓名")
    //   }
    // }
  }
};
</script>

<style lang='less' scoped>
.real_name_form {
  .form_title {
    height: 60px;
    line-height: 60px;
    color: #333;
    font-size: 20px;
    text-align: center;
    background-color: #fefaea;
    margin-bottom: 40px;
  }
  .form_content {
    padding-right: 306px;
    padding-left: 170px;
    .el-form {
      width: 490px;
      p {
        padding-left: 15px;
      }
      /deep/.el-form-item__label {
        color: #333;
        font-size: 16px;
      }
      /deep/ .el-date-editor,
      /deep/.el-select {
        width: 310px;
      }
      img {
        cursor: pointer;
      }
    }
  }
  .submit_button {
    width: 310px;
    height: 55px;
    line-height: 55px;
    background-color: #ffc733;
    border-radius: 4px;
    font-size: 24px;
    text-align: center;
    color: #333;
    float: right;
    cursor: pointer;
  }
}
</style>
