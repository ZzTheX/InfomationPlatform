import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 发布商品步骤条
    isStepTwo: '',
  },
  mutations: {
    stepChange (state, value) {
      console.log('stepChange=',value)
      state.isStepTwo = value
    }
  },
  actions: {
  },
  modules: {
  }
})
