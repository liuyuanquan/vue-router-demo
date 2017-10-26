import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'

import Demo1 from '@/components/demo1/Demo1'
import Demo1_Foo from '@/components/demo1/Foo'
import Demo1_Bar from '@/components/demo1/Bar'

import Demo2 from '@/components/demo2/Demo2'
import Demo2_User from '@/components/demo2/User'

import Demo3 from '@/components/demo3/Demo3'
import Demo3_User from '@/components/demo3/User'
import Demo3_UserHome from '@/components/demo3/UserHome'
import Demo3_UserProfile from '@/components/demo3/UserProfile'
import Demo3_UserPosts from '@/components/demo3/UserPosts'

import Demo4 from '@/components/demo4/Demo4'
import Demo4_User from '@/components/demo4/User'
import Demo4_UserHome from '@/components/demo4/UserHome'
import Demo4_UserProfile from '@/components/demo4/UserProfile'
import Demo4_UserPosts from '@/components/demo4/UserPosts'

import Demo5 from '@/components/demo5/Demo5'
import Demo5_Foo from '@/components/demo5/Foo'
import Demo5_Bar from '@/components/demo5/Bar'

import Demo6 from '@/components/demo6/Demo6'
import Demo6_Foo from '@/components/demo6/Foo'
import Demo6_Bar from '@/components/demo6/Bar'

import Demo7 from '@/components/demo7/Demo7'
import Demo7_Home from '@/components/demo7/Home'
import Demo7_Foo from '@/components/demo7/Foo'
import Demo7_Bar from '@/components/demo7/Bar'
import Demo7_Baz from '@/components/demo7/Baz'
import Demo7_Default from '@/components/demo7/Bar'
import Demo7_WithParams from '@/components/demo7/WithParams'

import Demo8 from '@/components/demo8/Demo8'
import Demo8_Hello from '@/components/demo8/Hello'

import Demo9 from '@/components/demo9/Demo9'
import Demo9_Foo from '@/components/demo9/Foo'
import Demo9_Bar from '@/components/demo9/Bar'

import Demo10 from '@/components/demo10/Demo10'
import Demo10_Foo from '@/components/demo10/Foo'
import Demo10_Bar from '@/components/demo10/Bar'

import Demo11 from '@/components/demo11/Demo11'
import Demo11_Foo from '@/components/demo11/Foo'
import Demo11_Bar from '@/components/demo11/Bar'
import Demo11_Home from '@/components/demo11/Home'
import Demo11_Default from '@/components/demo11/Default'
import Demo11_Parent from '@/components/demo11/Parent'

import Demo12 from '@/components/demo12/Demo12'
import Demo12_1 from '@/components/demo12/Demo12_1'
import Demo12_Home from '@/components/demo12/Home'
import Demo12_Post from '@/components/demo12/Post'
import Demo12_Post2 from '@/components/demo12/Post2'

import Demo13 from '@/components/demo13/Demo13'
import Demo13_Home from '@/components/demo13/Home'
import Demo13_Foo from '@/components/demo13/Foo'
import Demo13_Bar from '@/components/demo13/Bar'

import Demo14 from '@/components/demo14/Demo14'
/*路由懒加载*/
const Demo14_Home = () => import('@/components/demo14/Home')
const Demo14_Foo = () => import('@/components/demo14/Foo')
const Demo14_Bar = () => import(/* webpackChunkName: "/demo14/Demo14_Bar" */ '@/components/demo14/Bar')
const Demo14_Baz = () => import(/* webpackChunkName: "/demo14/Demo14_Bar" */ '@/components/demo14/Baz')

Vue.use(Router)

