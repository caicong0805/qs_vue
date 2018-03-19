<template>
  <div class="app">
      <el-rate v-model="rate1">

      </el-rate>
  </div>
</template>
<script>
import ElRate from '@/components/ElRate'
export default {
    data(){
        return{
            rate1:null
        }
    },
  components:{
      ElRate
  }
}
</script>
<style>

</style>
