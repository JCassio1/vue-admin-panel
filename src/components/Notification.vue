<template>
  <transition
    enter-active-class="animated faseInDown"
    leave-active-class="animated fadeOutRight"
  >
    <div v-show="show" class="bubble">
      <div class="message">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Notification",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  },
  props: {
    text: Text,
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  border-radius: 6px;
  position: absolute;
  top: 10%;
  padding: 5px 10px 5px 10px;
  background-color: blue;
}

.message {
  font-weight: bold;
  color: white;
  align-items: center;
}
</style>
