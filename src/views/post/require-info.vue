<template>
    <div class='require_info'>
        <el-form label-width="220px">
      <el-form-item label="选择分类">
        <el-cascader 
            v-model='classify'
            :options='category'></el-cascader>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model='requireData.product_name'></el-input>
      </el-form-item>
      <el-form-item label="采购价格">
        <el-input v-model='requireData.purchase_price'></el-input>
        <el-select class='unit' v-model='requireData.purchase_price_unit'>
          <el-option  
            v-for='(item, index) in priceUnitList'
            :key='index'
            :label='item.label'
            :value='item.value'></el-option>
        </el-select>
      </el-form-item >
      <el-form-item label="采购总数量">
        <el-input  v-model='requireData.purchase_amount'></el-input>
        <el-select class='unit' v-model="requireData.purchase_amount_unit">
          <el-option  
            v-for='(item, index) in amountUnitList'
            :key='index'
            :label='item.label'
            :value='item.value'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="最小起购量">
        <el-input v-model='requireData.every_supply_quantity'></el-input>
        <el-select v-model="requireData.every_supply_quantity_unit" class='unit'>
          <el-option  
            v-for='(item, index) in amountUnitList'
            :key='index'
            :label='item.label'
            :value='item.value'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="采购时间段">
        <el-date-picker
          v-model="requireData.purchase_start_time"
          type="datetime"
          placeholder="开始时间">
        </el-date-picker>
        -
        <el-date-picker
          v-model="requireData.purchase_end_time"
          type="datetime"
          placeholder="结束时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="采购城市">
        <el-cascader :options='cityList' v-model='requireData.sales_area'></el-cascader>
      </el-form-item>
      <el-form-item label="期望定金">
        <!-- <el-input v-model="requireData.deposit_amount"></el-input> -->
        <div :class="{deposit_tag: true, active: requireData.deposit_amount === '1000'}" @click='chooseDeposit("1000")'>1000</div>
        <div :class="{deposit_tag: true, active: requireData.deposit_amount === '5000'}" @click='chooseDeposit("5000")'>5000</div>
        <div :class="{deposit_tag: true, active: requireData.deposit_amount === '10000'}" @click='chooseDeposit("10000")'>10000</div>
        <input type="text" placeholder="其他金额" v-model="requireData.deposit_amount">
      </el-form-item>
      <el-form-item label="是否接受多家供货商一起供货">
       <div @click='chooseMultipleSupply(true)' :class="{support_tag: true, active: isSupport}">支持</div>
       <div @click='chooseMultipleSupply(false)' :class="{support_tag: true, active: !isSupport}">不支持</div>
      </el-form-item>
      <el-form-item label="每家供货商供货数量需大于">
        <el-input v-model="requireData.minimum_purchase_quantity"></el-input>
        <el-select class="unit" v-model="requireData.minimum_purchase_quantity_unit">
          <el-option 
            v-for='(item, index) in singlePurchaseAmountUnit'
            :key='index'
            :label='item.label'
            :value='item.value'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="启动采购的最低供货数量">
        <el-input v-model="requireData.min_supply_quantity"></el-input>
        <el-select class='unit' v-model="requireData.minimum_groups">
          <el-option 
            v-for='(item, index) in minSupplyQuantityUnit'
            :key='index'
            :label='item.label'
            :value='item.value'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="零采的最晚等待时间">
        <el-date-picker
          v-model="requireData.latest_wait_time"
          type="datetime"
          placeholder="请选择">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="添加图片或视频 ">
        <p class='add_pic_hint'>(不大于9张,第一张为默认产品图)</p>
      </el-form-item>
      <el-form-item label=''>
        <div class='imgsPreview'>
          <img width="80px" height='80px' v-for='(item, index) in imgsPreviewList' :key='index' :src=item>
          <label for="requireProductImg">
           <img src='../../assets/upload.png' width="80px" height="80px" v-show='isShowUpload'>
           <input type="file" ref='requireProductImg' id="requireProductImg" style='display:none'>
          </label>
        </div>
      </el-form-item>
      <el-form-item label="添加描述详情">
        <el-input type='textarea' v-model="requireData.description"></el-input>
      </el-form-item>
      <div class='btns_group'>
          <p @click='saveMyRequire'>保存商品</p>
          <p @click="postRequireInfo">立即发布</p>
      </div>
    </el-form>
    </div>
</template>

