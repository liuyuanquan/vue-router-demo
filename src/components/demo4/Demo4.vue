<template>
  <div>
      <h1>编程式导航</h1>
      <router-link to='/'>回到首页</router-link>
      <p>
        <!-- <router-link to='/demo4/user/foo'>/demo3/user/foo</router-link>
        <router-link to='/demo4/user/foo/profile'>/demo3/user/foo/profile</router-link>
        <router-link to='/demo4/user/foo/posts'>/demo3/user/foo/posts</router-link> -->
        <a href='javascript:;' @click='goUser'>/demo3/user/foo</a>
        <a href='javascript:;' @click='goUserProfile'>/demo3/user/foo</a>
        <a href='javascript:;' @click='goUserPosts'>/demo3/user/foo</a>
     </p>
     <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'Demo4',
  methods: {
    goUser () {
      var self = this
      self.$router.push({
        name: 'Demo4_UserHome',
        params: {
          id: 'foo'
        }
      })
    },
    goUserProfile () {
      var self = this
      self.$router.push({
        name: 'Demo4_UserProfile',
        params: {
          id: 'foo'
        }
      })
    },
    goUserPosts () {
      var self = this
      self.$router.push({
        name: 'Demo4_UserPosts',
        params: {
          id: 'foo'
        }
      })
    }
  }
}
</script>

<style scoped></style>
