<template>

    <div v-bind:class="{shadow : bidding}">

        <Photo :imageName="info.name" v-if="photoState == 'show'"></Photo>

        <div class="item-topbid">
            <strong>{{info.bids[0].amount}}€</strong> ({{info.bids[0].bidder}})
        </div>
        <p class="item-name"> {{info.name}} </p>
        <p class="item-artist"> {{info.artist}} </p>

        <button type="button" 
                class="btn btn-place-bid"
                @click="bidding = true">
                <i class="fa fa-shopping-cart"></i>
        </button>

        <modal :bidding.sync="bidding" v-if="bidding">
            <div class="item-topbid">
                <strong>{{info.bids[0].amount}}€</strong> ({{info.bids[0].bidder}})
            </div>
            <p class="item-name"> {{info.name}} </p>
            <p class="item-artist"> {{info.artist}} </p>
            <Bid name="html" :current.sync="info.bids[0]" :name="info.name" :bidding.sync="bidding"></Bid>
        </modal>

    </div>

</template>

<script> 
    import Photo from './Photo.vue'
    import Bid from './Bid.vue'
    import Modal from './../components/Modal.vue'

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
            bidding: false
          }
          
        },

        components: {Photo,Bid, Modal},

		methods: {
            placeBid: function() {
                this.bidding = true;
            },
		}

    }

</script>

<style>

</style>