<script>
export default{
  data () {
    return {
      isShowUpload: true,
      currentDeposit: '5000',
      category: [],
      classify: '',
      isSupport: true,
      cityList: [],
      imgsPreviewList: [],
      priceUnitList: [
         {
          value: '元',
          label: '元'
        }
      ],
      amountUnitList: [
        {
          value: 'KG',
          label: 'KG'
        },
        {
          value: '吨',
          label: '吨'
        }
      ],
      singlePurchaseAmountUnit: [
        {
          value: 'KG',
          label: 'KG'
        },
        {
          value: '吨',
          label: '吨'
        }
      ],
      minSupplyQuantityUnit: [
        {
          value: 'KG',
          label: 'KG'
        },
        {
          value: '吨',
          label: '吨'
        }
      ],
      requireData: {
        "available_inventory": "",
        "category_one": 1,
        "category_third": 3,
        "category_two": 2,
        "deposit_amount": "",
        "description": "",
        "every_supply_quantity": "",
        "every_supply_quantity_unit": "",
        "is_support_multiple_supply": true,
        "latest_wait_time": "",
        "min_supply_quantity": "",
        "min_supply_quantity_unit": "",
        "picture_or_video": [
          {
            "type": 1,
            "url": "http://image.xingyuekeji.com.cn/b206968ad6f6495f92336f2c6213162e.png"
          }
        ],
        "product_id": 1,
        "product_name": "",
        "purchase_amount": "",
        "purchase_amount_unit": "",
        "purchase_end_time": "",
        "purchase_price": "",
        "purchase_price_unit": "",
        "purchase_start_time": "",
        "sales_area": "",
        "single_purchase_amount": "",
        "single_purchase_amount_unit": "",
        "sold_quantity": "",
        "minimum_groups": "",
        "minimum_purchase_quantity": "",
        "minimum_purchase_quantity_unit": "",
      }
    }
  },
  created () {
    this.getClassifyList()
    this.$store.commit('stepChange', true)
    this.getCityList()
  },
  mounted () {
    this.imgUpload()
  },
  methods: {
    formatDate (date) {
      return Date.parse(date).toString().substr(0, 10)*1
    },
    getClassifyList () {
      this.http.get('/api/product/getAllProductCategory').then(res => {
        console.log('分类数据列表', res)
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
      })
    },
    postRequireInfo () {
      this.requireData.category_one = this.classify[0]
      this.requireData.category_two = this.classify[1]
      this.requireData.category_third = this.classify[2]
      this.requireData.latest_wait_time = this.formatDate(this.requireData.latest_wait_time)
      this.requireData.purchase_end_time = this.formatDate(this.requireData.purchase_end_time)
      this.requireData.purchase_start_time = this.formatDate(this.requireData.purchase_start_time)
      this.requireData.sales_area = Array.isArray(this.requireData.sales_area) ? this.requireData.sales_area.join(',') : ''
      console.log(this.requireData)
      this.http.post('/api/product/releaseRequirementProduct', this.requireData, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then(res => {
        if(res.data.code === 200) {
          this.$message({
            type: 'warning',
            message: res.data.msg
          })
          this.$router.push({
            name: 'myPost'
          })
        } 
        console.log('发布需求信息返回信息:', res)
      })
    },
    chooseDeposit (value) {
      this.currentDeposit = value
      this.requireData.deposit_amount = value
    },
    getCityList () {
      this.http.get('/api/member/option/getAddressOption').then(res => {
        console.log("citylist:", res)
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
    imgUpload () {
       let inpt = this.$refs.requireProductImg
       let that = this
       inpt.onchange = function () {
         console.log('onchange事件执行')
         let file = this.files[0]
         let formData = new FormData()
         formData.append('file', file)
         console.log(formData,file, that.http)
         that.http.post('/api/member/option/uploadFile', formData).then(res => {
           let imgUrl = res.data.result
           that.imgsPreviewList.push(imgUrl)
           that.requireData.picture_or_video.push({
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
    chooseMultipleSupply (value) {
      this.isSupport = value
      this.requireData.is_support_multiple_supply = value
    },
    saveMyRequire () {
      this.http.post('/api/product/updateRequirementProduct', this.requireData, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then(res => {
        console.log('编辑或保存需求信息返回数据:', res)
      })
    }
  }
}
</script>

<style lang='less'>
.require_info {
  padding-top: 56px;
  padding-left: 217px;
  padding-bottom: 61px;
  background-color: #fff;
  border-bottom: 40px solid #F5F5F5;
  .el-form {
    .unit {
      width: 100px;
      margin-left: 16px;
      .el-input {
        width: 100px;
      }
    }
    .deposit_tag {
      width: 96px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      display: inline-block;
      border: 1px solid #D6D6D6;
      margin-right: 24px;
      cursor: pointer;
      &.active{
        border: 1px solid #fff;
        background-color: #FFC733;
      }
      &+input {
        width: 96px;
        height: 40px;
        border: 1px solid #D6D6D6;
        padding-left: 5px;
      }
    }
    .support_tag {
      display: inline-block;
      margin-right: 20px;
      width: 100px;
      height: 40px;
      background-color: #fff;
      text-align: center;
      border: 1px solid #D6D6D6;
      cursor: pointer;
      &.active {
        background-color: #FFC733;
        border: 1px solid #fff;
      }
    }
    .add_pic_hint {
      color: #999;
    }
    .imgsPreview {
      display: flex;
      flex-wrap: wrap;
      width: 300px;
      // background-color: cyan;
      > img {
        margin-right: 20px;
      }
    }
  }
  .el-input {
    width: 239px;
  }
  .el-textarea__inner {
      width: 454px;
      height: 249px;
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