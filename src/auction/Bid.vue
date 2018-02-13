<template>

    <div class="bidding-inputs">
        <input type="text" class="form-control" 
               placeholder="Usuario" 
               v-model="bid.user">        
        <input type="password" class="form-control" 
               placeholder="Contraseña" 
               v-model="bid.code"> 
        <div clasS="input-group">
            <input type="number" class="form-control" 
                   placeholder="€" 
                   v-model="bid.amount"> 
            <span class="input-group-btn">
                <button type="button"
                        class="btn btn-success btn-input"
                        v-on:click="placeBid"> Pujar!
                </button>
            </span>
        </div>
        <p> {{message}} </p>     

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
                
                this.message = ""
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