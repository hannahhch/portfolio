<template>
  <div id="app">
    <span class="overlay" v-bind:class="{ shown: isModalShown }"></span>
    <div id="nav">
      <Nav v-on:clicked="determineBackgroundBlur" v-bind:isModalShown="isModalShown"/>
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
  data() {
    return {
      isModalShown: false
    }
  },
  components: {
    Nav,
    Footer
  },
  methods: {
    determineBackgroundBlur () {
      this.isModalShown = !this.isModalShown;
    },
  }
}
</script>

<style>

:root {
    --blue-grey: #c8d6e5;
    --blue-grey--dark: #576574;
    --blue--accent: #1289A7;
    --white: #fff;
    --black: #000;
    --red: #ED4C67;

    --overlay: rgba(0, 0, 0, .7);

    --font-main: 'Poppins', sans-serif;

    --font-thin: 100;
    --font-light-normal: 300;
    --font-normal: 400;

    --large-moble: 480px;
}

body {
    margin: 0;
    color: var(--blue-grey--dark);
    font-family: var(--font-main);
    background-color: rgb(87, 101, 116, .1);
    position: relative;
    padding-bottom: 6rem;
    height: 100%;
}

html {
  height: 100%;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

main {
  flex: 1 0 auto;
}
.overlay.shown {
  background: var(--overlay);
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 3;
}

h1 {
    text-transform: uppercase;
    font-size: 35px;
    font-weight: var(--font-normal);
    margin: 0 0 20px 0;
}

p,
h2,
h3,
h4,
h5,
h6 {
    font-weight: var(--font-light-normal);
    margin: 0 0 10px 0;
}


p {
    font-size: 15px;
}

a {
  color: var(--dark-purple);
  text-decoration: none;
  text-transform: uppercase;
  transition: all 300ms;
  border-bottom: solid 2px transparent;
  transition: all 300ms linear;
  opacity: .7;
}

a:hover {
  opacity: 1;
  cursor: pointer;
  border-bottom: solid 2px var(--blue--accent);
  color: var(--blue--accent);
}

ul {
  padding-left: 0;
}

.button {
  text-decoration: none;
  background-color: var(--blue-grey);
  color: var(--blue-grey--dark);
  padding: 15px 25px;
  border: solid 2px transparent;
  font-size: 20px;
  margin-top: 20px;
  transition: all 300ms;
  display: inline-block;
  max-width: 250px;
  border-radius: 4px;
  text-transform: uppercase;
}

.button:hover {
  border-color: var(--blue-grey--dark);
  color: var(--blue-grey--dark);
  cursor: pointer;
}

/* Large Mobile */

@media screen and (min-width: 480px) {

    p {
        font-size: 18px;
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
