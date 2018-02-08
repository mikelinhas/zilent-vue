import Vue from 'vue'

import Navbarxs from './components/Navbarxs.vue'

new Vue({
	el: '#app',
	components: {Navbarxs},
	data() {
	    return {
	    	query: '',
	        products:[]
	    }
	}
})