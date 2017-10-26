<template>
  	<div>
     	User {{ $route.params.id }}
  	</div> 
</template>

<script>
export default {
  	name: 'User',
  	watch: {
    	'$route' (to, from) {
      		console.log(from)
    	}
  	}
}
</script>

<style scoped>
</style>
