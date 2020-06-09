<template>
  <div class="fieldtotal">
    <el-form label-width="340px">
      <!-- ----------- -->
      <el-form-item label="园地名称：">
        <el-input placeholder="请输入园地名称" v-model='gardens[0].garden_name'></el-input>
      </el-form-item>
      <!-- ----------- -->
      <el-form-item label="园地详细地址：">
        <el-input placeholder="请输入园地详细地址" v-model='gardens[0].garden_address'></el-input>
      </el-form-item>
      <!-- --------- -->
      <el-form-item label="园地规模：">
        <el-input class="duaninput" placeholder="请输入园地规模" v-model='gardens[0].garden_scale'></el-input>
        <el-select class="danwei1" v-model="gardens[0].scale_unit" placeholder="单位">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- ----------- -->
      <el-form-item label="主要产品：">
        <!-- <el-input placeholder="单行输入"></el-input> -->
        <div class="xuanze" @click="beingAdd">
          <span>点击添加产品</span>
          <img src="../../../../assets/triangle.png" />
        </div>
      </el-form-item>

      <!-- 添加产品 -->
      <el-form v-if="isAdd" class='add_product_form' label-width="100px">
        <span class="x" @click='isAdd=false'>x</span>
        <!-- ------- -->
        <el-form-item label="主要产品：">
          <el-input placeholder="请输入产品名称"></el-input>
        </el-form-item>
        <!-- --------- -->
        <el-form-item label="销售期间：">
          <div class="block">
            <el-date-picker v-model="time_start" clear-icon type="month" placeholder="开始月份"></el-date-picker>
            <el-date-picker v-model="time_end" clear-icon type="month" placeholder="结束月份"></el-date-picker>
          </div>
        </el-form-item>
        <!-- ---------- -->
        <el-form-item label="产品规模：">
          <el-input class="duaninput" placeholder="请输入产品规模"></el-input>
          <el-select class="danwei1" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- ------- -->
        <el-form-item label="预计产量：">
          <el-input class="duaninput" placeholder="请输入预计产量"></el-input>
          <el-select class="danwei1" v-model="value" placeholder="单位">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <!-- ------- -->
      <el-form-item label="添加图片/视频：" class="uploads">
        <label for="upload">
          <img src="../../../../assets/up_load.png" alt />
        </label>
        <input type="file" id="upload" />
      </el-form-item>
      <!-- -------- -->
      <el-form-item label="园地简介：">
        <el-input
          class="textareainpyt"
          type="textarea"
          :rows="8"
          placeholder="请输入园地简介"
          v-model="intro"
        ></el-input>
      </el-form-item>
    </el-form>
    <!-- 按钮 -->
    <span class="addBtn" @click='saveGardenInfo'>保存</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdd:false,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      gardens: [
        {
          "garden_address": "",
          "garden_images": "",
          "garden_introduction": "",
          "garden_name": "",
          "garden_scale": 50,
          "latitude": "",
          "longitude": "",
          "products": [
            {
              "end_time": 1585554850,
              "expected_output": 30,
              "expected_output_unit": "",
              "product_name": "",
              "start_time": 1577851200,
              "yield_scale": 20,
              "yield_unit": ""
            }
          ],
          "scale_unit": ""
        }
      ],
      value: "",
      time_start: "",
      time_end: "",
      intro: ""
    };
  },
  methods:{
     beingAdd(){
        this.isAdd=!this.isAdd;
     },
     saveGardenInfo () {
       console.log(this.gardens[0].garden_name)
       this.$store.commit('saveGardenInfo', this.gardens)
     }
  }
};
</script>

<style lang='less' scoped>
.fieldtotal {
  width: 900px;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  margin-top: 44px;
  .el-form {
    >.el-form {
      width: 438px;
      height: 376px;
      padding: 21px;
      margin-left: 211px;
      margin-bottom: 12px;
      border: 1px solid rgba(214, 214, 214, 1);
      .x {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        margin-bottom: 16px;
        cursor: pointer;
      }
      .block {
        display: flex;
        flex-direction: column;
      }
      .block > div:first-child {
        margin-bottom: 12px;
      }
    }
    .el-form-item {
      .el-input {
        width: 280px;
        height: 41px;
      }
      .duaninput {
        width: 170px;
      }
      .xuanze {
        width: 310px;
        height: 41px;
        border: 1px solid rgba(214, 214, 214, 1);
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 6px;
          height: 10px;
        }
      }
      .danwei1 {
        width: 104px;
        height: 41px;
        margin-left: 7px;
      }
    }
    .uploads {
      input {
        display: none;
      }
      img {
        width: 100px;
      }
    }
    .textareainpyt {
      width: 310px;
      height: 170px;
    }
  }
  .addBtn {
    width: 310px;
    height: 55px;
    background: rgba(255, 199, 51, 1);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
  }
}
</style>