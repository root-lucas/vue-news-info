import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	lists:[],
	indexc:0,
  },
  mutations: {
  	addItem (statee,value) {
  		statee.lists.push(value)
  	}
  },
  actions: {

  }
})
