<template lang="html">
  <main>
    <div class="wrapper">
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
          <div> <em>Software Engineer | Smashing Boxes | Durham, NC </em></div>
          <div>02.19 - Present</div>
        </h3>
        <p>At Smashing Boxes, I work on an integrated user interface team. I work closely with four other software engineers to develop Angular 8 applications to monitor business critical insights. I utilize Typescript throughout all applications, and use Jasmine for unit test coverage.</p>
        <hr>
        <h3 class="info-title">
          <div><em> Frontend Developer | Rivers Agency | Chapel Hill, NC</em></div>
          <div>11.17 - 02.19</div>
        </h3>
        <p>At Rivers Agency I wrote responsive front end code to fit the needs of many diverse clients. I have created CMS pages; writing HTML, SASS, PHP and jQuery.  I attended a training in web accessibility principles, and brought back what I learned to Rivers. I held multiple training sessions for my coworkers, and created a checklist for designers and developers to assist with implementing these standards.</p>
        <hr>
        <h3 class="info-title">
          <div><em>Special Education Teacher | Chapel Hill High School, NC</em></div>
          <div>08.16 - 06.17</div>
        </h3>
        <hr>
        <h3 class="info-title">
          <div><em>Special Education Teacher | Rolesville High School, NC</em></div>
          <div>08.14 - 06.16</div>
        </h3>
        <hr>
      </section>

      <section>
        <h2 class="section-title">
          Education
        </h2>
        <h3 class="info-title">
            <div><em> The Iron Yard Durham, NC | Web Development Path</em></div>
            <div>07.17- 10.17</div>
        </h3>
        <hr>
        <h3 class="info-title">
          <div><em>University of NC Wilmington | B.A in Special Education</em></div>
          <div>Graduated 07.14</div>
        </h3>

      </section>
      <hr>
      <section>
        <h2 class="section-title">
          Community Activities
        </h2>
        <h3 class="info-title">
          <div><em>Momentum Ambassador | Mentor and volunteer teacher for  local code school</em></div>
          <div>03.18 - Present</div>
        </h3>
        <hr>
        <h3 class="info-title">
          <div><em>WebAIM Training  | Attended two day course on web accessibility principles</em></div>
          <div>09.18</div>
        </h3>
        <hr>
        <h3 class="info-title">
          <div><em>Co-Teacher for Duke TIP Program | Full day programming course for 5th - 6th graders</em></div>
          <div>07.18</div>
        </h3>
        <hr>
        <h3 class="info-title">
          <div><em>Teacher for Girl Develop It | Taught Intermediate HTML/CSS (8 hrs)</em></div>
          <div>03.18</div>
        </h3>

      </section>
    </div>
  </main>
</template>

<script>
export default {
}
</script>

<style scoped lang="css">
  main {
    background-color: rgb(87, 101, 116, .1);
  }

  hr {
    border-color: rgb(87, 101, 116, .1);
  }

  section {
    margin-bottom: 25px;
  }

  .resume-header h2, h3, h4 {
    margin: 0;
  }

  hr {
    margin: 25px 0 ;
  }

  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 25px 0;
  }

  .section-title {
    font-size: 25px;
    margin-top: 55px;
  }

  .skills-list {
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
  }
</style>
