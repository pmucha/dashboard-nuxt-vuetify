<!--
  <pm-v-btn /> is a component that extends Vuetify's<v-btn>
  It doesn't change the functionality, but changes default values
  of some properties, namely:
    * ripple is now false by default
    * elevation is now 0 by default
-->

<template>
  <v-btn
    :ripple="(this.$attrs.ripple) ? this.$attrs.ripple : false"
    :elevation="(this.$attrs.elevation) ? this.$attrs.elevation : 0"
    :hover="(this.$attrs.hover == '0') ? 0 : 1"
    v-bind="$attrs" v-on="$listeners"
  >
    <slot></slot>
  </v-btn>
</template>


<style lang="scss" scoped>
.v-btn--text {
  &:hover, &:focus {
    &:before {
      opacity: 0;
    }
  }
  &[hover='1']:hover {
    filter: brightness(140%) !important;
  }
}
</style>


<script>
export default {
  inheritAttrs: false,
  data () {
    return {
      hover: 1,
    }
  },
}
</script>
