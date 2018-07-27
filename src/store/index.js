import Vue from 'vue'
import Vuex from 'vuex'

import product from './product'
import supplier from './supplier'
import user from './user'
import selling from './selling'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
    supplier,
    user,
    selling,
  },
})

export default store
