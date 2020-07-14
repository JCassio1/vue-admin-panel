<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
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
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">Request your account</h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
          v-model="email"
          required
        />
        <button class="grabbing Hover">Request Account</button>
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
import ThemeSwitch from "@/components/ThemeSwitch";
import apiConfig from "@/Git/.gitignore";

export default {
  name: "Request",
  components: {
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

      // Slack API Here
      let slackURLResource = new URL(`${apiConfig.slackAPI}`);

      const data = {
        token:
          "xoxp-1253458881249-1240833880194-1253513951761-d8b895d8837b3e499e939bfa2117dba9",
        channel: "qr-request",
        text: `${email} has requested admin access to Código QR. Please go to netlify to invite them`
      };

      slackURLResource.search = new URLSearchParams(data);
      fetch(slackURLResource)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRequestedAccount: true,
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
