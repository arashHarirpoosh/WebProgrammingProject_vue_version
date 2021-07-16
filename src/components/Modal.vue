<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="backdrop" @click="closeModal()"/>

      <div class="dialog">
        <div class="header">
          <slot name="header"/>
          <span class="close" @click="closeModal">&times;</span>
        </div>

        <div class="body">
          <slot name="body"/>
        </div>

        <div class="footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// import Button from "./Button";
export default {
  name: "Modal",
  // components: {Button},
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }
};
</script>


<style scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
}

.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
.dialog {
  background-color: white;
  position: relative;
  /*width: 600px;*/
  max-width: 450px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  z-index: 2;
}

/* The Close Button */
.close {
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  text-decoration: none;
  cursor: pointer;
}

.header {
  padding: 20px 20px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.body {
  padding: 10px 20px 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.footer {
  padding: 10px 20px 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>