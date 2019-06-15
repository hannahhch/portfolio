<template>
  <div class="main">
    <h2 class="project-title">{{ currentProject.name }}</h2>
    <!-- TODO: make these images an array in the json and loop over -->
    <div class="project-images-wrapper">
      <div class="project-image-wrapper">
        <img
          class="image-mobile"
          :src="require(`../assets/images/${currentProject.projectImageOne}`)"
          alt=""/>
      </div>

      <div class="project-image-wrapper">
        <img
          class="image-mobile"
          :src="require(`../assets/images/${currentProject.projectImageTwo}`)"
          alt=""/>
      </div>

      <div class="project-image-wrapper">
        <img
          class="image-mobile"
          :src="require(`../assets/images/${currentProject.projectImageThree}`)"
          alt=""/>
      </div>

    </div>
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
  .project-images-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    flex-direction: column;
    padding: 25px;
  }

  .project-image-wrapper {
    margin-bottom: 25px;
  }
  .main {
    max-width: 1100px;
    margin: 50px auto;
  }

  .image-mobile {
    display: block;
    max-width: 100%;
  }

  @media screen and (min-width: 750px) {
    .main {
      padding: 0 25px;
    }

    .project-images-wrapper {
      flex-direction: row;
    }
  }


</style>
