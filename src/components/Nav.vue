<template>
  <nav class="nav-links">
    <div class="nav-links-wrapper">
      <router-link to="/foo">Go to Foo</router-link>

      <a class="nav-links__link">Contact</a>
      <h2 class="nav-title">Hannah Hudson</h2>
      <a href="#" class="nav-links__link">About</a>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .nav-links {
    background-color: #fff;
    box-shadow: 0 0 20px 0 rgba(0,0,0,.1);
  }

  .nav-links-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
  }
  .nav-title {
    margin: 10px;
    font-size: 45px;
    letter-spacing: 5px;
    font-family: 'Mr Dafoe', cursive;
  }

  .nav-links__link {
    text-decoration: none;
    color: #2d3436;
    font-size: 18px;
  }
</style>
