<template lang="html">
  <footer class="footer">
    <a v-smooth-scroll href="#top" class="footer-link__to-top">
      <div>&#8963;</div>
    </a>
    <div class="footer-content">
      <div class="footer-content--left">
          <h3 class="footer-content--left__header">Hannah Hudson</h3>
          <a href="mailto:hannah.hch@gmail.com">hannah.hch@gmail.com</a>
      </div>
      <div class="footer-content--right">
          <a href="https://github.com/hannahhch" target="_blank" class="footer-link">
              GitHub
          </a>
          <a href="https://www.linkedin.com/in/hannahchudson/" target="_blank" class="footer-link">
              LinkedIn
          </a>
          <a href="https://codepen.io/hannahhch/" target="_blank" class="footer-link">
              CodePen
          </a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {}
</script>

<style  lang="css">

.footer-link__to-top {
  background-color: var(--teal);
  width: 35px;
  height: 35px;
  position: absolute;
  top: -35px;
  right: 15px;
  color: var(--white);
  font-size: 30px;
  text-align: center;
  opacity: .5;
  border: none;
}

.footer-link__to-top:hover {
  border: none;
  color: var(--white);
}

.footer {
    background-color: var(--blue-grey);
    width: 100%;
    text-align: center;
    padding-top: 20px;
    flex-shrink: 0;
    position: relative;
    border-bottom: solid 10px var(--blue--accent);
}

.footer-content {
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.footer-content--left__header {
    text-transform: uppercase;
    font-size: 25px;
    margin: 0;
}

.footer-content--right {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 25px 0;
}

.footer-link {
    margin: 0 20px;
}

@media screen and (min-width: 750px) {
  .footer-link__to-top {
    width: 50px;
    height: 50px;
    top: 15px;
    font-size: 40px;
  }

  .footer-link__to-top:hover {
    transform: translateY(-15px);
  }

  .footer-link {
      margin: 0;
      font-size: 20px;
  }

  .footer {
      text-align: left;
      padding: 50px 0;
  }

  .footer-content {
    flex-direction: row;
  }

  .footer-content--right {
      width: 50%;
      flex-direction: row;
      justify-content: space-between;
  }

  @media screen and (min-width: 1400px) {
    .footer-link {
        font-size: 20px;
    }

    .footer--left__header {
        font-size: 35px;
    }

    .footer--right {
        width: 45%;
    }
  }

}
</style>
