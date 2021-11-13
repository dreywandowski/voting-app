<template>

  <div class="voting" align="center">
   <!-- <h4>{{ msg }}</h4>
    <h4> {{ hello}}</h4>-->
      <br><br>
<br><br>    <img class="img-fluid" style="border-radius: 20px" src="../assets/assets/img/illustrations/1_1.png" alt="">
            <br><br>
      <h2> <u>Online Voting App </u></h2><br><br>
          <h3>Hello and welcome to an app that allows you vote for your favorite
              SUG president of our institution.... <br>
          Click the "Get Started" Button to reveal the candidates and their profiles.. simple as that!!</h3>
<br>
            <input type="button"  style="background-color: mintcream; width: 150px; height: 50px;
              border: solid; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);"
                   @click="helloRef" value="Get Started" ref="mine">
        </div>

      <br><br>
</template>

<script>
export default {
  props: {
    msg: String,
    hello: String
  },
  methods: {
    helloRef() {
      alert(this.$refs.mine)
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->


<style>
@import "../assets/assets/css/theme.css";
</style>


<style>
    button{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }
</style>
