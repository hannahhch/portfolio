<template lang="html">
  <div class="modal">
    <span @click="toggleModal" class="btn--close">&#215;</span>
    <h2 class="modal-title">Send me an Email</h2>
    <form action="https://formspree.io/hannah.hch@gmail.com" method="POST">
      <div class="modal-form__group ">
        <input type="text" class="modal-form__input" name="name" required/>
        <label class="modal-form__label" for="name">Name<sup>*</sup></label>
      </div>
      <div class="modal-form__group ">
        <input type="email" class="modal-form__input" name="_replyto"required/>
        <label class="modal-form__label" for="email">Email<sup>*</sup></label>
      </div>

  		<div class="modal-form__group">
  			<input type="text" name="message" class="modal-form__input" required/>
  			<label class="modal-form__label" for="message">Message<sup>*</sup></label>
  		</div>

      <div class="modal-form__group ">
        <input type="submit" class="modal-form__input button" value="Send">
      </div>
      <input type="hidden" name="_next" value="/"/>
  </form>
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
    width: 30%;
    min-width: 300px;
    margin: 0 auto;
    transform: translate(-50%, -50%);
  }

  .modal-title {
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

</style>
