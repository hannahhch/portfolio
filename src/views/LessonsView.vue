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
    <h3 class="lessons-subhead">Other Lesson Plans</h3>
    <ul>
       <li>
            <a href="https://hannahhch.github.io/keyframes-crash-course/slides/slides.html" target="_blank">Keyframes Crash Course</a> - Bonus Lecture for Momentum Code School
        </li>
         <li>
            <a href="https://hannahhch.github.io/frontend-adventures-duke-tip/slides" target="_blank">Frontend Adventures</a> - Half day lesson for the Duke TIP program (5th and 6th graders)
        </li>
      <li>
          <a href="https://hannahhch.github.io/bracket-vs-dots/" target="_blank">Brackets vs Dots</a> -  Mini Lesson for Turing School
      </li>
    </ul>
     

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

.lessons-subhead {
  font-size: 30px;
}

li {
  list-style: none;
  font-size: 20px;
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