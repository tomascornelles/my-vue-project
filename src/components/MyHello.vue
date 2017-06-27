<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <br>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyHello',
  data () {
    return {
      msg: 'Mi app'
    }
  },
  created: function () {
    this.$http.get('http://api.open-notify.org/iss-now.json').then(function (resource) {
      var datos = resource.body.iss_position
      console.log(datos.latitude)
      console.log(datos.longitude)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/colors.scss";

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: $color1;
  }

</style>
