<template lang="html">
  <section class="hero-section">
    <div class="hero-section__overlay">
      <div class="hero-section__text">
        <h1 class="hero-section__title">Hannah Hudson</h1>
        <h2 class="hero-section__subtitle">Frontend Software Engineer</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css">

.hero-section {
    background-image: url('../assets/images/hero.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 80vh;
    margin: 0 auto;
    position: relative;
}

.hero-section__overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .4);
}

.hero-section__text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--white);
}

.hero-section__title {
    font-size: 35px;
    padding-left: 20px;
    margin: 0;
    text-transform: uppercase;
}

.hero-section__subtitle {
  margin: 0;
  font-size: 20px;
  padding-right: 15px;
  text-align: right;
  text-transform: capitalize;
  background-color: var(--blue-grey);
  color: var(--blue-grey--dark);
}

@media screen and (min-width: 750px) {
  .hero-section {
        padding-top: calc(200 / 600 * 100%);
        height: 1px;
  }

  .hero-section__title {
      font-size: 50px;
  }

  .hero-section__subtitle {
    font-size: 30px;
  }
}

@media screen and (min-width: 1000px) {
  .hero-section__title {
      font-size: 75px;
  }
}
</style>
