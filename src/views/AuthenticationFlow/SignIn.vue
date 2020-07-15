<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <Notification v-if="hasText" :text="text" />
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
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">Sign into Código QR</h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="email"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode}"
          v-model="email"
          required
        />
        <input
          type="password"
          placeholder="password"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          v-model="password"
          required
        />
        <button class="grabbing Hover">Sign In</button>
      </form>
      <router-link
        to="/recover"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
      >Forgot my password</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
import Notification from "@/components/Notification";
import { auth } from "@/main";
export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification
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
      const password = this.password;

      auth
        .login(email, password, true)
        .then(response => {
          this.$router.replace("/");
          response == response;
        })
        .catch(error => {
          alert("Error: " + error);
        });
    }
  },
  mounted() {
    const params = this.$route.params;

    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You are now logged out";
    } else if (params.userRecoveredAccount) {
      this.hasText = true;
      this.text = "Recovery email has been sent to you" + params.email;
    } else if (params.userRequestedAccount) {
      this.hasText = true;
      this.text = `Voilà! Request has been sent. We told them that your email is: ${params.email}`;
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
