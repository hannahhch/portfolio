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

@import './assets/styles/helpers.css';
@import './assets/styles/variables.css';

body {
  background-color: var(--gray-background);
}

body, html {
    margin: 0;
    color: var(--blue-grey--dark);
    font-family: var(--font-main);
    position: relative;
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
  color: var(--blue--accent);
  font-weight: 700;
  text-decoration: none;
  transition: all 300ms;
  border-bottom: solid 2px transparent;
  transition: all 300ms linear;
  opacity: .7;
}

a:hover {
  opacity: 1;
  cursor: pointer;
  border-bottom: solid 2px var(--blue--accent);
}

ul {
  padding-left: 0;
}

.button {
  text-decoration: none;
  background-color: var(--blue-grey);
  color: var(--blue-grey--dark);
  padding: 15px 25px;
  border: solid 2px var(--blue-grey--dark);
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

.wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 25px;
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
