import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/search'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    search
  },
  strict: debug
})