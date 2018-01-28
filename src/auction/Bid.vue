<template>

    <div class="bidding-inputs">
        <p>{{message}}</p>     
        <input type="text" class="form-control" 
               placeholder="User name" 
               v-model="bid.user">        
        <input type="password" class="form-control" 
               placeholder="Password" 
               v-model="bid.code"> 
        <input type="number" class="form-control" 
               placeholder="Amount" 
               v-model="bid.amount"> 
        <br>
        <div class="pull-right bidding-buttons">
            <button type="button" 
                    class="btn btn-success"
                    v-on:click="placeBid">Bid!
            </button> 
            <button type="button" 
                    class="btn btn-danger"
                    v-on:click="cancelBid">
                    <i class="fa fa-times"></i>
            </button>  
        </div>
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
            bidding: {
                type: Boolean,
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
                this.$emit('update:bidding', false);
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
                    vueVars.$emit('update:bidding', false);
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