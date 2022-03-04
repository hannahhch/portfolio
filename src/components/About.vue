<template lang="html">
  <section class="about-section">
    <div class="about-section--wrapper">
      <h2>Hello, I'm Hannah.</h2>
      <h3>I am a frontend engineer and educator currently living in Denver, Colorado. I currently work as an Instructor at the <a href="https://turing.io/">Turing School of Software and Design</a>.</h3>
      <p>My hobbies change up pretty frequently, but I'm currently excited about:</p>
      <ul class="about-section--list">
        <li>Scuba diving</li>
        <li>Traveling</li>
        <li>Playing the piano</li>
        <li>Swimming</li>
        <li>Caves</li>
        <li>Weird earrings</li>
      </ul>
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

  .about-section--list li {
    font-size: 18px;
    list-style: none;
    margin: 0;
  }

  .about-section--list li:before {
    content: '●';
    margin-right: 5px;
  }

  .about-section--wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 50px 0;
  }
</style>
