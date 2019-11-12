<template lang="html">
  <section class="about-section">
    <div class="about-section--wrapper">
      <h2>Hello, I'm Hannah.</h2>
      <h3>I am a frontend engineer and educator currently living in Denver, Colorado.</h3>
      <p>Before completing <a href="https://www.coursereport.com/schools/the-iron-yard" target="_blank" rel="noreferrer">The Iron Yard's</a> web development program in 2017, I was a high school special education teacher. I enjoyed many aspects of teaching special eduation (especially working with my students and teaching them life skills), but found that I wanted a change. Software engineering gave me a career that encouraged life-long learning, and I loved the creativity of working on the frontend.</p>
      <p>I started my developer career at an agency in Chapel Hill, NC as a frontend developer, where I fell in love with CSS. I had the opportunity to build complex layouts, learn about browser inconsistancies, google analytics and web accessibility. <p>
      <p>After working at Rivers Agency, I went to a company called Smashing Boxes. Here I learned Angular, React Native and got more comfortable working with React. I enjoyed having so much variety, but still used my CSS skills often! I was able to dive deeper, and work on a project with CSS animations. </p>
      <p>Recently, I started working as an assistant instructor at <a href="https://turing.io/" target="_blank">The Turing School of Software and Design</a>. I am incredibly excited for this new opportunity to combine my teaching and developer skillsets!</p>
        
        <p>In my free time, I like to <a target="_blank" href="https://www.instagram.com/tartsbyhannah/">bake pastries</a> - the more complicated, the better! I also enjoy hiking, rock climbing, traveling and hanging out with my cat and husband. </p>
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

  h2 {
    margin: 0;
  }

  p {
    margin: 0 0 10px;
  }

  .about-section--wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 50px 0;
  }
</style>
