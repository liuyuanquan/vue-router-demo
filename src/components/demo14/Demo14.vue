<template>
  <div>
     <h1>路由懒加载</h1>
     <router-link to='/'>回到首页</router-link>
     <p>
        <router-link to='/demo14/'>Go To Home</router-link>
        <router-link to='/demo14/foo'>Go To Foo</router-link>
        <router-link to='/demo14/bar'>Go To Bar</router-link>
        <router-link to='/demo14/bar/baz'>Go To Baz</router-link>
     </p>
     <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'Demo14'
}
</script>
