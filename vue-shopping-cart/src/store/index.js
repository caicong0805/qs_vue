import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex)
import * as actions from './actions'

export default new Vuex.Store({
    modules:{
        products,
        cart
    },
    actions
})
