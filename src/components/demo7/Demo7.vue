<template>
  <div>
     <h1>重定向和别名</h1>
     <router-link to='/'>回到首页</router-link>
     <p>
       <div><router-link to='/demo7/relative-redirect'>/relative-redirect (redirects to /foo)</router-link></div>
       <div><router-link to='/demo7/relative-redirect?foo=bar'>/relative-redirect?foo=bar (redirects to /foo?foo=bar)</router-link></div>
       <div><router-link to='/demo7/absolute-redirect'>/absolute-redirect (redirects to /bar)</router-link></div>
       <div><router-link to="/demo7/dynamic-redirect">/dynamic-redirect (redirects to /bar)</router-link></div>
       <div><router-link to="/demo7/dynamic-redirect/123">/dynamic-redirect/123 (redirects to /with-params/123)</router-link></div>
       <div><router-link to="/demo7/dynamic-redirect?to=foo">/dynamic-redirect?to=foo (redirects to /foo)</router-link></div>
       <div><router-link to="/demo7/dynamic-redirect#baz">/dynamic-redirect#baz (redirects to /baz)</router-link></div>
       <div><router-link to="/demo7/named-redirect">/named-redirect (redirects to /baz)</router-link></div>
       <div><router-link to="/demo7/named-redirect2">/named-redirect2 (redirects to /baz)</router-link></div>
       <div><router-link to="/demo7/redirect-with-params/123">/redirect-with-params/123 (redirects to /with-params/123)</router-link></div>
       <div><router-link to="/demo7/not-found">/not-found (redirects to /)</router-link></div>
     </p>
     <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'Demo7'
}
</script>

<style scoped>
</style>
