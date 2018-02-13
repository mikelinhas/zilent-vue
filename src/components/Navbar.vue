<template>
    <div class="navbar navbar-fixed-top" role="navigation">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#links">
            <i class="fa fa-bars fa-lg"></i>
          </button>
          <a class="navbar-brand" href="">
            <img src="zebra.ico">
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse pull-right" id="links">
          <ul class="nav navbar-nav">
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
            }
        },

        data() {
          return {
            urls: [{'name':'Fundación Livingstone', 'link':'https://fundacionlivingstone.org', 'active':0}],
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