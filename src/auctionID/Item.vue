<template>

    <div class="container">

    	<div class="row">
	    	
	    	<div class="col-sm-8">
	    		<stockdata :reloaded.sync='reloaded'></stockdata>
	    	</div>

    	</div>
    </div>

</template>

<script> 
	import axios from 'axios'
	import stockdata from '../components/database/stock-data.vue'

    export default {
        name: 'Item',

        data() {
          return {
            reloaded: true
          }
          
        },

        components: {stockdata},

		methods: {
		}

    }

</script>

<style>

</style>