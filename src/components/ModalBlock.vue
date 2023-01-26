<template lang="html">
  <div class="modal">
    <span @click="toggleModal" class="btn--close">&#215;</span>
    <h2 class="modal-title">Get in Touch!</h2>
    <p>Email me at <a target="_blank" rel="noreferrer" href="mailto:hannah.hch@gmail.com">hannah.hch@gmail.com</a> or send me a message on <a href="https://www.linkedin.com/in/hannahchudson/" target="_blank"
        rel="noreferrer">LinkedIn</a></p>
  </div>
</template>

<script>
export default {
  props: ['toggleModal'],
  methods: {
    hideModal() {
      this.$emit('clicked');
    }
  }
}
</script>

<style lang="css">
  sup {
    color: var(--red);
  }

  .modal {
    position: absolute;
    background-color: var(--white);
    left: 50%;
    top: 50%;
    z-index: 3;
    padding: 50px 25px;
    width: 80%;
    margin: 0 auto;
    transform: translate(-50%, -50%);
    max-width: 500px;
    text-align: center;
  }

  .modal-title {
    font-size: 45px;
    margin-bottom: 25px;
    text-align: center;
  }

  .btn--close {
    position: absolute;
    right: 7px;
    top: 0;
    font-size: 45px;
    line-height: 45px;
  }

  .btn--close:hover {
    cursor: pointer;
  }

  .modal-form__group {
    position: relative;
    width: 100%;
    text-align: center;
  }

  .modal-form__input {
    font-size: 16px;
    display: block;
    width: 100%;
    position: relative;
    border: none;
    outline: 0;
    border-bottom: 1px solid var(--blue-grey);
  }

  .modal-form__input:not(.button) {
    margin-bottom: 55px;
  }

  .modal-form__input:focus {
    outline: none;
  }

  .modal-form__label {
    position: absolute;
    pointer-events: none;
    left:5px;
    font-size: 14px;
    color: gray;
    top: 1px;
    transition: all 300ms ease;
  }

  .modal-form__input:focus + .modal-form__label {
      top: -20px;
      font-size: 10px;
  }
  .modal-form__input:valid + .modal-form__label {
    top: -20px;
    font-size: 10px;
  }

  @media screen and (min-width: 700px) {
    .modal {
      width: 50%;
      min-width: 300px;
    }
  }

  @media screen and (min-width: 1150px) {
    .modal {
      width: 30%;
    }
  }

</style>
