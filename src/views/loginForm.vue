<template>
  <form class="form-wrapper">
    <div class="info">欢迎登录</div>
    <div class="form-input">
      <label>登录名:</label>
      <input type="text" v-model="name">
    </div>
    <div class="form-input">
      <label>密码:</label>
      <input type="password" v-model="password">
    </div>
    <div class="btns">
      <button type="button" @click="submit()" class="login">登录</button>
      <button type="button" @click="()=>{this.$router.push('/reg')}">注册</button>
    </div>
    <div>
      <div class="tip">Tip:请先注册后再登录</div>
    </div>
  </form>
</template>

<script>
  export default {
    name: "LoginForm",
    data () {
      return {
        name: '',
        password: ''
      }
    },
    methods: {
      submit () {
        if (localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password){
          this.$router.push({name: 'list'})
        }else{
          alert('登录失败，请检查用户名与密码')
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.info{
  padding: 30px;
  font-size: 18px;
  font-weight: bold;
}
label{
  display:inline-block;
  width:80px;
}
.form-wrapper{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  .btns{
    margin-top:20px;
    .login{
      margin-right:20px;
    }
  }
  .tip{
    margin-top:20px;
    font-size:13px;
  }
}


</style>