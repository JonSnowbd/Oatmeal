<style lang="less">
	.bar{
		background:#333;
		.title{
			color:white;
			display:inline;
		}
	}
</style>


<template>
	<div class="bar">
		<div class="container">
			<h1 class="title">{{title}}</h1>
			<input type="text" debounce=300 v-model="title" class="pull-right">
		</div>
	</div>
</template>


<script>
	module.exports = {
		
	}
</script>