<template>
  <div>
     <h1>数据获取</h1>
     <router-link to='/'>回到首页</router-link>
     <p>
       <router-link to='/demo12/'>/</router-link>
       <router-link to='/demo12/post/1'>/post/1</router-link>
       <router-link to='/demo12/post/2'>/post/2</router-link>
       <router-link to='/demo12/post/3'>/post/3</router-link>
     </p>
     <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'Demo12'
}
</script>

<style scoped>
</style>
