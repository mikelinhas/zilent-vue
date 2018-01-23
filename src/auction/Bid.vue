<template>

    <div>
        <h4> Highest Bid: <strong>{{current.amount}}€</strong> by {{current.bidder}}</h4>
        <input type="text" class="form-control" 
               placeholder="User name" 
               v-model="bid.user">        
        <input type="password" class="form-control" 
               placeholder="Special code" 
               v-model="bid.code"> 
        <input type="number" class="form-control" 
               placeholder="Amount" 
               v-model="bid.amount"> 
        <br>
        <button type="button" 
                class="btn btn-success"
                v-on:click="placeBid">Complete Bid!
        </button> 
        <button type="button" 
                class="btn btn-danger"
                v-on:click="cancelBid">Cancel
        </button>  
        <br><br>
        <p>{{message}}</p>     
    </div>

</template>

<script> 
	import axios from 'axios'

    export default {
        name: 'Bid',

        props: {
            current: {
                type: Object,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            status: {
                type: String,
                required: true
            }
        },

        data() {
            return {
               bid: {},
               message: ""
            }
        },

        computed: {
        },

        components: {},

        methods: {

            cancelBid: function () {
                this.$emit('update:status', "waiting");
            },
            
            placeBid: function () {
                
                this.message = "sending bid..."
                var vueVars = this;
                var date = new Date();

                axios.post('/db/addBid', {
                    name: vueVars.name,
                    user: vueVars.bid.user,
                    code: vueVars.bid.code,
                    amount: vueVars.bid.amount,
                    date: date
                  })
                  .then(function (response) {
                    vueVars.$emit('update:current', response.data);
                    vueVars.$emit('update:status', "waiting");
                  })
                  .catch(function (error) {
                    vueVars.message= error.response.data.message;
                    if (error.response.data.type == 4) {
                        vueVars.$emit('update:current', error.response.data.currentBid)
                    };
                  });
            }
    	},

        beforeMount() {
            this.money = this.current + 20;
        }

    }

</script>

<style>

</style>