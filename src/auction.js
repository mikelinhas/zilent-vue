import Vue from 'vue'

import Navbar from './components/Navbar.vue'
import Itemlist from './auction/Itemlist.vue'
import Countdown from './auction/Countdown.vue'


new Vue({
	el: '#app',
	components: {Navbar, Itemlist, Countdown},
	data() {
	    return {
	    }
	}
})