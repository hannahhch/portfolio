<template>
  <div id="app">
    <div id="nav">
      <nav class="nav-links">
        <div class="nav-links-wrapper">
          <router-link to="/contact" class="nav-links__link">Contact</router-link>
          <router-link to="/">
            <h2 class="nav-title">Hannah Hudson</h2>
          </router-link>
          <router-link to="/about" class="nav-links__link">About</router-link>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>

body {
  margin: 0;
  color: #2d3436;
  background-color: #f2f2f2;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
}

.nav-links {
  background-color: #fff;
  box-shadow: 0 0 20px 0 rgba(0,0,0,.1);
}

.nav-links-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  padding: 15px 0;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
}

.nav-links-wrapper :first-child {
  order: 1;
}

.nav-title {
  margin: 0;
  font-size: 45px;
  font-family: 'Mr Dafoe', cursive;
  text-decoration: none;
  color: #2d3436;
}

.nav-links__link {
  text-decoration: none;
  color: #2d3436;
  font-size: 18px;
}

@media screen and (min-width: 750px) {
  .nav-links-wrapper {
    flex-direction: row;
    text-align: left;
    padding: 0 25px;
  }

  .nav-title {
    margin: 10px;
  }

  .nav-links-wrapper :first-child {
    order: 0;
  }
}
</style>
