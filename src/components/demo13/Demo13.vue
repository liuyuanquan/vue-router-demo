<template>
  <div>
     <h1>滚动行为</h1>
     <router-link to='/'>回到首页</router-link>
     <p>
       <router-link to='/demo13'>/</router-link>
       <router-link to='/demo13/foo'>/foo</router-link>
       <router-link to='/demo13/bar'>/bar</router-link>
       <router-link to='/demo13/bar#anchor'>/bar#anchor</router-link>
     </p>
     <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'Demo13'
}
</script>

<style scoped>
</style>
