<template>
  <div class="voting">
    <h1>{{ msg }}</h1>
    <p>
    </p>
    <div class="container-lg" id="features">
      <div class="row justify-content-center">
        <div class="col-3 text-center">
          <h3 class="fw-bold">Features</h3>
          <hr class="w-25 mx-auto text-dark" style="height:2px;" />
        </div>
      </div>
     <ol>
       <li> Hi</li>
       <li> I am here </li>
       <li> I am here again </li>
       <li> I am here </li>
       <li> I am here </li>
     </ol>
      <a href="#"> yipee</a>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    hello : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: upper-alpha;
  padding: 0;
}
li {
  display: list-item;
  margin: 0 10px;
}
a {
  color: blue;
}

</style>
