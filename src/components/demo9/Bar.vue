<template>
  <div>
     bar
  </div>
</template>

<script>
export default {
  name: 'Bar',
  beforeRouteEnter (to, from, next) {
  	/*在渲染该组件的对应路由被confirm前调用*/
  	/*不能访问this*/
  	console.log('BarComponent beforeRouteEnter called')
  	next(vm => {
  		console.log('BarComponent instance created')
  	})
  },
  beforeRouteUpdate (to, from, next) {
  	/*在当前路由改变，但是该组件被复用时调用*/
  	/*可以访问this*/
  	console.log('BarComponent beforeRouteUpdate called')
  	next()
  },
  beforeRouteLeave (to, from, next) {
  	/*这个离开守卫通常用来禁止用户在还未保存修改前突然离开*/
  	/*可以访问this*/
  	console.log('BarComponent beforeRouteLeave called')
  	next()
  }
}
</script>

<style scoped>
</style>
