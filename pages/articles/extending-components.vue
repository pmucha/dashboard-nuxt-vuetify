<template>
  <v-layout v-once row class="article article__layout">

    <v-card
      color="background lighten-1"
      class="ma-xs-0 ma-sm-3 elevation-0"
    >
      <v-card-title>Extending components</v-card-title>
      <v-card-subtitle>How to change the default behavior of Vuetify components</v-card-subtitle>
      <v-card-text>
        <p>
          An example component: <code>v-btn</code>
        </p>
        <p>
          A standard Vuetify button has the form of:
          <pre>{{ pre["standard-button-component"] }}</pre>
          and gets rendered as:
        </p>
        <p>
          <v-btn color="primary">A standard button</v-btn>
        </p>
        <p>
          An extended button in this project has
          the form of: <kbd>pm-v-btn</kbd>.
          You can use the standard documentation for all the properties
          and events. They are passed down from the extension code to the
          original element. In the basic form the extended button is rendered as:
        </p>
        <p>
          <pm-v-btn color="primary">An extended button</pm-v-btn>
        </p>
        <p>
          There are basically <em>two</em> differences:
          <ol>
            <li>The elevation is 0 by default.</li>
            <li>The ripple effect is turned off unless you explicitly
              turn it on.</li>
          </ol>
        </p>
        <p>
          Here's an excerpt from the code. You can see the complete
          file in Github repository.
        </p>
        <pre>{{ pre["extended-button-component"] }}</pre>
        <p>
          There are two props:
          <kbd>v-bind="$attrs"</kbd>
          and
          <kbd>v-on="$listeners"</kbd>.
          They make it possible for the child
          <kbd>v-btn</kbd>
          to listen to the parent's
          <kbd>pm-v-btn</kbd>
          events and see its props. However, the ripple and elevation
          props' defaults are changed. This makes it a bit different from
          the original Material Design. It's also the whole reason
          for this extension to exist.
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
  "standard-button-component": `<v-btn color="primary">
  A standard button
</v-btn>`,
  "extended-button-component": `<template>
  <v-btn
    :ripple="(this.$attrs.ripple) ? this.$attrs.ripple : false"
    :elevation="(this.$attrs.elevation) ? this.$attrs.elevation : 0"
    v-bind="$attrs" v-on="$listeners"
  >
    <slot></slot>
  </v-btn>
</template>`,
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
