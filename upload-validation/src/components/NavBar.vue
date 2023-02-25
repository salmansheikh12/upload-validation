<template>

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
          <a class="nav-link"><RouterLink to="/upload">Upload Images</RouterLink></a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link"><RouterLink to="/about">About</RouterLink></a>
        </li>



      </ul>



    </div>
  </nav>
  
</template>

<style scoped>
    nav{

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
    padding-left: 3%; 
    padding-right: 3%;
    background-color: transparent;


    z-index: 1;
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


