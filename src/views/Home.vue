<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="spread">
        <h1 :class="{ 'dark': !isDarkMode, 'light': isDarMode }">Traffic Overview</h1>
        <div class="toggle" :class="{ 'light-box': isDarkMode, 'dark-box': !isDarkMode }">
          <div ref="days" class="days" @click="toggleDays">Days</div>
          <div ref="weeks" class="weeks" @click="toggleWeeks">Weeks</div>
          <div ref="months" class="months" @click="toggleMonths">Months</div>
        </div>
      </div>
      <apexchart
        class="chart1"
        width="100%"
        height="500px"
        type="area"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
    <googleData />
    <googleDataLight />
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Header from "@/components/Header.vue";
import googleData from "@/components/GoogleData.vue";
import googleDataLight from "@/components/GoogleDataLight.vue";
export default {
  name: "Home",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  components: {
    Header,
    apexchart: VueApexCharts,
    googleData,
    googleDataLight
  },
  data() {
    return {
      chartOptions: {
        colors: ["#14f1d9", "#7b42f6"],
        legend: {
          labels: {
            colors: [this.$store.getters.isDarkMode ? "white" : "black"]
          },
          position: "top"
        },
        tooltip: {
          theme: "dark"
        },
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        chart: {
          id: "users"
        },
        xaxis: {
          type: "datetime"
        }
      },
      series: [
        {
          name: "active users",
          data: [
            [new Date("January 1, 2019"), 30],
            [new Date("January 5, 2019"), 40]
          ]
        },
        {
          name: "new users",
          data: [
            [new Date("January 1, 2019"), 80],
            [new Date("January 5, 2019"), 20]
          ]
        }
      ]
    };
  },
  methods: {
    toggleDays() {
      this.$refs.days.style.color = "white";
      this.$refs.days.style.background = "#56ccf2";
      this.$refs.days.borderRadius = "4px";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.borderRadius = "none";
    },
    toggleWeeks() {
      this.$refs.weeks.style.color = "white";
      this.$refs.weeks.style.background = "#56ccf2";
      this.$refs.weeks.borderRadius = "4px";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.borderRadius = "none";
    },
    toggleMonths() {
      this.$refs.months.style.color = "white";
      this.$refs.months.style.background = "#56ccf2";
      this.$refs.months.borderRadius = "4px";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.borderRadius = "none";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.borderRadius = "none";
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding-left: 15%;
  padding-right: 15%;
}
.spread {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
}

h1.dark {
  font-size: 30px;
  line-height: 43px;
  font-weight: bold;
  color: black;
}

h1.light {
  font-size: 30px;
  line-height: 43px;
  font-weight: bold;
  color: white;
}

.toggle {
  line-height: 31px;
  font-size: 20px;
  color: #5b6175;
  height: 50px;
  width: 240px;
  border-radius: 6px;
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;

  &:hover {
    cursor: pointer;
  }
}
@mixin toggle-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 100%;
}

.days {
  @include toggle-settings;
  background: #56ccf2;
  border-radius: 4px;
  color: white;
}

.weeks {
  @include toggle-settings;
  border-radius: 4px;
}

.months {
  @include toggle-settings;
  border-radius: 4px;
}
</style>
