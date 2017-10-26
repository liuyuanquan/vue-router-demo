<template>
  <div>
     bar
  </div>
</template>

<script>
export default {
  name: 'Bar',
  beforeRouteEnter (to, from, next) {
  	if (!to.meta.requireAuth) {
      alert('你不允许查看')
      next('/')
    } 
    next()
  },
  beforeRouteUpdate (to, from, next) {
  	next()
  },
  beforeRouteLeave (to, from, next) {
  	next()
  }
}
</script>

<style scoped>
</style>
