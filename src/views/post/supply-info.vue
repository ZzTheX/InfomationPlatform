<template>
  <div class='supply_info'>
    <el-form label-width="180px">
      <el-form-item label="选择商品分类">
        <el-cascader 
          v-model='classThree'
          :options='category'>
          </el-cascader>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="supplyData.product_name"></el-input>
      </el-form-item>
      <el-form-item label="预售价格">
        <el-input v-model="supplyData.supply_price"></el-input>
        <el-select class="unit" placeholder="单位" v-model="supplyData.supply_price_unit">
          <el-option 
            v-for='(item, index) in priceUnitList'
            :key='index'
            :label='item.label'
            :value='item.value'>
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="可售数量">
        <el-input v-model="supplyData.available_quantity"></el-input>
        <el-select class="unit" placeholder="单位" v-model="supplyData.available_quantity_unit">
          <el-option 
            v-for='(item, index) in numUnit'
            :key='index'
            :label='item.label'
            :value='item.value'>
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="可售时间段">
        <el-date-picker
          v-model="supplyData.available_start_time"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
       <el-form-item label="">
        <el-date-picker
          v-model="supplyData.available_end_time"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="商品种植/养殖规模">
        <el-input v-model="supplyData.planting_scale"></el-input>
        <el-select class="unit" placeholder="单位" v-model="supplyData.planting_unit">
          <el-option 
            v-for='(item, index) in plantingUnit'
            :key='index'
            :label='item.label'
            :value='item.value'>
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="销售区域">
        <el-cascader 
          :options='cityList'
          v-model='supplyData.sales_area'></el-cascader>
      </el-form-item>
      <el-form-item label="最小起批量">
        <el-input v-model='supplyData.minimum_batch'></el-input>
      </el-form-item>
      <el-form-item label="期望定金">
        <span class='price_tag' @click='changePrice("1000")' :class='{isYellow: supplyData.deposit_amount === "1000"}'>1000</span>
        <span class='price_tag' @click='changePrice("5000")' :class='{isYellow: supplyData.deposit_amount === "5000"}'>5000</span>
        <span class='price_tag' @click='changePrice("10000")' :class='{isYellow: supplyData.deposit_amount === "10000"}'>10000</span>
        <el-input class="unit" placeholder="其他金额" v-model="depositAmount"></el-input>
      </el-form-item>
      <el-form-item label="是否支持(拼团)零售">
        <span class='price_tag' @click='isSupport = 1' :class='{isYellow: isSupport === 1}'>支持</span>
        <span class='price_tag' @click='isSupport = 0' :class='{isYellow: isSupport === 0}'>不支持</span>
      </el-form-item>
      <el-form-item label="单人(地址)最小购买数量">
        <el-input v-model="supplyData.minimum_purchase_quantity"></el-input>
        <el-select class='unit' placeholder="单位" v-model='supplyData.minimum_purchase_unit'>
           <el-option 
            v-for='(item, index) in numUnit'
            :key='index'
            :label='item.label'
            :value='item.value'>
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="最低成团数量">
        <el-input v-model="supplyData.minimum_groups"></el-input>
        <el-select class='unit'></el-select>
      </el-form-item>
      <el-form-item label="最晚成团时间">
        <el-date-picker
          v-model="supplyData.latest_group_time"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="添加产品图片">
        <p>(不大于9张,第一张为默认产品图)</p>
      </el-form-item>
      <el-form-item label="">
        <div class='imgsPreview'>
          <img width="80px" height='80px' v-for='(item, index) in imgsPreviewList' :key='index' :src=item>
          <label for="productImg">
           <img :src="require('../../assets/upload.png')" width="80px" height="80px" v-show='isShowUpload'>
           <input type="file" ref='imgUpload' id="productImg" style='display:none'>
          </label>
        </div>
      </el-form-item>
      <el-form-item label="添加详情描述">
        <el-input type='textarea' v-model="supplyData.description"></el-input>
      </el-form-item>
      <div class='btns_group'>
        <p >保存商品</p>
        <p @click='publishNow'>立即发布</p>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSupport: 1,
      isShowUpload: true,
      priceIndex: 1,
      classOne: '',
      classTwo: '',
      classThree: '',
      cityList: [],
      customedDeposit: '',
      depositAmount: '',
      imgsPreviewList: [
      ],
      priceUnitList: [
        {
          value: '元',
          label: '元'
        }
      ],
      numUnit: [
        {
          value: 'KG',
          label: 'KG'
        },
        {
          value: '吨',
          label: '吨'
        }
      ],
      plantingUnit: [
        {
          value: '亩',
          label: '亩'
        },
        {
          value: '公顷',
          value: '公顷'
        },
        {
          value: '平方米',
          label: '平方米'
        }
      ],
      category: [

      ],
      category1: [
        {
          value: '',
          label: ''
        }
      ],
      category2: [
        {
          value: '',
          label: ''
        }
      ],
      category3: [
        {
          value: '',
          label: ''
        }
      ],
      supplyData: {
        "available_end_time": '',
        "available_quantity": "",
        "available_quantity_unit": "KG",
        "available_start_time": '',
        "batch_unit": "KG",
        "category_one": '',
        "category_third": '',
        "category_two": '',
        "deposit_amount": '5000',
        "description": "产品简单的描述",
        "is_support_bulk_purchase": true,
        "latest_group_time": '',
        "minimum_batch": "20",
        "minimum_group_unit": "人",
        "minimum_groups": "20",
        "minimum_purchase_quantity": "",
        "minimum_purchase_unit": "KG",
        "picture_or_video": [
          {
            "type": 1,
            "url": "http://image.xingyuekeji.com.cn/b206968ad6f6495f92336f2c6213162e.png"
          }
        ],
        "planting_scale": "500",
        "planting_unit": "亩",
        // "product_id": 1,
        "product_name": "测试商品名称",
        "sales_area": [],
        "supply_price": "200",
        "supply_price_unit": "元"
      }
    }
  },
  created () {
    this.$store.commit('stepChange', true)
    console.log(this.$store.state.isStepTwo)
    this.http.get('/api/product/getAllProductCategory').then(res => {
      console.log(res)
      this.category = res.data.result.map((item, index) => {
        return {
          value: item.category_id,
          label: item.category_name,
          children: item.children.map((item, index) => {
            return {
              value: item.category_id,
              label: item.category_name,
              children: item.children.map((item, index) => {
                return {
                  value: item.category_id,
                  label: item.category_name,
                }
              })
            }
          })
        }
      })
    }),
    this.getCityList()
  },
  mounted () {
   this.imgUpload()
  },
  methods: {
    getCityList () {
     this.http.get('/api/member/option/getAddressOption').then(res => {
        if(res.data.code === 200) {
          this.cityList = res.data.result.map((item, index) => {
            return {
              label: item.name,
              value: item.id,
              children: item.children.map((o, i) => {
                return {
                  label: o.name,
                  value: o.id,
                  children: o.children.map((p, k) => {
                    return {
                      label: p.name,
                      value: p.id
                    }
                  })
                }
              })
            }
          })
        }
      })

    },
    publishNow () {
      // 表单校验
      // if(!this.formValidate()) return
      // 上传数据前格式化处理
      this.supplyData.available_end_time = Date.parse(this.supplyData.available_end_time).toString().substr(0, 10)*1
      this.supplyData.available_start_time = Date.parse(this.supplyData.available_start_time).toString().substr(0, 10)*1
      this.supplyData.latest_group_time = Date.parse(this.supplyData.latest_group_time).toString().substr(0, 10)*1
      this.supplyData.sales_area = this.supplyData.sales_area.join(',')
      this.supplyData.category_one = this.classThree[0]
      this.supplyData.category_two = this.classThree[1]
      this.supplyData.category_third = this.classThree[2]
      this.supplyData.is_support_bulk_purchase = !!this.isSupport
      console.log(this.classThree)
      console.log('发布商品上传数据:', this.supplyData)
      this.http.post('/api/product/releaseSupplyProduct', this.supplyData, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then(res => {
        console.log(res)
      })
    },
    imgUpload () {
       let inpt = this.$refs.imgUpload
       let that = this
       inpt.onchange = function () {
         let file = this.files[0]
         let formData = new FormData()
         formData.append('file', file)
         console.log(formData,file, that.http)
         that.http.post('/api/member/option/uploadFile', formData).then(res => {
           let imgUrl = res.data.result
           that.imgsPreviewList.push(imgUrl)
           that.supplyData.picture_or_video.push({
             type: 1,
             url: imgUrl
           })
             if(that.imgsPreviewList.length >=9 ) {
               console.log(that.imgsPreviewList.length)
               that.isShowUpload = false
             }
         })
       }
    },
    changePrice (price) {
      this.supplyData.deposit_amount = price
    },
    formValidate () {
      // 商品名字验证
      if(this.supplyData.product_name.length > 14) {
        this.$message({
          type: 'warning',
          message: '商品名称不得超过14个字'
        })
        return false
      }
      // 是否选择分类验证
      if(!this.supplyData.classThree) {
        this.$message({
          type: 'warning',
          message: '请选择商品分类'
        })
        return false
      }
      // 预售价格 
      if(!this.supplyData.supply_price) {
        this.$message({
          type: 'warning',
          message: '请输入预售价格'
        })
        return false
      }
      // 可售数量
      if(!this.supplyData.available_quantity) {
        this.$message({
          type: 'warning',
          message: '请输入预售数量'
        })
        return false
      }
      // 可售时间段
      if(!this.supplyData.available_start_time || !this.supplyData.available_start_time) {
        this.$message({
          type: 'warning',
          message: '请选择可售时间段'
        })
        return false
      }
      // 种植/养殖 规模
      if(!this.supplyData.planting_scale) {
        this.$message({
          type: 'warning',
          message: '请填写种植或养殖规模'
        })
        return false
      }
      // 销售区域 
    }
  }
}
</script>

