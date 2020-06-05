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
        <span class='price_tag'>1000</span>
        <span class='price_tag'>5000</span>
        <span class='price_tag'>1000</span>
        <el-input class="unit" placeholder="其他金额"></el-input>
      </el-form-item>
      <el-form-item label="是否支持(拼团)零售">
        <span class='price_tag'>支持</span>
        <span class='price_tag'>不支持</span>
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
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="最晚成团数量">
        <el-select></el-select>
      </el-form-item>
      <el-form-item label="添加产品图片">
        <p>(不大于9张,第一张为默认产品图)</p>
      </el-form-item>
      <el-form-item label="">
        <div class='imgsPreview'>
          <img width="80px" height='80px' v-for='(item, index) in imgsPreviewList' :key='index' :src=item>
          <label for="productImg">
           <img :src="require('../../assets/upload.png')" width="80px" height="80px" v-show='true'>
           <input type="file" ref='imgUpload' id="productImg" style='display:none'>
          </label>
        </div>
        <!-- <label for="productImg">
           <input type="file" id='productImg' style='display:none' ref='imgUpload'>
           <div class='imgsPreview'>
           </div>
        </label> -->
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
      classOne: '',
      classTwo: '',
      classThree: '',
      cityList: [],
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
        "category_one": 1,
        "category_third": 3,
        "category_two": 2,
        "deposit_amount": "",
        "description": "产品简单的描述",
        "garden_id": 1,
        "is_support_bulk_purchase": true,
        "latest_group_time": 1589959406,
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
        "product_id": 1,
        "product_name": "测试商品名称",
        "sales_area": "1,63,75",
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
      console.log(this.supplyData)
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
         })
       }
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
      background-color: #FFC733;
      text-align: center;
      margin-right: 24px;
      color: #333;
      font-size: 16px;
      // border: 1px solid #D6D6D6;
      &:last-child {
        margin-left: 0px;
      }
    }
    .imgsPreview {
      display: flex;
      flex-wrap: wrap;
      width: 300px;
      height: 280px;
      >img {
        margin-right: 20px;
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
