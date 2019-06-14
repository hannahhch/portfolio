<template lang="html">
  <div>
    <Hero/>
    <About/>
    <section class="portfolio-section">
      <span class="portfolio-setion--split"></span>
      <div class="portfolio-section__content">
        <h2 class="portfolio-section__title">Current Projects</h2>
        <div class="portfolio-items">
          <router-link
            :to="'/projects/' + project.id"
            class="portfolio-item"
            v-for="project in projects"
            :title="project.alt"
            :style="{
              'background-image': 'url(' + require(`../assets/images/${project.image}`) + ')'
              }"
          >
          </router-link>
        </div>
      </div>


    </section>
  </div>

</template>

<script>
import axios from 'axios';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';

export default {
  data: function (){
    return {
      projects: []
    }
  },
  components: {
    Hero,
    About,
  },
  mounted() {
     axios.get('../data/projects.json').then(response => {
       this.projects = response.data.projects;
     })
   }
}
</script>

<style scoped lang="css">
  .portfolio-section {
    overflow: hidden;
    position: relative;
  }

  .portfolio-setion--split {
    width: 100%;
    position: absolute;
    transform: skewY(-66deg);
    transform-origin: top left;
    height: 100%;
    background: var(--blue-grey--dark);
    bottom: 0
  }

  .portfolio-section__content {
    max-width: 1100px;
    margin: 50px auto;
  }

  .portfolio-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    padding: 0 25px;
  }

  .portfolio-section__title {
    color: var(--white);
    position: relative;
    z-index: 2;
    padding: 0 25px;
  }

  .portfolio-item {
    border-bottom: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    text-decoration: none;
    height: 1px;
    padding-top: calc(100 / 100 * 100%);
    opacity: 1;
    filter: grayscale(100%);
  }

  .portfolio-item:hover {
    border-bottom: none;
    filter:grayscale(0);
    transform: scale(1.1);
  }

  @media screen and (min-width: 750px) {
    .portfolio-items {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .portfolio-setion--split {
      transform: skewY(-48deg);
    }
  }

  @media screen and (min-width: 1150px) {
    .portfolio-items {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding: 0;
    }

    .portfolio-setion--split {
      transform: skewY(-21deg);
    }

    .portfolio-section__title {
      padding: 0;
    }
  }
</style>
