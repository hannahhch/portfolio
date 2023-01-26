<template lang="html">
  <main class="resume-page">
    <div class="resume-header__wrapper">
      <div class="resume-header">
        <div>
          <h1 class="resume-header--title">{{ resume.title }}</h1>
          <h2 class="resume-header--subtitle">{{ resume.subtitle }}</h2>
        </div>
        <img class="resume-image" src="../assets/images/profile.jpg" alt="profile of Hannah Hudson">
      </div>
    </div>

    <div class="wrapper">
      <h2 class="section-title">
        Professional Experience
      </h2>
      <section 
        class="section" 
        v-bind:key="exp.id"
        v-for="exp in resume.experience">
        <h3 class="info-title">
          <div> <em><span class="font--bold">{{ exp.role }}</span> | <a :href="exp.company.link" target="_blank" rel="noreferrer">{{ exp.company.name }}</a> | {{ exp.location }}</em></div>
        </h3>
        <h4 class="blue--accent">{{ exp.dates }}</h4>
        <ul v-if="exp.duties" class="experience-list">
          <li 
            v-for="(duty, index) in exp.duties"
            v-bind:key="`${duty}-${index}`"
          >
            {{ duty }}
          </li>
        </ul>
        <ul v-if="exp.skills" class="skills-list">
          <li 
            v-for="(skill, index) in exp.skills"
            v-bind:key="`${skill}-${index}`"
            >
            {{ skill }}
          </li>
        </ul>
      </section>

      <section>
        <h2 class="section-title">
          Education
        </h2>
        <section 
          v-for="education in resume.education" 
          v-bind:key="education.id"
          class="section">
           <h3 class="info-title">
            <div><em> <a :href="education.link" target="_blank" rel="noreferrer">{{ education.school }}</a> | {{ education.location }} | {{ education.focus}}</em></div>
            <div class="blue--accent">{{ education.dates }}</div>
         </h3>
        </section>
      </section>

      <section>
        <h2 class="section-title">
          Community Activities
        </h2>
        <section 
          v-for="community in resume.community" 
          v-bind:key="community.id"
          class="section">
          <h3 class="info-title">
            <div><em>
              <a target="_blank" rel="noreferrer" :href="community.link">{{ community.title }}</a> | {{ community.role }}</em></div>
            <div class="blue--accent">{{ community.dates }}</div>
          </h3>
        </section> 
      </section>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
    data: function (){
    return {
     resume: {}
    }
  },
   mounted() {
     axios.get('../data/resume.json').then(response => {
       this.resume = response.data.resume;
     });
   }
}

</script>

<style scoped lang="css">
  .section {
    border-bottom: solid 2px rgb(87, 101, 116, .1);
    padding-bottom: 15px;
    margin-bottom: 25px;
  }

  .resume-page {
    background-color:  rgb(87, 101, 116, .1);
  }

  .resume-header__wrapper {
    background-color: var(--blue--accent);
    color: var(--white);
    padding: 25px;
  }

  .resume-header {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
  }

  .resume-header--title {
    font-size: 30px;
    text-transform: uppercase;
    margin: 0;
  }

  .resume-header--subtitle {
    margin: 0;
    font-weight: var(--font-thin);
  }

  .resume-image {
    border-radius: 50%;
    margin-bottom: 25px;
  }

  .section-title {
    font-size: 25px;
    margin-top: 35px;
  }

  .skills-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  .skills-list li {
    color: var(--blue--accent);
    font-size: 18px;
  }

  .skills-list li:not(:last-child):after {
    content: '|';
    margin: 0 10px;
  }

  .experience-list li {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .info-title {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: 18px;
  }

  @media screen and (min-width: 750px) {
    .resume-header {
      flex-direction: row;
      text-align: left;
    }

    .resume-header--title {
      font-size: 60px;
    }

    .resume-header--subtitle {
      font-size: 50px;
    }

    .resume-image {
      margin-bottom: 0;
    }

    .section-title {
      font-size: 25px;
      margin-top: 55px;
    }
  }

  @media screen and (min-width: 1000px) {
    .info-title {
      flex-direction: row;
      font-size: 22px;
    }
  }
</style>
