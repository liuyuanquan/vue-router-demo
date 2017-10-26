<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <ul v-for='item in routelist'>
      <li><router-link :to='item.to'>{{ item.label }}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'My Vue-Router Demo',
      routelist: [
        { to: '/demo1', label: '开始' },
        { to: '/demo2', label: '动态路由匹配' },
        { to: '/demo3', label: '嵌套路由' },
        { to: '/demo4', label: '编程式导航' },
        { to: '/demo5', label: '命名路由' },
        { to: '/demo6', label: '命名视图' },
        { to: '/demo7', label: '重定向和别名' },
        { to: '/demo8', label: '向路由组件传递props' },
        { to: '/demo9', label: '导航守卫' },
        { to: '/demo10', label: '路由元信息' },
        { to: '/demo11', label: '过渡动效' },
        { to: '/demo12', label: '数据获取' },
        { to: '/demo12_1', label: '数据获取(2)' },
        { to: '/demo13', label: '滚动行为' },
        { to: '/demo14', label: '路由懒加载' },
      ]
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>

