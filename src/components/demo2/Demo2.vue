<template>
  <div>
     <h1>动态路由匹配</h1>
     <router-link to='/'>回到首页</router-link>
     <p>
       <router-link to='/demo2/user/foo'>/demo2/user/foo</router-link>
       <router-link to='/demo2/user/bar'>/demo2/user/bar</router-link>
     </p>
     <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'Demo2'
}
</script>

<style scoped>
</style>
