import Vue from 'vue'

import Navbar from './components/Navbar.vue'
import Countdown from './components/Countdown.vue'
import Itemlist from './auction/Itemlist.vue'

import VueSocketio from 'vue-socket.io'
import VueMasonry from 'vue-masonry-css'

Vue.use(VueMasonry)
Vue.use(VueSocketio, 'http://localhost:3000')

new Vue({
	el: '#app',
	components: {Navbar, Itemlist, Countdown},
	data() {
	    return {
	    }
	}
})