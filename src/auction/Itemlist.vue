<template>

    <div>

        <input type="text" 
               class="form-control bidding-search" 
               placeholder="Search..." 
               v-model="search"
        >
        <div class="bidding-headers-container">
            
            <div>
                <button v-on:click="togglePhotos('show')" 
                        v-if="photoState == 'hide'" 
                        type="button" class="btn">
                        <i class="fa fa-th"></i>

                </button>

                <button v-on:click="togglePhotos('hide')" 
                        v-if="photoState == 'show'"
                        type="button" class="btn">
                        <i class="fa fa-bars"></i>
                </button>
                <button v-on:click="queryItems()" 
                        type="button" class="btn">
                        <i class="fa fa-refresh"></i>
                </button>
            </div>


        </div>

        <br>

    	<masonry :cols="2"
                 :gutter="0"
                 class="item-list-container">

            <div v-for="item in filtereditems" class="item-block">
                <Item :info="item" :photoState="photoState"></Item>
            </div>

    	</masonry>
        
    </div>

</template>

<script> 
	import axios from 'axios'
    import Item from './Item.vue'



    export default {
        name: 'Itemlist',

        data() {
          return {
            reloaded: true,
            items: [],
            filtereditems: [],
            search:'',
            photoState: 'show'
          }        
        },

        components: {Item},

		methods: {

            queryItems: function() {
                var vueVars = this;
                var url = 'db/queryItems';

                axios.get(url)
                    .then (function (response) {
                        vueVars.items = response.data;
                        vueVars.filtereditems = response.data;
                    })
                    .catch(function (error) {
                        vueVars.errorMessage = "There has been an Error! Oh no.."
                        console.log(error);
                    })
            },

            togglePhotos: function(str) {
                this.photoState = str;
            }

        },

        watch: {
            search: function() {
                var vueVars = this;
                vueVars.filtereditems = [];
                var name = '';
                var artist = '';
                var match = this.search.toLowerCase();
                var l = vueVars.items.length - 1

                for (var i = 0; i <= l; i++) {

                    name = vueVars.items[i].name.toLowerCase();
                    artist = vueVars.items[i].artist.toLowerCase();

                    if (name.indexOf(match) != -1) {
                        vueVars.filtereditems.push(vueVars.items[i]);
                    } else if (artist.indexOf(match) != -1) {
                        vueVars.filtereditems.push(vueVars.items[i]);
                    }
                };

            }
        },

        beforeMount() {
            this.queryItems()
        }

    }

</script>

<style>

</style>