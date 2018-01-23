<template>
    <div class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <i class="fa fa-yelp fa-lg" style="color: #dfe9ed"></i>
          </button>
          <a class="navbar-brand" href="">Kapita</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li v-for="url in urls" v-bind:class="{strong: url.active}"><a v-bind:href="url.link">{{url.name}}</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->

      </div>
    </div>
</template>

<script> 
    export default {
        name: 'navbar',

        props: {
            activeurl: {
                type: [String, Array],
                default: '/',
                required: true
            }
        },

        data() {
          return {
            urls: [{'name':'Home', 'link':'/', 'active':0}, 
                   {'name':'About', 'link':'about', 'active':0},
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