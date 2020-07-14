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
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">Recover your account</h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="email"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          v-model="email"
          required
        />
        <button class="grabbing Hover">Reset Password</button>
      </form>
      <router-link
        to="/signin"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
      >Already have an account? Sign in</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
import { auth } from "@/main";
export default {
  name: "Request",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: ""
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onSubmit() {
      const email = this.email;
      auth
        .requestPasswordRecovery(email)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRecoveredAccount: true,
              email: email
            }
          });
        })
        .catch(error => {
          alert("Error" + error);
        });
    }
  },
  mounted() {
    const params = this.$route.params;

    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You are now logged out";
    }
  }
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
