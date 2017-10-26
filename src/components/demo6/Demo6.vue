<template>
  <div>
     <h1>命名视图</h1>
     <router-link to='/'>回到首页</router-link>
     <p>
       <router-link to='/demo6/'>/</router-link>
       <router-link to='/demo6/other'>/other</router-link>
     </p>
     <router-view name='default'></router-view>
     <router-view name='a'></router-view>
  </div>
</template>

<script>
export default {
  name: 'Demo6'
}
</script>

<style scoped>
</style>
