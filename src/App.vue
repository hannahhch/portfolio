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
import Vue from 'vue'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(vueSmoothScroll)

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
}

body {
    margin: 0;
    color: var(--blue-grey--dark);
    font-family: var(--font-main);
    background-color: rgb(87, 101, 116, .1);

}

h1 {
    text-transform: uppercase;
    font-size: 35px;
    font-weight: 400;
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
  color: var(--dark-purple);
  text-decoration: none;
  text-transform: uppercase;
  transition: all 300ms;
  border-bottom: solid 1px transparent;
  transition: all 300ms linear;
  opacity: .7;
}

a:hover {
  opacity: 1;
  border-bottom: solid 1px var(--blue-grey--dark);
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
