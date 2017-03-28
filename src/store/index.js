/**
 * Created by Deboy on 2016/10/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// modules
import loading from './modules/loading'
// global actions
import actions from './actions'
// global mutations
import mutations from './mutations'
Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  mutations,
  modules: {
    loading
  }
})
