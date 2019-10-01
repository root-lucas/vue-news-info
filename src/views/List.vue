<template>
  <div>
    <ul v-if="!isShow" class="wrapper" ref="main">
      <li v-for="(item, index) in lists"
          :class="['item',{'active': index === current}]"
          @click="choose(index)"
          :key="index">
        <div class="title">{{item.title}}</div>
        <div class="content">{{item.content}}</div>
        <div class="time">{{item.time}}</div>
        <div class="detail" v-show="index === current" @click="showInfo(item)">
        	<p>查看详情...</p>
        </div>
        <a class="delete" @click="handleDelete(index)" v-show="index === current">删除</a>
      </li>
      <li v-show="lists.length == 0" :style="{'text-align': 'center'}">这里空空如也~~去个人中心添加</li>
    </ul>
    <Info :obj="chooseOne"
          @backEvent="()=>{this.isShow = false}"
          @editEvent="editEvent"
          v-else>
    </Info>
  </div>
</template>

<script>
  import store from '@/store.js'
  import Info from '@/views/Info.vue'

  export default {
    name: "List",
    store,
    components: {
      Info,
    },
    data () {
      return {
        isShow: false,
        current: '',
        chooseOne: '',
      }
    },
    mounted () {
      this.$refs.main.style.maxHeight = window.innerHeight - 60 +'px'
    },
    computed: {
      lists () {
        return store.state.lists
      }
    },
    methods: {
    	show(index){
    		alert(index)
    	},
      editEvent (items) {
      	this.$router.push({name:'edit'})
      },
      choose (index) {
        this.current = index;
		this.$store.state.indexc=index;
      },
      showInfo (item) {
        this.chooseOne = item
        this.isShow = true
        this.current = ''
      },
      handleDelete (index) {
      	this.lists.splice(index,1);
      }

    }
  }
</script>

<style scoped lang="scss">
$main-color: #42b983;
.wrapper{
  padding: 10px;
  overflow-y: scroll;
}
.item{
  height:200px;
  overflow:hidden;
  position: relative;
  padding: 5px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  line-height: 18px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
  margin-bottom: 10px;
  &.active{
    border: 1px solid $main-color;
    background: $main-color;
    color: #fff;
  }
  .title{
    font-size: 18px;
    font-weight: 500;
    line-height: 36px;
    border-bottom: 1px solid #dcdcdc;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	overflow: hidden;
  }
  .content{
    font-size: 12px;
    line-height: 22px;
    height:80px;
    padding: 5px 0px 30px 0;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 5;
	overflow: hidden;
	text-overflow:ellipsis;

	word-wrap:break-word;
	word-break:break-all;
  }
  .time{
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size:5px;
    color:#000000;
  }
  .detail{
    position: absolute;
    right: 10px;
    bottom: 30px;
    text-align: right;
    font-size: 1.5vw;
    color:	#FFA500;
    /*color: #42b983;*/
    text-decoration: underline;
    &:hover{background: red}
  }
  .delete{
    position: absolute;
    left: 10px;
    bottom: 30px;
  	color:red;
  	font-size:14px;
  	text-decoration: underline;
  }
}
</style>