import Vue from 'vue'

import Navbarxs from './components/Navbarxs.vue'
import Introduction from './home/Introduction.vue'


new Vue({
	el: '#app',
	components: {Navbarxs, Introduction},
	data() {
	    return {
	    	query: '',
	        products:[]
	    }
	}
})