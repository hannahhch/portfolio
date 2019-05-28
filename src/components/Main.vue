<template lang="html">
  <section class="portfolio-items">
      <div class="portfolio-item portfolio-item--ng"></div>
      <div class="portfolio-item portfolio-item--fb"></div>
      <div class="portfolio-item portfolio-item--hc"></div>
      <div class="portfolio-item portfolio-item--rourk"></div>
      <div class="portfolio-item portfolio-item--econo"></div>
      <div class="portfolio-item portfolio-item--fbomb"></div>
      <div class="portfolio-item portfolio-item--tour">
        <span>tourify</span>
      </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .portfolio-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 50px;
    max-width: 1000px;
    margin: 50px auto;
  }
  .portfolio-item {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 1px;
    padding-top: calc(100 / 100 * 100%);
  }

  .portfolio-item--ng {
    background-image: url('../assets/ng.png');
  }

  .portfolio-item--fb {
    background-image: url('../assets/fb.jpg');
  }

  .portfolio-item--hc {
    background-image: url('../assets/hc.jpg');
  }

  .portfolio-item--rourk {
    background-image: url('../assets/rourk.png');
  }

  .portfolio-item--econo {
    background-image: url('../assets/econo.jpg');
  }

  .portfolio-item--fbomb {
    background-image: url('../assets/fbomb.jpg');
  }

  .portfolio-item--tour {
    position: relative;
    background-color: #E34008;
    color: white;
  }

  .portfolio-item--tour  > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 60px;
  }
</style>
