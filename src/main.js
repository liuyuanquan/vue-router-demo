// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/*全局前置守卫*/
router.beforeEach((to, from, next) => {
	console.log('global beforeEach called')
	/*next方法一定要调用*/
	next()
})

/*全局解析守卫*/
router.beforeResolve((to, from, next) => {
	console.log('global beforeResolve called')
	/*next方法一定要调用*/
	next()
})

/*全局后置钩子*/
router.afterEach((to, from) => {
	console.log('global afterEach called')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})