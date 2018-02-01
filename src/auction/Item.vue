<template>

    <div v-bind:class="{shadow : bidding}">

        <Photo :imageName="info.name" v-if="photoState == 'show'"></Photo>

        <div class="item-info-wrapper">
            <h3 class="item-name"> {{info.name}} </h3>
            <h4 class="item-artist"> {{info.artist}} </h4>
            <div class="item-topbid">
                <strong>{{info.bids[0].amount}}€</strong> ({{info.bids[0].bidder}})
            </div>

            <button type="button" 
                    class="btn btn-custom btn-place-bid"
                    @click="bidding = true">
                    <i class="fa fa-shopping-cart fa-2x"></i>
            </button>
        </div>

        <modal :bidding.sync="bidding" v-if="bidding">
            <h1 class="item-name"> {{info.name}} </h1>
            <h2 class="item-artist"> {{info.artist}} </h2>
            <div class="item-topbid">
                <strong>{{info.bids[0].amount}}€</strong> ({{info.bids[0].bidder}})
            </div>
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