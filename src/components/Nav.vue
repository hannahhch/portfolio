<template lang="html">
  <nav class="nav-links">
    <router-link v-smooth-scroll class="nav-links__link" to="/#about">About</router-link>
    <router-link v-smooth-scroll class="nav-links__link" to="/#work">Work</router-link>
    <router-link :to="{ name: 'resume' }" class="nav-links__link">Resume</router-link>
    <a class="nav-links__link" href="mailto:hannah.hch@gmail.com">Email</a>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
nav {
  background: white;
}

@media (max-width: 750px) {
    .nav-links h2 {
        order: -1;
        margin: 0;

    }
}

.nav-links {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    transition: all 300ms ease-in;
    padding: 25px 0;
}

.nav-links__link  {
    border-bottom: solid 1px transparent;
    transition: all 300ms linear;
    opacity: .7;
}

.nav-links__link:hover {
    opacity: 1;
}

.nav-links__link {
    color: var(--dark-purple);
    text-decoration: none;
    text-transform: uppercase;
    transition: all 300ms;
    font-size: 20px;
}

@media screen and (min-width: 480px) {

    .nav-links__link {
        font-size: 18px;
    }
}

@media screen and (min-width: 750px) {
  .nav-links {
      flex-direction: row;
  }

  .nav-links__link {
      margin-bottom: 0;
  }

  .nav-links__link:hover{
      border-bottom: solid 1px var(--blue-grey--dark);
  }

}

</style>
