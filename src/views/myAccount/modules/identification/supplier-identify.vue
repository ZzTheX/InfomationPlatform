<template>
  <div class="suplier">
    <div class="form_title">供应商认证</div>
    <div class="form_wraper">
      <el-form label-width="340px">
        <el-form-item label="供应商名称：">
          <el-input></el-input>
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
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系电话：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系地址：">
          <el-input></el-input>
        </el-form-item>
        <div style="padding-left: 340px">补充信息</div>
        <el-form-item label="公司名称：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="公司税号：">
          <el-select></el-select>
        </el-form-item>
        <el-form-item label="企业规模：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item id="hisiri" label="上传营业执照照片：">
          <el-upload>
            <el-button type="info">选择文件</el-button>
            <span>未选择任何文件</span>
          </el-upload>
        </el-form-item>
        <el-form-item label>
          <span class="hint_info">支持文件拓展名:pdf、jpg、png...</span>
        </el-form-item>
        <el-form-item label>
          <div class="submit_button">提交认证</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goAddField () {
     this.$router.push({
       path: "add-field",
       qurey: ""
     }); 
    }
  }
};
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
