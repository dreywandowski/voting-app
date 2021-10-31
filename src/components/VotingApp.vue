<template>
  <div class="voting">
    <h1>{{ msg }}</h1>
    <p>
    </p>

  </div>
</template>

<script>
export default {
  name: 'VotingApp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  template  {
    background-color: #1a122c;
  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: upper-alpha;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
