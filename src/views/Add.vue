<template>
  <div>
    <div class="form-group">
      <div class="form-item">
        <div class="form-title">标题</div>
        <input class="form-input" type="text" v-model="title">
      </div>
      <div class="form-item">
        <div class="form-title">内容</div>
        <textarea class="form-input" type="text" v-model="content" rows="20"></textarea>
      </div>
    </div>
    <div class="btns">
      <button class="finished" type="button" @click="add()">完成</button>
      <button type="button" @click="()=>{this.$router.back()}">取消</button>
    </div>
  </div>
</template>

<script>
  import store from '@/store.js'
  export default {
    name: "Add",
    store,
    data () {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      add () {
        store.commit('addItem', {
          title: this.title,
          content: this.content,
          time: new Date()
        })
        this.title = ''
        this.content = ''

        this.$router.push({name:'list'})
      }
    }
  }
</script>

<style scoped lang="scss">
.form-group{
  padding: 10px;
  .form-item{
    padding-bottom: 15px;
    .form-title{
      padding: 8px 0;
    }
    .form-input{
      border: 1px solid #dcdcdc;
      border-radius: 6px;
      width: 95%;
      line-height: 18px;
      outline: none;
      padding: 10px 0;
    }
  }

}
  .btns{
	.finished{
		margin-right: 10px;
		margin-left: 10px;
	}
  }
</style>