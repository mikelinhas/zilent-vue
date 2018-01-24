<template>

    <div>
        <div class="clock-header"> Live bidding countdown: </div>

        <div class="clock">
            <div class="clock-block">
                <p class="clock-digits">{{days}}</p>
                <p class="clock-text">Days</p>
            </div>

            <div class="clock-block">
                <p class="clock-digits">{{hours | doubledigit}}</p>
                <p class="clock-text">Hrs</p>
            </div>

            <div class="clock-block">
                <p class="clock-digits">{{minutes |doubledigit}}</p>
                <p class="clock-text">Min</p>
            </div>

            <div class="clock-block">
                <p class="clock-digits">{{seconds | doubledigit }}</p>
                <p class="clock-text">Sec</p>
            </div>

        </div>
        
    </div>

</template>

<script> 
    export default {
        name: 'Countdown',

        props: {
            deadline: {
                type: String,
                default: '2018-02-22T20:00:00Z',
                required: true
            }
        },

        data() {
          return {
            date: Math.trunc((new Date(this.deadline)).getTime() / 1000),
            now: Math.trunc((new Date()).getTime() / 1000)
          }
          
        },

        created () {
            setInterval(() => this.now = Math.trunc((new Date()).getTime() / 1000), 1000);
        },

        computed: {

            seconds: function() {
                return (this.date - this.now) % 60;
            },
            minutes: function() {
                return Math.trunc((this.date - this.now) / 60) % 60;
            },
            hours: function() {
                return Math.trunc((this.date - this.now) / 60 / 60) % 24;
            },
            days: function() {
                return Math.trunc((this.date - this.now) / 60 / 60 / 24);
            }
        },

        filters: {
            doubledigit: function (value) {
                if(value.toString().length <= 1) {
                    return "0"+value.toString();
                }
                return value.toString();
            }
        },

        components: {},


    }

</script>

<style>

</style>