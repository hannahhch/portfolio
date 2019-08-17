<template lang="html">
  <main class="resume-page">
    <div class="resume-header__wrapper">
      <div class="resume-header">
        <div>
          <h1 class="resume-header--title">Hannah Hudson</h1>
          <h2 class="resume-header--subtitle">Frontend Software Engineer</h2>
        </div>
        <img class="resume-image" src="../assets/images/profile.jpg" alt="profile of Hannah Hudson">
      </div>
    </div>

    <div class="resume-wrapper">
      <section>
        <h2 class="section-title">
          Technical Skills
        </h2>
        <ul class="skills-list">
          <li>HTML5,</li>
          <li>CSS3/SASS,</li>
          <li>CSS Animation,</li>
          <li>JavaScript,</li>
          <li>jQuery,</li>
          <li>JSON,</li>
          <li>WCAG,</li>
          <li>Wordpress,</li>
          <li>Shopify,</li>
          <li>PHP,</li>
          <li>Twig,</li>
          <li>Node,</li>
          <li>Express,</li>
          <li>Git,</li>
          <li>GitHub,</li>
          <li>GitLab,</li>
          <li>Bitbucket,</li>
          <li>Heroku,</li>
          <li>React,</li>
          <li>React Native,</li>
          <li>Vue,</li>
          <li>Angular 8,</li>
          <li>Typescript,</li>
          <li>Jasmine</li>
        </ul>
      </section>
      <hr>
      <section>
        <h2 class="section-title">
          Professional Experience
        </h2>
        <h3 class="info-title">
          <div> <em><span class="font--bold">Software Engineer</span> | <a href="https://smashingboxes.com/" target="_blank" rel="noreferrer">Smashing Boxes</a> | Durham, NC -> Remote</em></div>
          <div class="blue--accent">March 2019 - Present</div>
        </h3>
        <p>At Smashing Boxes, I build frontend applications to meet client’s needs. I have used React, React Native and Angular (with Typescript) and have gained experience working in different team sizes and dynamics. The first project I worked on was quite large, and involved creating a dashboard to display business critical insights for customers. My role involved creating the UI, and pulling from many different API endpoints to build out components with Angular. I’ve worked on multiple projects since, and have become the go-to for CSS, and animation at Smashing Boxes .</p>
        <hr>
        <h3 class="info-title">
          <div><em> <span class="font--bold">Frontend Developer</span> | <a href="https://riversagency.com/" target="_blank" rel="noreferrer">Rivers Agency</a> | Chapel Hill, NC</em></div>
          <div class="blue--accent">November 2017 - February 2019</div>
        </h3>
        <p>At Rivers Agency I wrote responsive front end code to fit the needs of many diverse clients. I have created CMS pages; writing HTML, SASS, PHP and jQuery.  I attended a training in web accessibility principles, and brought back what I learned to Rivers. I held multiple training sessions for my coworkers, and created a checklist for designers and developers to assist with implementing these standards.</p>
        <hr>
        <h3 class="info-title">
          <div><em><span class="font--bold">Special Education Teacher</span> | Chapel Hill High School, NC</em></div>
          <div class="blue--accent">August 2016 - June 2017</div>
        </h3>
        <hr>
        <h3 class="info-title">
          <div><em><span class="font--bold">Special Education Teacher</span> | Rolesville High School, NC</em></div>
          <div class="blue--accent">August 2014 - June 2016</div>
        </h3>
        <hr>
      </section>

      <section>
        <h2 class="section-title">
          Education
        </h2>
        <h3 class="info-title">
            <div><em> <a href="https://www.coursereport.com/schools/the-iron-yard" target="_blank" rel="noreferrer">The Iron Yard</a> | Durham, NC | Web Development Path</em></div>
            <div class="blue--accent">July 2017- October 2017</div>
        </h3>
        <hr>
        <h3 class="info-title">
          <div><em>University of NC Wilmington | B.A in Special Education</em></div>
          <div class="blue--accent">Graduated July 2014</div>
        </h3>

      </section>
      <hr>
      <section>
        <h2 class="section-title">
          Community Activities
        </h2>
        <h3 class="info-title">
          <div><em>
            <a target="_blank" rel="noreferrer" href="https://www.momentumlearn.com/">Momentum Ambassador</a> | Mentor and volunteer teacher for  local code school</em></div>
          <div class="blue--accent">March 2018 - August 2019</div>
        </h3>
        <hr>
        <h3 class="info-title">
          <div><em>
            <a href="https://webaim.org/training/" target="_blank" rel="noreferrer">WebAIM Training</a>
              | Attended two day course on web accessibility principles</em></div>
          <div class="blue--accent">September 2018</div>
        </h3>
        <hr>
        <h3 class="info-title">
          <div><em>Co-Teacher for <a href="https://tip.duke.edu/" target="_blank" rel="noreferrer">Duke TIP Program</a> | Full day programming course for 5th - 6th graders</em></div>
          <div class="blue--accent">July 2018</div>
        </h3>
        <hr>
        <h3 class="info-title">
          <div><em>Teacher for <a href="https://www.girldevelopit.com/" target="_blank" rel="noreferrer">Girl Develop It</a> | Taught Intermediate HTML/CSS (8 hrs)</em></div>
          <div class="blue--accent">March 2018</div>
        </h3>

      </section>
    </div>
  </main>
</template>

<script>

export default {}

</script>

<style scoped lang="css">
  hr {
    border-color: rgb(87, 101, 116, .1);
    margin: 25px 0 ;
  }

  section {
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

  .resume-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 25px;
  }

  .section-title {
    font-size: 20px;
    margin-top: 35px;
  }

  .skills-list {
    font-weight: var(--font-light-normal);
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  .skills-list li {
    font-size: 18px;
    margin-right: 5px;
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
    }
  }
</style>
