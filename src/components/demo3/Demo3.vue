<template>
  <div>
     <h1>嵌套路由</h1>
     <router-link to='/'>回到首页</router-link>
     <p>
       <router-link to='/demo3/user/foo'>/demo3/user/foo</router-link>
       <router-link to='/demo3/user/foo/profile'>/demo3/user/foo/profile</router-link>
       <router-link to='/demo3/user/foo/posts'>/demo3/user/foo/posts</router-link>
     </p>
     <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'Demo3'
}
</script>

<style scoped>
</style>
