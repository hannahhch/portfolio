<template>
  <main class="main">
    <section class="wrapper">
      <h2>Lessons</h2>
        <section class="lessons">
          <section
            v-bind:key="lesson.id"
            v-for="lesson in lessons"
          >
          <iframe width="420" height="315" :src="lesson.url"  frameborder="0" allowfullscreen>></iframe>
          <h3>{{lesson.title}}</h3>
          </section>
    </section>
    </section>
    
  </main>
</template>

<script>
import axios from 'axios';

export default {
    data: function (){
    return {
      lessons: []
    }
  },
   mounted() {
     axios.get('../data/data.json').then(response => {
       this.lessons = response.data.lessons;
     })
   }
}

</script>