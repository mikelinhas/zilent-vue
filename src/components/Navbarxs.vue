<template>
    <div class="navbar">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle">
            <i class="fa fa-bars fa-lg"></i>
          </button>

          <a class="navbar-brand" href="">
            <img src="zebra.ico">
          </a>
        </div>

        <div class="navbar-collapse">
          <div v-for="url in urls">
            <a :class="{strong: url.active}"
               :href="url.link">
                  {{url.name}}
            </a>
          </div>
        </div>
      </div>

    </div>
</template>

<script> 
    export default {
        name: 'navbarxs',

        props: {
            activeurl: {
                type: String,
                default: '/',
                required: true
            }
        },

        data() {
          return {
            urls: [{'name':'Home', 'link':'/', 'active':0}, 
                   {'name':'About Us', 'link':'about', 'active':0},
                   {'name':'Auction', 'link':'auction', 'active':0}],
          }
          
        },

        mounted() {
          this.checkActive()
        },

        methods: {
          checkActive() {
            for (var i = this.urls.length - 1; i >= 0; i--) {
              if (this.urls[i].link === this.activeurl) {
                this.urls[i].active = 1}
            }
          }

        }
    }

</script>

<style>

.strong {
    font-weight: bold;
}

</style>