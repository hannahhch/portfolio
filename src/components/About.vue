<template lang="html">
  <section class="about-section">
    <div class="about-section--wrapper">
      <h2>Hello, I'm Hannah.</h2>
      <h3>I am a frontend enginner, currently working at <a href="https://smashingboxes.com/" target="_blank" rel="noreferrer">Smashing Boxes</a> in Durham, North Carolina.</h3>
      <p>Before completing <a href="https://www.coursereport.com/schools/the-iron-yard" target="_blank" rel="noreferrer">The Iron Yard's</a> web development program, I was a high school special education teacher. I got my first development job at an agency in Chapel Hill, NC as a frontend developer, and I have been programming professionally for about a year and a half now. In my free time, I likes to combine my two careers and teach intro to HTML/CSS crash courses for Momentum (a coding bootcamp). One of my favorite things to do is to bake pastries - the more complicated, the better! I also enjoy hiking, rock climbing and traveling. </p>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped lang="css">
  .about-section {
    background-color: white;
    padding: 0 25px;
    border-top: solid 5px var(--blue-grey--dark);
  }

  h2, p {
    margin: 0;
  }

  .about-section--wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 50px 0;
  }
</style>
