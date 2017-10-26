<template>
  	<div>
     	User {{ $route.params.id }}
     	<router-view ></router-view>
  	</div> 
</template>

<script>
export default {
  	name: 'User'
}
</script>

<style scoped>
</style>
