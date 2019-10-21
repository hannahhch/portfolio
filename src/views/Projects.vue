<template>
  <main class="main">
    <section class="wrapper">
     <h2>My Work</h2>
      <div class="portfolio-items">
          <router-link
            :to="'/projects/' + project.id"
            class="portfolio-item"
            v-for="project in projects"
            v-bind:key="project.id"
            :title="project.alt"
            :style="{
              'background-image': 'url(' + require(`../assets/images/${project.image}`) + ')'
              }"
          >
          </router-link>
        </div>
    </section>
    
  </main>
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

<style scoped lang="css">
  .main{
    background: repeating-linear-gradient(
    45deg,
    var(--gray-background),
    var(--gray-background) 10px,
    var(--blue-grey) 10px,
    var(--blue-grey) 20px
   );
  }

  .portfolio-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
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
    }

     @media screen and (min-width: 1150px) {
    .portfolio-items {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding: 0;
    }
  }
 
</style>
