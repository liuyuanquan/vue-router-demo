<template>
  <div>
    <h1>过渡动效</h1>
    <router-link to='/'>回到首页</router-link>
    <p>
      <router-link to='/demo11'>/</router-link>
      <router-link to='/demo11/parent'>/parent</router-link>
      <router-link to='/demo11/parent/foo'>/parent/foo</router-link>
      <router-link to='/demo11/parent/bar'>/parent/bar</router-link>
    </p>
    <transition name='fade' mode='out-in'>
      <router-view class='view'></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Demo11'
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
