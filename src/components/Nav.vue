<template lang="html">
  <div class="navigation-wrapper">

    <nav class="navigation" id="top">
      <router-link to="/" class="navigation-link">Home</router-link>
      <router-link to="/resume" class="navigation-link">Resume</router-link>
      <a @click="toggleModal" class="navigation-link">Contact</a>
    </nav>

    <Modal v-if="isModalShown" v-bind:toggleModal="toggleModal"/>
  </div>

</template>

<script>
import Modal from '../components/Modal.vue';

export default {
  props: ['isModalShown'],
  components: {
    Modal
  },
  methods: {
    toggleModal: function() {
      this.$emit('clicked');
    },
  }
}
</script>

<style lang="css">

.navigation-wrapper {
  background-color: var(--white);
}

.navigation{
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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
      padding: 25px;
  }

  .navigation-link {
      margin-bottom: 0;
  }
}

@media screen and (min-width: 1150px) {
  .navigation {
    padding: 25px 0;
  }
}

</style>
