<template lang="html">
  <div>
    <Hero/>
    <About/>
  </div>
</template>

<script>
import axios from 'axios';
import Hero from '../components/HeroBlock.vue';
import About from '../components/AboutBlock.vue';

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
     });
   }
}
</script>