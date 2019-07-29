<template>
  <div class="wrapper">
    <div class="title">{{obj.title}}</div>
    <div class="content">
      {{obj.content}}
    </div>
    <div class="edit" @click="edit()">编辑</div>
    <div class="back" @click="back()">返回</div>
  </div>
</template>

<script>
 import Edit from '@/views/Edit.vue'
  export default {
    name: "Info",
    components:{Edit},
    props: ['obj'],
    data () {
      return {
      	item:this.obj,
      }
    },
    methods: {
      back () {
        this.$emit('backEvent')
      },
      edit () {
      	let arr=this.item;
      	this.$emit('editEvent',arr)
      },
    }
  }
</script>

<style scoped lang="scss">
$main-color: #42b983;
.wrapper{
  padding: 10px;
}
.title{
  padding-bottom: 5px;
  border-bottom: 1px solid #dcdcdc;
}
.content{
  padding: 10px 10px 60px 10px;
  line-height: 22px;
}
.edit{
	display:inline-block;
	width: 40vw;
  	height: 40px;
  	text-align: center;
	float:left;
	position:relative;
	bottom:50px;
	background: $main-color;
	line-height: 40px;
	border-radius: 6px;
	color: #fff;
}
.back{
  display: inline-block;
  width: 40vw;
  height: 40px;
  position:relative;
  bottom:50px;
  line-height: 40px;
  border-radius: 6px;
  background: $main-color;
  float:right;
  color: #fff;
  text-align: center;
}
</style>