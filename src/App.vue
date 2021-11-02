<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>

    <div class="container position-relative">
      <div class="row align-items-center">
        <div class="col-md-5 col-lg-6 order-md-1 pt-8"><img class="img-fluid" src="assets/img/illustrations/5836.jpg" alt="" /></div>
        <div class="col-md-7 col-lg-6 text-center text-md-start pt-5 pt-md-9" id="about">
          <h1 class="mb-4 display-3 fw-bold">Simple Voting System <br class="d-block d-lg-none d-xl-block" /></h1>
          <p class="mt-3 mb-4 fs-1">This web application seeks to provide a reliable voting system<br class="d-none d-lg-block" /><br>
            You can sign in, make votes, see your candidate's progress and so on<br><br>
            Its a full package! Check it out and make use of it.</p><a class="btn btn-lg btn-primary rounded-pill hover-top" href="#features" role="button">Learn more</a>
        </div>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -oz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
