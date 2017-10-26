<template>
  <div>
     <h1>命名路由</h1>
     <router-link to='/'>回到首页</router-link>
     <p>
       <router-link :to='{name: "Demo5_Foo"}'>Go To Foo</router-link>
       <router-link :to='{name: "Demo5_Bar"}'>Go To Bar</router-link>
     </p>
     <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'Demo5'
}
</script>

<style scoped>
</style>
