<template>
  <div>
    <div class="form-group">
      <div class="form-item">
        <div class="form-title">编辑标题:</div>
        <input class="form-input" type="text" v-model:value="title">
      </div>
      <div class="form-item">
        <div class="form-title">编辑内容:</div>
        <textarea class="form-input" type="text" v-model:value="content" rows="20"></textarea>
      </div>
    </div>
    <div class="btns">
      <button class="finished" type="button" @click="repload()">重新提交</button>
      <button type="button" @click="()=>{this.$router.back()}">取消编辑</button>
    </div>
  </div>
</template>

<script>
  import store from '@/store.js'
  export default {
    name: "Edit",
    props:['indexs'],
    store,
    data () {
      return {
        title: store.state.lists[this.$store.state.indexc].title,
        content: store.state.lists[this.$store.state.indexc].content
      }
    },
    methods: {
      repload () {
        // store.commit('addItem', {
        //   title: this.title,
        //   content: this.content,
        //   time: new Date()
        // })
        store.state.lists[this.$store.state.indexc].title=this.title;
        store.state.lists[this.$store.state.indexc].content=this.content;
        store.state.lists[this.$store.state.indexc].time=new Date();

        this.$router.push({name:'list'})
       },
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