<template>
  <v-layout v-once row class="article article__layout">
    <v-card
      color="background lighten-1"
      class="ma-xs-0 ma-sm-3 elevation-0"
    >
      <v-card-title>Customizing CSS</v-card-title>
      <v-card-subtitle>How to change the default Vuetify variables</v-card-subtitle>
      <v-card-text>
        <p>
          This article assumes that you're using <em>Nuxt.js</em>
          to build your project. First let's check out how the
          <kbd>nuxt.config.js</kbd> is or should be structured.
        </p>
        <pre>{{ pre["nuxt-config-vuetify"] }}</pre>
      </v-card-text>
      <v-card-subtitle>Custom SCSS variables</v-card-subtitle>
      <v-card-text>
        <p>
          <i>What are SCSS variables?</i> They look like this:
          <pre>$variable-name: a-value</pre>
          and they are used everywhere in Vuetify.
          The complete list is in
          <a href="https://vuetifyjs.com/en/customization/sass-variables/" target="_blank" class="secondary--text text--lighten-2">the docs</a>.
        </p>
        <p>
          So, for example, to change the default font for the whole project,
          in <kbd>assets/variables.scss</kbd> use:
          <pre>$body-font-family: "Times New Roman";</pre>
        </p>
        <p>
          For the custom variables to work, the <kbd>treeShake</kbd>
          option must be set to true. Then the custom variables will be accessible in
          every component's
          <pre>{{ pre["style-scss"] }}</pre>
          Tree shaking is on by default only in production mode.
          That's because it makes the building take longer. But the
          ability to use those variables is often worth waiting.
        </p>
      </v-card-text>
      <v-card-subtitle>Custom CSS variables</v-card-subtitle>
      <v-card-text>
        <p>
          <i>What are CSS variables?</i> They are used in plain CSS
          and look like this:
          <pre>--variable-name: css-value</pre>
          If you set:
        </p>
        <pre>{{ pre["nuxt-config-custom-properties"] }}</pre>
        <p>
          all the colors: primary, secondary, whatever you set
          for your theme, will be accessible as:
        </p>
        <pre>
var(--v-primary-base)
var(--v-primary-lighten1)
var(--v-secondary-darken2)</pre>
        <p>
          That's convenient especially if you don't plan
          to do styling in any other way than plain CSS.
        </p>
      </v-card-text>
      <v-card-actions>
        <pm-v-btn text nuxt exact to="/">
          Homepage
        </pm-v-btn>
      </v-card-actions>
    </v-card>

  </v-layout>
</template>


<style lang="scss">
@import "articles.scss";
</style>


<script>
const pre = {
  "style-scss": `<style type="scss">...</style>`,
  "nuxt-config-vuetify":
`export default {
  // ...
  vuetify: {
    treeShake: true,
    customVariables: ["~/assets/variables.scss"],
    theme: {
      options: {
        customProperties: true,
      },
      // ...
    }
  }
  // ...
}`,
  "nuxt-config-custom-properties":
`export default {
  // ...
  vuetify: {
    theme: {
      options: {
        customProperties: true,
      },
      // ...
    }
  }
  // ...
}`,
}

export default {
  data() {
    return {
      pre,
    }
  },
  mounted() {
    this.$vuetify.goTo(0, { duration: 0 })
  },
}
</script>
