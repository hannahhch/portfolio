<template lang="html">
  <section class="about-section">
    <div class="about-section--wrapper">
      <!-- <h2>Hello, I'm Hannah.</h2> -->
      <h3>I'm a digital nomad from Colorado with a love for clean code, thoughtful design, and
        cave diving.</h3>
      <p>

        By day, I build accessible, performant web experiences with technologies like Vue, React, and TypeScript. I
        currently work remotely with The Office of Experience, where I help bring ideas to life for clients big and
        small. I’ve also taught over 400 students software engineering as an instructor, mentored new developers, and
        contributed to curriculum development.</p>
        
        <p>Outside of work, I’m usually chasing adventure — whether that’s exploring remote dive sites, traveling across
        new countries, or finding the best Wi-Fi-friendly coffee shop in town. I believe in writing code that’s as clear
        and intentional as the paths I follow, whether above ground or 100 feet below it.</p>

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
