import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 发布商品步骤条
    isStepTwo: '',
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
    ]
  },
  mutations: {
    stepChange (state, value) {
      console.log('stepChange=',value)
      state.isStepTwo = value
    },
    saveGardenInfo () {
      
    }
  },
  actions: {
  },
  modules: {
  }
})