<style lang='less' scoped>
.supply_info {
  padding-top: 56px;
  padding-left: 217px;
  padding-bottom: 61px;
  background-color: #fff;
  border-bottom: 40px solid #F5F5F5;
  .el-form {
    .unit {
      width: 100px;
      margin-left: 20px;
    }
    .price_tag {
      display: inline-block;
      width: 100px;
      height: 40px;
      // background-color: #FFC733;
      text-align: center;
      margin-right: 24px;
      color: #333;
      font-size: 16px;
      border: 1px solid #D6D6D6;
      cursor: pointer;
      &:last-child {
        margin-left: 0px;
      }
    }
    .isYellow {
      background-color: #FFC733;
    }
    .imgsPreview {
      display: flex;
      flex-wrap: wrap;
      width: 300px;
      height: 280px;
      >img {
        margin-right: 20px;
        border: 1px solid #F5F5F5;
      }
    }
  }
  .el-input {
    width: 239px;
  }
  .el-textarea {
    width: 454px;
   
    /deep/.el-textarea__inner {
       height: 240px;

    }
  }
  .btns_group {
    display: flex;
    p {
      width:235px;
      height:55px;
      background:rgba(255,199,51,1);
      border-radius:4px;
      line-height: 55px;
      font-size: 22px;
      color: #333;
      text-align: center;
      cursor: pointer;
    }
    p:first-child {
      margin-left: 120px;
      margin-right: 70px;
    }
  }
}
</style>
