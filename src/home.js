import Vue from 'vue'

import Navbar from './components/Navbar.vue'
import Introduction from './home/Introduction.vue'


new Vue({
	el: '#app',
	components: {Navbar, Introduction},
	data() {
	    return {
	    	query: '',
	        products:[]
	    }
	}
})