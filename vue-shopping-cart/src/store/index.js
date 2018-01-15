import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
Vue.use(Vuex)
import * as actions from './actions'

export default new Vuex.Store({
    modules:{
        products
    },
    actions
})
