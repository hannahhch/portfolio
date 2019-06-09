<template lang="html">
  <footer class="footer">
    <div class="footer-content">
      <div class="footer--left">
          <h3 class="footer--left__header">Hannah Hudson</h3>
          <a href="mailto:hannah.hch@gmail.com">hannah.hch@gmail.com</a>
      </div>
      <div class="footer--right">
          <a href="mailto:hannah.hch@gmail.com" class="footer-link">
            Email
          </a>
          <a href="https://github.com/hannahhch" target="_blank" class="footer-link">
              GitHub
          </a>
          <a href="https://www.linkedin.com/in/hannahchudson/" target="_blank" class="footer-link">
              LinkedIn
          </a>
          <!-- <a :href="require(`../assets/documents/resume.pdf`)" target="_blank" class="footer-link">Resumé</a> -->

      </div>
    </div>

  </footer>
</template>

<script>

export default {

}
</script>

<style lang="css">
.footer {
    background-color: var(--blue-grey);
    width: 100%;
    text-align: center;
    padding-top: 20px;
}

.footer-content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.footer--left__header {
    text-transform: uppercase;
    font-size: 25px;
    margin: 0;
}

.footer--left a {
    opacity: .7;
    transition: all 300ms;
}

.footer--left a:hover {
    opacity: 1;
}

.footer--right {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 25px 0;
}

.footer-link {
    margin: 0 20px;
    text-transform: uppercase;
    transition: all 300ms ease-in;
}

@media screen and (min-width: 750px) {
  .footer-link:hover {
      border-bottom: solid 1px var(--blue-grey--dark);
  }

  .footer-link {
      margin-bottom: 0;
      font-size: 20px;
  }

  .footer {
      text-align: left;
      padding: 50px 0;
  }

  .footer-content {
    flex-direction: row;
  }

  .footer--left {
      margin-left: 15px;
  }

  .footer--right {
      margin-right: 15px;
      width: 50%;
      flex-direction: row;
      justify-content: space-between;
  }

  .footer--right span {
      display: block;
  }

  .footer-link {
      border-bottom: solid 1px transparent;
      transition: all 300ms linear;
      opacity: .7;
  }

  .footer-link:hover {
      opacity: 1;
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
