<template>
  <main class="main">
    <h2 v-if="currentProject.name" class="project-title">{{ currentProject.name }}</h2>
    <h3 v-if="currentProject.year"><em>{{ currentProject.year }}</em></h3>
    <ul v-if="currentProject.languages">
      <li
        class="project-language"
        v-bind:key="language.id"
        v-for="language in currentProject.languages">{{ language }}</li>
    </ul>

    <section class="project-section" v-if="currentProject.intro">
      <p>{{ currentProject.intro }}</p>
    </section>

    <section class="project-section" v-if="currentProject.description">
      <p>{{ currentProject.description }}</p>
    </section>

    <div class="project-image-wrapper" v-if="currentProject.projectImage">
      <img
         class="project-image"
         :src="require(`../assets/images/${currentProject.projectImage}`)"
         :alt="currentProject.projectAlt"/>
    </div>

    <section class="project-section" v-if="currentProject.wrapup">
      <p>{{ currentProject.wrapup }}</p>
    </section>

    <div class="button-group">
      <a
        class="button button-margin"
        v-if="currentProject.url"
        :href="currentProject.url"
        target="_blank"
        rel="noreferrer">
      Website</a>

      <a
        class="button button-margin"
        v-if="currentProject.gitHub"
        :href="currentProject.gitHub"
        target="_blank"
        rel="noreferrer">
      Github Repo</a>
    </div>

  </main>
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
    max-width: 1200px;
    height: 100%;
    padding: 0 15px;
    margin: 40px 0;
  }

  .project-section {
    display: flex;
    flex-direction: column;
  }

  .button-group {
    margin-top: 25px;
  }

  .button-margin {
    margin: 10px 10px 10px 0;
  }

  .project-language {
    list-style: none;
    background-color: var(--blue-grey--dark);
    color: var(--white);
    display: inline-block;
    border-radius: 3px;
    padding: 5px 10px;
    font-size: 14px;
    text-transform: uppercase;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .project-image {
    display: block;
    max-width: 100%;
    margin: 30px 0;
  }


  @media screen and (min-width: 750px) {
    .main {
        max-width: 1200px;
        padding: 0 50px;
        margin: 40px auto;
    }
  }


</style>
