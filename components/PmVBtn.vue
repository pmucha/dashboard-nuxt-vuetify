<template>
  <v-btn
    :ripple="(this.$attrs.ripple) ? this.$attrs.ripple : false"
    :elevation="(this.$attrs.elevation) ? this.$attrs.elevation : 0"
    v-bind="$attrs"
  >
    <slot></slot>
  </v-btn>
</template>


<script>
export default {
  inheritAttrs: false,
  data () {
    return { }
  },
}
</script>
