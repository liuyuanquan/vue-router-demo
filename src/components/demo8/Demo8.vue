<template>
  <div>
    <h1>向路由组件传递props</h1>
    <router-link to='/'>回到首页</router-link>
    <p>
      <router-link to='/demo8/'>/</router-link>
      <router-link to='/demo8/hello/you'>/hello/you</router-link>
      <router-link to='/demo8/static'>/static</router-link>
      <router-link to='/demo8/dynamic/1'>/dynamic/1</router-link>
      <router-link to='/demo8/attrs'>/atrrs</router-link>
    </p>
    <router-view foo='123'></router-view>
  </div>
</template>

<script>
export default {
  name: 'Demo8'
}
</script>

<style scoped>
</style>
