<template lang="html">
  <section class="about-section">
    <div class="about-section--wrapper">
      <h2>Hello, I'm Hannah.</h2>
      <!-- <h3>I'm a digital nomad from Colorado with a love for clean code, thoughtful design, and
        cave diving.</h3> -->
      <p>

       I'm a frontend engineer who enjoys the intersection of technology, design, and problem-solving. I care about building things that are intuitive, accessible, and thoughtfully put together — down to the little details that make a difference.</p>
        
        <p>I'm also passionate about education and helping others find their way into tech. Teaching software engineering has been one of the most rewarding parts of my career, and I enjoy sharing what I've learned along the way.</p>

        <p>Outside of coding, I'm usually drawn to adventure. I'm an avid scuba diver with a particular love for cave diving, and I enjoy traveling, exploring unfamiliar places, and experiencing different ways of life. I'm always on the lookout for the next interesting place to explore (and a good coffee shop along the way).</p>

        <p>I'm curious by nature, happiest when I'm learning something new, and always interested in meeting people who are passionate about what they do.</p>

        <p>Want to collaborate or just say hi? <a target="_blank" href="https://www.linkedin.com/in/hannahchudson/">Let’s connect</a>.

      </p>

    </div>
  </section>
</template>

<style scoped lang="css">
.about-section {
  background-color: white;
  padding: 0 25px;
  border-top: solid 5px var(--blue-grey--dark);  
}

h2 {
  margin: 0;
}

h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}

p {
  margin: 0 0 20px;
  font-size: 20px;
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
}
</style>
