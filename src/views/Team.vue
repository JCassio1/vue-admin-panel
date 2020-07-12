<template>
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <transition appear-active-class="animated flipInX">
        <a class="card card-1" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/iu-1.png"
            width="50%"
            height="50%"
            class="card-header"
            :class="{'light-header' : !isDarMode, 'dark-header' : isDarkMode}"
          />
          <h3 :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">Ice Cream</h3>
          <p
            :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
          >The best ice cream for creatives</p>
        </a>
      </transition>
      <transition appear-active-class="animated flipInX">
        <a class="card card-2" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/iu-3.png"
            width="50%"
            height="50%"
            class="card-header"
            :class="{'light-header' : !isDarMode, 'dark-header' : isDarkMode}"
          />
          <h3 :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">Tesla</h3>
          <p :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">The best electric</p>
        </a>
      </transition>
      <transition appear-active-class="animated flipInX">
        <a class="card card-3" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/iu-4.png"
            width="50%"
            height="50%"
            class="card-header"
            :class="{'light-header' : !isDarMode, 'dark-header' : isDarkMode}"
          />
          <h3 :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">Mac</h3>
          <p :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Best for professionals</p>
        </a>
      </transition>
      <transition appear-active-class="animated flipInX">
        <a class="card card-4" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/iu-4-removed.png"
            width="50%"
            height="50%"
            class="card-header"
            :class="{'light-header' : !isDarMode, 'dark-header' : isDarkMode}"
          />
          <h3 :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">Uno Cards</h3>
          <p
            :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
          >Best game to make enemies</p>
        </a>
      </transition>
      <transition appear-active-class="animated flipInX">
        <a class="card card-5" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/iu-5.png"
            width="50%"
            height="50%"
            class="card-header"
            :class="{'light-header' : !isDarMode, 'dark-header' : isDarkMode}"
          />
          <h3 :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">iPhone</h3>
          <p
            :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
          >The biggest money waster</p>
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  font-size: 60px;
  line-height: 86px;
  font-weight: bold;
  color: white;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
}

.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}

.light-card {
  background: white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}

.dark-card {
  background: #1b233f;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}

.card-header {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.light-header {
  background: #f0f3f5;
}

.dark-header {
  background: #283049;
}

h3 {
  font-size: 30px;
  line-height: 43px;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;
  margin-top: 0;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
}
</style>
