<template>
  <div id="app">
    <el-badge class="item" :value="1" :max="9">
    <el-button nativeType="submit" size="medium" @click="addComment">评论</el-button>
    </el-badge>
    <el-badge class="item" :value="0" :max="9" isDot>
    <el-button @click="doSave" :disabled="savaDisabled" size="small" type="primary">发布</el-button>
    </el-badge>
    <el-badge class="item" :value="10" :max="9">
    <el-button size="mini" type="text">前往</el-button>
    </el-badge>
  </div>
</template>

<script>
import ElBadge from '@/components/elBadge'
import ElButton from '@/components/elButton'
export default {
  name: 'app',
  data(){
    return{
      savaDisabled:true
    }
  },
  mounted(){
    setTimeout(() => {
      this.savaDisabled = false
    }, 5000);
  },
  methods:{
    addComment(){
      console.log('添加评论')
    },
    doSave(){
      console.log('发布')
    }
  },
  components:{
    ElButton,
    ElBadge
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
