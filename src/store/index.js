import Vue from 'vue'
import Vuex from 'vuex'
import realName from './realNameIdentify/realNameIdentify.js'
import http from '../api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 商品搜索关键字
    keyword: '',
    // 发布商品步骤条
    isStepTwo: '',
    leftSideTabIndex: '',
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
    goodsList: [],
    myInfo: {},
    isLoading: false,
    productList: {}

  },
  mutations: {
    stepChange (state, value) {
      console.log('stepChange=',value)
      state.isStepTwo = value
    },
    saveGardenInfo (state, value) {
      state.gardens = value
    },
    goodsListChange (state, value) {
      state.goodsList = value
      console.log('vuex---goodsList', value)
    },
    changeLeftSideTabIndex(state, value) {
      console.log('changeLeftSideTabIndex', state, value)
      state.leftSideTabIndex = value
    },
    storeMyInfo (state, value) {
      state.myInfo = value
    },
    startLoading (state) {
      console.log('startLoading')
      state.isLoading = true
    },
    endLoading (state) {
      console.log('loadingEnd')
      state.isLoading = false
    },
    clearData (state) {
      state.myInfo = {}
    },
    getProductList (state, data = {}) {
      let pramas = {
        keyword: data.keyword || '',
        children_category_id: data.children_category_id || ''
      }
      http({
        method: 'get',
        url: '/api/product/getProductList',
        pramas
      }).then(res => {
        console.log('商品列表:', res)
        state.productList = res.data.result
      })
    }

  },
  actions: {
  },
  modules: {
    realName
  }
})
