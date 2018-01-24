import Vue from 'vue'

import Navbar from './components/Navbar.vue'
import Countdown from './components/Countdown.vue'
import Itemlist from './auction/Itemlist.vue'


new Vue({
	el: '#app',
	components: {Navbar, Itemlist, Countdown},
	data() {
	    return {
	    }
	}
})