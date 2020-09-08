<!--
  <pm-chart-js /> component puts Chart.js charts into
  the Vue templates. I deliberately didn't use
  the "vue-chartjs" module, because I saw this way
  to be quicker and simpler. See the <script> part
  for more detailed explanation of usage.
-->

<template>
  <div>
    <div style="position: relative; height: 300px">
      <canvas id="chart"></canvas>
    </div>

    <!-- Not needed; it simply implements a toggle animation functionality -->
    <pm-v-btn
      small text
      style="position: relative; top: -2rem;"
      class="secondary--text text--lighten-1"
      hover="1"
      @click="toggleAnimation()"
    >
      <v-icon>{{ isAnimating ? "mdi-motion-pause-outline" : "mdi-motion-play" }}</v-icon>
    </pm-v-btn>
  </div>
</template>

<script>
// Default thing was to "npm install chart.js"
// and import it here.
import Chart from "chart.js"

export default {
  // The "chart" variable is the only one to be actually
  // used in this whole component for the purpose of displaying
  // the charts. The other ones are just for triggering the animation.
  data() {
    return {
      chart: null,
      interval: null,
      isAnimating: false,
      animationBtnText: "Stop animation",
    }
  }, // data

  mounted() {
    // Grab that <canvas id="chart"> from the template above
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
    const context = document.getElementById("chart").getContext("2d")

    // this.chart saves the "new Chart" object for later reference,
    // meaning for data changes.
    this.chart = new Chart(context, {
      type: "line",

      data: {
        labels: ["Neutral", "Cool", "Nice", "Good", "Awesome", "Fantastic", "Epic"],
        datasets: [
          {
            label: "Vue.js",
            backgroundColor: "#A44730AA",
            borderColor: "#f47760",
            data: this.randomizeData(),
          },
          {
            label: "Nuxt.js",
            backgroundColor: "#6C719DAA",
            borderColor: "#9Ca1CD",
            pointStyle: "rect",
            radius: 10,
            lineTension: 0,
            data: this.randomizeData(),
          },
          {
            label: "Vuetify.js",
            backgroundColor: "#7A7029AA",
            borderColor: "#9A9059",
            type: "bar",
            data: this.randomizeData(),
          },
          {
            label: "Chart.js",
            backgroundColor: "#7D480045",
            borderColor: "#7D4800AA",
            type: "bar",
            data: this.randomizeData(),
          },
        ], // datasets
      }, // data

      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500,
        },
        hover: {
          // animationDuration: 1,
        },
        // responsiveAnimationDuration: 1,
        legend: {
          position: "bottom",
        },
        elements: {
          line: {
            borderWidth: 1,
          },
        },
      }, // options
    }) // new Chart

    this.startAnimation()
  }, // mounted

  methods: {
    /**
     * Randomize data for chart datasets.
     *
     * @param {number} i How many numbers to initialize; default: 7
     * @param {number} max The maximum number of range, from 0 to max; default 50
     * @returns {array} i randomized values, from 0 to max
    */
    randomizeData(i = 7, max = 50) {
      const randVals = []
      // Probably the fastest way of getting a "for range 0..6"
      for (const _ in [...Array(i).keys()]) {
        randVals.push(Math.floor(Math.random() * max))
      }
      return randVals // or Object.assign([], randVals) to return a copy
    },

    /**
     * Toggles chart animation.
     */
    toggleAnimation() {
      if (this.isAnimating) {
        this.stopAnimation()
      } else {
        this.startAnimation()
      }
    }, // toggleAnimation

    /**
     * Stops the chart animation and changes the text on the button.
     */
    stopAnimation() {
      this.isAnimating = false
      clearInterval(this.interval)
    }, // stopAnimation

    /**
     * Starts the chart animation and changes the text on the button.
     *
     * @param {number} interval The interval between subsequent chart changes in ms; default 2000
     */
    startAnimation(interval = 2000) {
      this.isAnimating = true
      this.interval = setInterval(
        () => {
          for (let i = 0; i < this.chart.data.datasets.length; i++) {
            this.chart.data.datasets[i].data = this.randomizeData()
            this.chart.update()
          }
        },
        interval,
      ) // setInterval
    }, // startAnimation
  }, // methods
}
</script>
