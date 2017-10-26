<template>
  <div>
     <h1>开始</h1>
     <router-link to='/'>回到首页</router-link>
     <p>
       <router-link to='/demo1/foo'>Go To Foo</router-link>
       <router-link to='/demo1/bar'>Go To Bar</router-link>
     </p>
     <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'Demo1'
}
</script>

<style scoped>
</style>
