<template>

    <div>

        <transition name="modal">
            <div class="modal-mask" @click="cancelBid">
              <div class="modal-wrapper">
                <div class="modal-container" @click.stop>
                    <slot></slot>
                </div>
              </div>
            </div>
        </transition>
        
    </div>

</template>

<script> 
    export default {
        name: 'Modal',

        props: {
            bidding: {
                type: Boolean,
                required: true
            }
        },

        methods: {

            cancelBid: function () {
                this.$emit('update:bidding', false);
            }
        }
    }

</script>

<style>

</style>