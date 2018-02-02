<template>

    <div v-bind:class="{shadow : bidding}">

        <Photo :imageName="info.name" v-if="photoState == 'show'"></Photo>

        <div class="item-info-wrapper">
            <h3 class="item-name"> {{info.name}} </h3>
            <h4 class="item-artist"> {{info.artist}} </h4>
            <transition name="slide-fade" mode="out-in">
                <div class="item-topbid" :key="info.bids[0].amount">
                    <strong>{{info.bids[0].amount}}€</strong> ({{info.bids[0].bidder}})
                </div>
            </transition>

            <button type="button" 
                    class="btn btn-custom btn-place-bid"
                    @click="bidding = true">
                    <i class="fa fa-shopping-cart fa-2x"></i>
            </button>
        </div>

        <modal :bidding.sync="bidding" v-if="bidding">
            <h1 class="item-name"> {{info.name}} </h1>
            <h2 class="item-artist"> {{info.artist}} </h2>
            <transition name="slide-fade" mode="out-in">
                <div class="item-topbid" :key="info.bids[0].amount">
                    <strong>{{info.bids[0].amount}}€</strong> ({{info.bids[0].bidder}})
                </div>
            </transition>
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