<template>
  <div>
     foo
  </div>
</template>

<script>
export default {
  name: 'Foo',
  beforeRouteEnter (to, from, next) {
  	/*在渲染该组件的对应路由被confirm前调用*/
  	/*不能访问this*/
  	console.log('FooComponent beforeRouteEnter called')
  	next(vm => {
  		console.log('FooComponent instance created')
  	})
  },
  beforeRouteUpdate (to, from, next) {
  	/*在当前路由改变，但是该组件被复用时调用*/
  	/*可以访问this*/
  	console.log('FooComponent beforeRouteUpdate called')
  	next()
  },
  beforeRouteLeave (to, from, next) {
  	/*这个离开守卫通常用来禁止用户在还未保存修改前突然离开*/
  	/*可以访问this*/
  	console.log('FooComponent beforeRouteLeave called')
  	next()
  }
}
</script>

<style scoped>
</style>
