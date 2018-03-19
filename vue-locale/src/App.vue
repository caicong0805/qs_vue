<template>
  <div id="app">
    <lang-select class="set-language">

    </lang-select>
    <h3>{{$t('login.title')}}</h3>
    <router-view/>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect/index'
export default {
  name: 'App',
  components:{
    LangSelect
  },
  mounted(){
      this.$http.post('/login/login',{
        username:'admin',
        password:'123456'
      }).then(response => {
        console.log(response)
      })
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
