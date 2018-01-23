<template>

    <div class="container">

    	<div class="row">
	    	
	    	<div class="col-sm-8">
	    		<stockdata :reloaded.sync='reloaded'></stockdata>
	    	</div>

            <div class="col-sm-8">
                Hello
            </div>

    	</div>
    </div>

</template>

<script> 
	import axios from 'axios'
    import Item from './Item.vue'
	import stockdata from '../components/database/stock-data.vue'

    export default {
        name: 'Itemlist',

        data() {
          return {
            reloaded: true
          }
          
        },

        components: {Item, stockdata},

		methods: {
		}

    }

</script>

<style>

</style>