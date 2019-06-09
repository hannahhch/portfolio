<template lang="html">
  <div class="hero-section" id="about">
    <div class="hero-section__overlay">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.hero-section {
    background-image: url('../assets/images/profile.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 25px;
    color: var(--white);
    width: 90%;
    margin: 0 auto;
    text-align: center;
}

@media screen and (min-width: 750px) {
  .hero-section {
        padding-top: calc(200 / 600 * 100%);
        height: 1px;
  }

  .hero-section__text{
      font-size: 30px;
  }

}
</style>
