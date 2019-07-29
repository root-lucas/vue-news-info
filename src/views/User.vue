<template>
	<div class="user">
		<div>点这里:</div>
		<router-link :to="{name:'add'}">添加新闻</router-link>
	</div>
</template>

<script>
export default {
	name:'User'
}
</script>

<style scoped>
.user{
	position:absolute;
	height:100%;
	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;

}
</style>