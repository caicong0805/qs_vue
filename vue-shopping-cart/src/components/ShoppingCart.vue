<template>
  <div class="cart">
      <h2>Your Cart</h2>
      <p v-show="!products.length">
          <i>Please add some products to cart.</i>
      </p>
      <ul>
          <li v-for="product in products" :key="product.id">
              {{ product.title }} - {{ product.price | currency}} x {{product.quantity}}
          </li>
      </ul>
      <p>Total: {{total | currency }}</p>
  </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex"
export default {
    computed:{
        ...mapGetters({
            products:'cartProducts',
            total:'cartTotalPrice'
        })
    }
}
</script>
<style>

</style>
