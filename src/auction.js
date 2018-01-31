import Vue from 'vue'

import Navbarxs from './components/Navbarxs.vue'
import Countdown from './components/Countdown.vue'
import Itemlist from './auction/Itemlist.vue'
import VueMasonry from 'vue-masonry-css'

Vue.use(VueMasonry)

new Vue({
	el: '#app',
	components: {Navbarxs, Itemlist, Countdown},
	data() {
	    return {
	    }
	}
})