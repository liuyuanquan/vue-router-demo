<template>
  <div>
     <h1>导航守卫</h1>
     <router-link to='/'>回到首页</router-link>
     <p>
       <router-link to='/demo9/foo'>Go To Foo</router-link>
       <router-link to='/demo9/bar'>Go To Bar</router-link>
     </p>
     <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'Demo9'
}
</script>

<style scoped>
</style>
