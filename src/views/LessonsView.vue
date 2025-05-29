<template>
  <main class="main">
    <section class="wrapper">
      <h2>Lessons</h2>
        <section class="lessons">
          <section
           class="lesson"
            v-bind:key="lesson.id"
            v-for="lesson in lessons"
          >
          <iframe width="520" height="315" :src="lesson.url"  frameborder="0" allowfullscreen>></iframe>
          <h3>{{lesson.title}}</h3>
          </section>
    </section>
    </section>
    
  </main>
</template>

<style scoped lang="css">
.main {
  background-image: linear-gradient(
    to bottom, 
    var(--blue-grey) 0%, 
    var(--blue-grey) 20%, 
    var(--teal-light) 20%);

}
  .lessons {
    display: grid;
    grid-template-columns: 1fr;
  }

  .lesson {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1000px) {
    .lessons {
      grid-template-columns: 1fr 1fr;
    }
  }

</style>

<script>
import axios from 'axios';

export default {
    data: function (){
    return {
      lessons: []
    }
  },
   mounted() {
     axios.get('../data/lessons.json').then(response => {
       this.lessons = response.data.lessons;
     });
   }
}

</script>