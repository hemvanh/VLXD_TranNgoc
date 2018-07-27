import Vue from 'vue'
import Vuex from 'vuex'

import product from './product'
import supplier from './supplier'
import client from './client'
import user from './user'
import selling from './selling'
import stockin from './stockin'
import stock from './stock'
import stockout from './stockout'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
    supplier,
    client,
    user,
    selling,
    stockin,
    stock,
    stockout,
  },
})

export default store
