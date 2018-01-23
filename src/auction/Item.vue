<template>

    <div>

        <h2> {{info.name}} </h2>
        <Photo :imageName="info.name" v-if="photoState == 'show'"></Photo>
        <h3> by {{info.artist}} </h3>

        <div v-if="status === 'waiting'">
            <h4> Highest Bid: <strong>{{info.bids[0].amount}}€</strong> by {{info.bids[0].bidder}}</h4>
            <button type="button" 
                    class="btn btn-success"
                    v-on:click="placeBid">Place Bid
            </button>
        </div>

        <div v-else>
            <Bid :current.sync="info.bids[0]" :name="info.name" :status.sync="status"></Bid>
        </div>

    </div>

</template>

<script> 
    import Photo from './Photo.vue'
    import Bid from './Bid.vue'

    export default {
        name: 'Item',

        props: {
            info: {
                type: Object,
                required: true
            },
            photoState: {
                type: String,
                required: false,
                default: "show"
            }
        },

        data() {
          return {
            status: "waiting"
          }
          
        },

        components: {Photo,Bid},

		methods: {
            placeBid: function() {
                this.status = "bidding";
            },
		}

    }

</script>

<style>

</style>