<template>
  <v-layout row style="padding-top: 56px">

    <v-flex
      xs12
      class="pl-1 pt-1"
    >

      <v-card
        color="transparent"
        flat
      >

        <v-card-title class="headline">Welcome!</v-card-title>
        <v-card-text>
          Welcome to this simple dashboard demo made with <em>Vue.js</em>, <em>Nuxt.js</em>,
          and <em>Vuetify.js</em>. It showcases also other libraries not related to Vue,
          such as <em>Chart.js</em>.
          It is still work in progress and will be constantly
          filled with more content.
          To switch to the light theme press the button
          at the bottom. There is also a link to my Upwork profile.
          The whole source code is publicly available on
          <a href="https://github.com/pmucha" target="_blank">Github</a>.
        </v-card-text>
      </v-card>

    </v-flex>

    <v-card class="d-block col-12 elevation-0" color="transparent">
      <div style="width: 100%; margin: 64px auto 32px">
        <pm-chart-js />
      </div>
    </v-card>

    <v-flex xs12 md6 class="pl-1 pt-1">

      <v-card
        color="background lighten-1"
        style="height: 100%"
        flat
      >
        <v-card-title
          :class="`
            headline
            ${ ($vuetify.theme.dark) ? 'font-weight-thin' : 'font-weight-light' }
            font-size-larger
          `"
        >Customizing CSS</v-card-title>
        <v-card-text>
          <em>Vuetify.js</em> and <em>Nuxt.js</em>
          allow for customizing their CSS and SCSS
          variables. This short article describes
          how to do this.
        </v-card-text>
        <v-card-text>
          <v-chip
            class="ma-2"
            color="primary"
          >
            Tutorial
          </v-chip>
          <v-chip
            class="ma-2"
            color="secondary"
          >
            SCSS
          </v-chip>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <pm-v-btn
            class="info darken-1 px-4"
            nuxt to="articles/customizing-css"
          >
            Read the article
          </pm-v-btn>
        </v-card-actions>
      </v-card>

    </v-flex>
    <v-flex xs12 md6 class="pl-1 pt-1">

      <v-card
        color="background lighten-1"
        style="height: 100%"
        flat
      >
        <v-card-title
          :class="`
            headline
            ${ ($vuetify.theme.dark) ? 'font-weight-thin' : 'font-weight-light' }
            font-size-larger
          `"
        >Extending components</v-card-title>
        <v-card-text>
          <em>Vue.js</em> makes it ease to extend
          its components. This short article
          shows how to do this, using a <em>Vuetify.js</em>
          component as a base.
        </v-card-text>
        <v-card-text>
          <v-chip
            class="ma-2"
            color="primary"
          >
            Tutorial
          </v-chip>
          <v-chip
            class="ma-2"
            color="info"
          >
            Vuetify
          </v-chip>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <pm-v-btn
            class="info darken-1 px-4"
            nuxt to="articles/extending-components"
          >
            Read the article
          </pm-v-btn>
        </v-card-actions>
      </v-card>

    </v-flex>
  </v-layout>
</template>


<style>
.font-size-larger {
  font-size: 1.25em;
}
</style>


<script>
import PmChartJs from "../components/PmChartJs"
import PmVBtn from "../components/PmVBtn"

export default {
  components: { PmVBtn, PmChartJs },

  data () {
    return {
      // dark: true,
      email: "",
      agreement: false,
      dialog: false,
      rules: {
        agreementRequired: (v) => { return !!v || "You must agree to continue" },
        emailRequired: (v) => { return (v && !!v.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) || "You must provide a valid e-mail address" },
        emailCounter: (v) => { return !!v || "You must provide an e-mail address" },
      },
    }
  },

  computed: {
    formValid: {
      get() {
        console.log("Get formValid", this.agreementRequired, this.emailRequired, this.emailCounter)
        return this.agreementRequired && this.emailRequired && this.emailCounter
      },
      set() { },
    },
  },

  mounted() {
    this.$vuetify.goTo(0, { duration: 0 })

    // this.dark = this.$vuetify.theme.dark

    this.$store.commit("setBreadcrumbs", [
      {
        text: "Home",
        disabled: false,
        to: "/",
      },
    ])

    this.$nextTick(() => {
      this.$el.querySelectorAll("[data-transition]").forEach((v) => {
        // console.log(v.__vue__)
        v.__vue__.appear = true
      })
      // for (const i in this.$el.querySelectorAll("[data-transition]")) {
      //   console.log(i)
      //   // i.style.display = "initial"
      // }
    })
  },

  methods: {
    submitForm () {
      this.$refs.form.validate()
    },
    validateAndSubmit() {
      const form = this.$refs.form

      console.log("Validate and submit", form)

      if (form.validate()) {
        console.log("Validated successfully")
        form.$el.submit()
      } else {
        console.log("Validation failed")
      }
    },
  },
}
</script>
