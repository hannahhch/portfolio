<template lang="html">
  <section class="portfolio-items">
    <div
      class="portfolio-item"
      v-for="project in projects"
      :style="{
        'background-image': 'url(' + require(`../assets/${project.image}`) + ')'
        }"
    >
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data: function (){
    return {
      projects: []
    }
  },
  mounted() {
     axios.get('../data/projects.json').then(response => {
       this.projects = response.data.projects;
     })
   }
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
</style>
