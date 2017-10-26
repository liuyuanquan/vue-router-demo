<template>
  	<div class='post'>
     	<div v-if='error' class='error'>
     		{{ error }}
     	</div>
     	<div v-if='post' class='content'>
     		<h2>{{ post.title }}</h2>
     		<p>{{ post.body }}</p>
     	</div>
  	</div>
</template>

<script>
	const posts = {
		  1: {
	    	id: 1,
	    	title: 'sunt aut facere',
	    	body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
	  	},
	  	2: {
	    	id: 2,
	    	title: 'qui est esse',
	    	body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
	  	}
	}

    let getPost = (id, cb) => {
    	setTimeout(() => {
    		if (posts[id]) {
    			cb(null, posts[id])
    		} else {
    			cb(new Error('post not found'))
    		}
    	}, 500)
    }

	export default {
  		name: 'Post2',
  		data () {
  			return {
	  			post: null,
	  			error: null
	  		}
  		},
      beforeRouteEnter (to, from, next) {
        console.log('Post2Component beforeRouteEnter called')
        getPost(to.params.id, (err, post) => {
          next(vm => vm.setData(err, post))
        })
      },
      beforeRouteUpdate (to, from, next) {
        console.log('Post2Component beforeRouteUpdate called')
        getPost(to.params.id, (err, post) => {
          this.setData(err, post)
          next()
        })
      },
  		methods: {
  			setData (err, post) {
					if (err) {
						this.error = err.toString()
            this.post = null
					} else {
						this.post = post
            this.error = null
					}
        }
  		}
  	}
</script>

<style scoped>
	.error {
  		color: red;
	}
	.content {
	  	transition: all .35s ease;
	  	position: absolute;
	}
	.slide-enter {
	  	opacity: 0;
	  	transform: translate(30px, 0);
	}
	.slide-leave-active {
	  	opacity: 0;
	  	transform: translate(-30px, 0);
	}
</style>
