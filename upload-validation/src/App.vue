<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    <a class="navbar-brand" href="#">Your Moon</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>



    <div class="collapse navbar-collapse" id="navbarSupportedContent">


      <ul class="navbar-nav">

        <li class="nav-item">
          <a class="nav-link"><RouterLink to="/">Home</RouterLink></a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link"><RouterLink to="/about">About</RouterLink></a>
        </li>

        <li class="nav-item">
          <a class="nav-link"><RouterLink to="/upload">Upload Images</RouterLink></a>
        </li>

      </ul>



    </div>
  </nav>
  
</template>

<style scoped>


/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */


nav{

display: flex;
align-items: center;
justify-content: space-between;
padding-top: 5px;
padding-left: 3%; 
padding-right: 3%;
background-color: transparent;

position: relative;
z-index: 7;


font-size: 14px;


}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: .3s;
}

nav ul li a:hover {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
 

}


</style>