export default new Router({
  routes: [
		  {
    		path: '/',
    		name: 'Home',
    		component: Home
    	}, 
    	{
    		path: '/demo1',
    		name: 'Demo1',
    		component: Demo1,
    		children: [
    			{
    				path: 'foo',
    				name: 'Demo1_Foo',
    				component: Demo1_Foo
    			},
    			{
    				path: 'bar',
    				name: 'Demo1_Bar',
    				component: Demo1_Bar
    			}
    		]
    	},
      {
        path: '/demo2',
        name: 'Demo2',
        component: Demo2,
        children: [
          {
            path: 'user/:id',
            name: 'Demo2_User',
            component: Demo2_User
          }
        ]
      },
      {
        path: '/demo3',
        name: 'Demo3',
        component: Demo3,
        children: [
          {
            path: 'user/:id',
            component: Demo3_User,
            children: [
              {
                path: '',
                name: 'Demo3_UserHome',
                component: Demo3_UserHome
              },
              {
                path: 'profile',
                name: 'Demo3_UserProfile',
                component: Demo3_UserProfile
              },
              {
                path: 'posts',
                name: 'Demo3_UserPosts',
                component: Demo3_UserPosts
              }
            ]
          }
        ]
      },
      {
        path: '/demo4',
        name: 'Demo4',
        component: Demo4,
        children: [
          {
            path: 'user/:id',
            component: Demo4_User,
            children: [
              {
                path: '',
                name: 'Demo4_UserHome',
                component: Demo4_UserHome
              },
              {
                path: 'profile',
                name: 'Demo4_UserProfile',
                component: Demo4_UserProfile
              },
              {
                path: 'posts',
                name: 'Demo4_UserPosts',
                component: Demo4_UserPosts
              }
            ]
          }
        ]
      },
      {
        path: '/demo5',
        name: 'Demo5',
        component: Demo5,
        children: [
          {
            path: 'foo',
            name: 'Demo5_Foo',
            component: Demo5_Foo
          },
          {
            path: 'bar',
            name: 'Demo5_Bar',
            component: Demo5_Bar
          }
        ]
      },
      {
        path: '/demo6',
        component: Demo6,
        children: [
          {
            path: '',
            name: 'Demo6_Default',
            components: {
              default: Demo6_Foo,
              a: Demo6_Bar,
            }
          },
          {
            path: 'other',
            name: 'Demo6_Other',
            components: {
              default: Demo6_Bar,
              a: Demo6_Foo,
            }
          }
        ]
      },
      {
        path: '/demo7',
        component: Demo7,
        children: [
          {
            path: '/',
            component: Demo7_Home,
            children: [
              {
                path: 'foo',
                name: 'Demo7_Foo',
                component: Demo7_Foo
              },
              {
                path: 'bar',
                name: 'Demo7_Bar',
                component: Demo7_Bar
              },
              {
                path: 'baz',
                name: 'Demo7_Baz',
                component: Demo7_Baz
              },
              {
                path: 'with-params/:id',
                name: 'Demo7_WithParams',
                component: Demo7_WithParams
              },
              {
                path: 'relative-redirect',
                redirect: 'foo'
              }
            ]
          },
          {
            path: 'absolute-redirect',
            redirect: 'bar'
          },
          {
            path: 'dynamic-redirect/:id?',
            redirect: to => {
              const { hash, params, query } = to
              if (query.to === 'foo') {
                return {
                  path: 'foo',
                  query: null
                }
              }
              if (hash === '#baz') {
                return {
                  name: 'Demo7_Baz',
                  hash: ''
                }
              }
              if (params.id) {
                return 'with-params/:id'
              } else {
                return 'bar'
              }
            }
          },
          {
            path: 'named-redirect',
            redirect: {
              name: 'Demo7_Baz'
            },
            alias: 'named-redirect2'
          },
          {
            path: 'redirect-with-params/:id',
            redirect: 'with-params/:id'
          },
          {
            path: '*',
            redirect: '/demo7'
          }
        ]
      },
      {
        path: '/demo8',
        component: Demo8,
        children: [
          {
            path: '',
            component: Demo8_Hello
          },
          {
            path: 'hello/:name',
            component: Demo8_Hello,
            props: true
          },
          {
            path: 'static',
            component: Demo8_Hello,
            props: { name: 'world' }
          },
          {
            path: 'dynamic/:years',
            component: Demo8_Hello,
            props: (route) => {
              return {
                name: (new Date().getFullYear() + parseInt(route.params.years)) + '!'
              }
            }
          },
          {
            path: 'attrs',
            component: Demo8_Hello,
            props: { name: 'attrs' }
          },
        ]
      },
      {
        path: '/demo9',
        name: 'Demo9',
        component: Demo9,
        children: [
          {
            path: 'foo',
            name: 'Demo9_Foo',
            component: Demo9_Foo,
            /*路由独享的守卫*/
            beforeEnter (to, from, next) {
              console.log('route beforeEnter called')
              next()
            }
          },
          {
            path: 'bar',
            name: 'Demo9_Bar',
            component: Demo9_Bar,
            /*路由独享的守卫*/
            beforeEnter (to, from, next) {
              console.log('route beforeEnter called')
              next()
            }
          }
        ]
      },
      {
        path: '/demo10',
        name: 'Demo10',
        component: Demo10,
        children: [
          {
            path: 'foo',
            name: 'Demo10_Foo',
            component: Demo10_Foo,
            meta: {
              requireAuth: true
            }
          },
          {
            path: 'bar',
            name: 'Demo10_Bar',
            component: Demo10_Bar,
            meta: {
              requireAuth: false
            }
          }
        ]
      },
      {
        path: '/demo11',
        component: Demo11,
        children: [
          {
            path: '',
            name: 'Demo11_Home',
            component: Demo11_Home
          },
          {
            path: 'parent',
            component: Demo11_Parent,
            children: [
              { path: '', component: Demo11_Default },
              { path: 'foo', component: Demo11_Foo },
              { path: 'bar', component: Demo11_Bar },
            ]
          }
        ]
      },
      {
        path: '/demo12',
        component: Demo12,
        children: [
          {
            path: '',
            name: 'Demo12_Home',
            component: Demo12_Home
          },
          {
            path: 'post/:id',
            name: 'Demo12_Post',
            component: Demo12_Post
          }
        ]
      },
      {
        path: '/demo12_1',
        component: Demo12_1,
        children: [
          {
            path: '',
            name: 'Demo12_1_Home',
            component: Demo12_Home
          },
          {
            path: 'post/:id',
            name: 'Demo12_1_Post',
            component: Demo12_Post2
          }
        ]
      },
      {
        path: '/demo13',
        component: Demo13,
        children: [
          {
            path: '',
            name: 'Demo13_Home',
            component: Demo13_Home,
            meta: {
              scrollToTop: true
            }
          },
          {
            path: 'foo',
            name: 'Demo13_Foo',
            component: Demo13_Foo
          },
          {
            path: 'bar',
            name: 'Demo13_Bar',
            component: Demo13_Bar,
            meta: {
              scrollToTop: true
            }
          }
        ]
      },
      {
        path: '/demo14',
        component: Demo14,
        children: [
          {
            path: '',
            name: 'Demo14_Home',
            component: Demo14_Home
          },
          {
            path: 'foo',
            name: 'Demo14_Foo',
            component: Demo14_Foo
          },
          {
            path: 'bar',
            name: 'Demo14_Bar',
            component: Demo14_Bar,
            children: [
              {
                path: 'baz',
                name: 'Demo14_Baz',
                component: Demo14_Baz
              }
            ]
          }
        ]
      },
      {
        path: '*',
        name: 'notFound',
        component: NotFound
      }
  	],
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        const position = {}
        if (to.hash) {
          position.selector = to.hash
        }
        if (to.matched.some(m => m.meta.scrollToTop)) {
          position.x = 0
          position.y = 0
        }
        return position
      } 
    },
  	mode: 'history'
})
