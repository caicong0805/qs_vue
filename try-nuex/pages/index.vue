<template>
  <div class="container">
    <h1>User Agent</h1>
    <p>{{userAgent}}</p>
    <p>
      <nuxt-link to="/posts">Blog</nuxt-link>
    </p>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  asyncData: ({req}) => ({userAgent: (req ? req.headers['user-agent']:(typeof navigator !== undefined ?
  navigator.userAgent: 'NO user agent(generate)'))
  }),
  components: {
    AppLogo
  }
}
</script>

<style>

</style>
