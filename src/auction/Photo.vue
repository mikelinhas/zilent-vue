<template>

    <div>
        <div style="max-width: 250px">
            <img :src="imagePath" style="width:100%; height:auto">
        </div>
        
    </div>

</template>

<script> 
	import axios from 'axios'

    export default {
        name: 'Photo',

        props: {
            imageName: {
                type: String,
                default: '0',
                required: true
            }
        },

        data() {
          return {
          }
          
        },

        computed: {
            imagePath: function() {
                return 'photos/' + this.imageName + '.jpg'
            }
        },

        components: {},

		methods: {
		}

    }

</script>

<style>

</style>