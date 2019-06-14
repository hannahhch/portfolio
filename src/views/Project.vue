<template>
  <div class="main">
    <h2 class="project-title">{{ currentProject.name }}</h2>
    <a
      class="button"
      v-if="currentProject.url"
      :href="currentProject.url"
      target="_blank"
      rel="noreferrer">
    See the Site</a>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    data: function () {
      return {
        currentId: this.$route.params.id,
        currentProject: {},
      }
    },
    mounted() {
      axios.get('../data/projects.json').then(response => {
        let projects = response.data.projects;
        this.currentProject = projects.find(project => project.id === this.currentId);
      })
    }
  }
</script>

<style scoped lang="css">
  .main {
    max-width: 1100px;
    margin: 50px auto;
    padding: 0 25px;
  }


</style>
