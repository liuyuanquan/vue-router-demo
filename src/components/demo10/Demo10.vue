<template>
  <div>
     <h1>路由元信息</h1>
     <router-link to='/'>回到首页</router-link>
     <p>
       <router-link to='/demo10/foo'>Go To Foo</router-link>
       <router-link to='/demo10/bar'>Go To Bar</router-link>
     </p>
     <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'Demo10'
}
</script>

<style scoped>
</style>
