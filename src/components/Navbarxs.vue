<template>
    <div class="navbar navbar-fixed-top" role="navigation">
      <div class="container">

        <div class="navbar-header">
          <a class="navbar-brand" href="">
            <img src="zebra.ico">
          </a>
          <div class="navbar-title">
            <span>{{title}}</span>
          </div>
        </div>

      </div>
    </div>
</template>

<script> 
    export default {
        name: 'navbarxs',

        props: {
            title: {
                type: [String, Array],
                default: '/',
                required: true
            }
        }
    }

</script>

<style>

</style>