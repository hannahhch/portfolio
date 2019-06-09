<template>
  <div id="app">
    <div id="nav">
      <Nav/>
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>

:root {
    --blue-grey: #c8d6e5;
    --blue-grey--dark: #576574;
    --white: #fff;
    --black: #000;

    --font-main: 'Poppins', sans-serif;

    --small: 480px;
}

body {
    margin: 0;
    color: var(--blue-grey--dark);
    font-family: var(--font-main);
    background-color: rgb(87, 101, 116, .1);

}

h2 {
    text-transform: uppercase;
    font-size: 35px;
    white-space: nowrap;
}

p,
h2,
h3,
h4 {
    font-weight: 300;
}

p {
    font-size: 15px;
}

a {
    text-decoration: none;
    font-weight: 700;
    color: var(--dark-purple);
}

ul {
    padding-left: 0;
}

/* Large Mobile */

@media screen and (min-width: 480px) {

    h2 {
        font-size: 45px;
    }

    p {
        font-size: 20px;
    }
}

/* Tablet */

@media screen and (min-width: 750px) {

    .nav-links__link:hover,
    .footer-link:hover {
        border-bottom: solid 1px var(--blue-grey--dark);
    }


    h2 {
        font-size: 35px;
        text-decoration: none;
    }

    li {
        font-size: 20px;
        max-width: 200px;
    }

    h1 {
        font-size: 160px;
    }
}

/* Desktop */

@media screen and (min-width: 1200px) {
    .portfolio-items {
        max-width: 1200px;
        margin: 30px auto;
    }
}

@media screen and (min-width: 1400px) {

    h1 {
        font-size: 250px;
        margin-left: 10px;
    }

    li {
        font-size: 22px;
    }

    h2 {
        font-size: 60px;
    }


}

</style>
