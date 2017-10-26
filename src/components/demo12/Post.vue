<template>
  	<div class='post'>
     	<div class='loading' v-if='loading'>
     		Loading......
     	</div>
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
  		name: 'Post',
  		data () {
  			return {
	  			loading: false,
	  			post: null,
	  			error: null
	  		}
  		},
  		created () {
  			this.fetchData()
  		},
  		watch: {
  			'$route': 'fetchData'
  		},
  		methods: {
  			fetchData () {
  				this.error = this.post = null
  				this.loading = true
  				getPost(this.$route.params.id, (err, post) => {
  					this.loading = false
  					if (err) {
  						this.error = err.toString()
  					} else {
  						this.post = post
  					}
  				})
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
