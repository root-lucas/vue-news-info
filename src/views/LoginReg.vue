<template>
	<div>
		<!-- 登录 -->
		<form action="" v-if="!isReg">
			<div>用户名:</div>
			<input type="text" v-model="name">
			<div>密码:</div>
			<input type="password" v-model="password">
			<br>
			<button type="button" @click="login()">登录</button>
			<button type="button" @click="reg()">注册</button>
		</form>
		<!-- 注册 -->
		<form action="" v-else>
			<div>用户名:</div>
			<input type="text" v-model="name">
			<div>密码:</div>
			<input type="password" v-model="password">
			<div>再次输入密码:</div>
			<input type="password" v-model="repeat">
			<br>
			<button type="button" @click="addUser()">确定注册</button>
			<button type="button" @click="cancel()">取消</button>
		</form>
	</div>
</template>

<script>
export default {
	name:'Login',
	data () {
		return {
			isReg:false,
			name:'',
			password:'',
			repeat:'',			
		}
	},
	methods:{
		login () {
			if(localStorage.getItem('name') === this.name && localStorage.getItem('password') === this.password){
				this.name='';
				this.password='';
				this.$router.push('/home/list') 
			}else{
				alert('用户名密码不正确')
			}
		},
		reg () {
			this.isReg = true;
		},
		addUser () {
			if(this.password === this.repeat){
				localStorage.setItem('name',this.name);
				localStorage.setItem('password',this.password);
				this.name='';
				this.password='';
				this.repeat='';
				alert('注册成功')
				this.isReg = false;
			}else{
				alert('俩次密码输入不一致')
			}
		},
		cancel () {
			this.isReg=false;
		},
	}
}
</script>

<style lang="scss" scoped>
	
</style>