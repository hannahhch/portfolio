<template lang="html">
  <nav class="navigation" id="top">
    <router-link :to="{ name: 'main' }" class="navigation-link">Home</router-link>
    <router-link :to="{ name: 'resume' }" class="navigation-link">Resume</router-link>
    <a class="navigation-link" href="mailto:hannah.hch@gmail.com">Email</a>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">

.navigation{
  background: white;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  transition: all 300ms ease-in;
  padding: 5px 0;
}

.navigation-link {
    font-size: 20px;
}

@media screen and (min-width: 480px) {

    .navigation-link{
        font-size: 18px;
    }
}

@media screen and (min-width: 750px) {
  .navigation {
      flex-direction: row;
      padding: 25px 0;

  }

  .navigation-link {
      margin-bottom: 0;
  }
}

</style>
