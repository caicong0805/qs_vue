<template>
  <div class="container">
      <h1>{{post.title}}</h1>
      <pre>{{post.body}}</pre>
      <p>
          <nuxt-link to="/posts">Back to the list</nuxt-link>
      </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    // 一定要有这个数据，页面才有意义
    // async 和await搭配
    async asyncData({ params }) {
        // return {
        //     post:{
        //         title:'centos',
        //         body:'linux'
        //     }
        // } 这是假数据!

        // 向数据库请求数据
        // await 让代码执行完再往下走
        let {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        return {
            post:data
        }
    }
}
</script>

<style>

</style>
