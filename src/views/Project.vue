<template>
  <div class="main">
    <div>{{ currentId }}</div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        currentId: this.$route.params.id
      }
    }
  }
</script>

<style scoped lang="css">
  .main {
    max-width: 1000px;
    margin: 50px auto;
    padding: 0 25px;
  }
</style>
