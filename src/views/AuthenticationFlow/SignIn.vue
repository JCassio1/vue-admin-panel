<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <RequestAccount />
    <div class="login">
      <img
        src="@/assets/codigo-de-barras-with-colorLetters.png"
        width="45%"
        height="45%"
        v-show="isDarkMode"
      />
      <img
        src="@/assets/codigo-de-barras-with-colorLetters-black.png"
        width="45%"
        height="45%"
        v-show="!isDarkMode"
      />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign into Código QR
      </h4>
      <input
        type="email"
        placeholder="email"
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
      />
      <input
        type="password"
        placeholder="password"
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
      />
      <button class="grabbing Hover">Sign In</button>
      <router-link
        to="/recover"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        >Forgot my password</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/Global-Styles/color.scss";
@import "@/Global-Styles/typography.scss";

.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 400px;
}
</style>
