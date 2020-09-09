<template>
  <v-app dark>

    <!-- #region TOP BAR -->
    <v-app-bar
      color="background"
      class="px-0"
      elevation="0"
      fixed
      height="56"
      :style="{
        'border-bottom': `0.33px solid ${ ($vuetify.theme.dark) ? 'var(--v-secondary-darken2)' : 'var(--v-secondary-lighten5)' } !important`,
        'z-index': '100',
        'background':
          ($vuetify.theme.dark) ?
            'linear-gradient(60deg, var(--v-background-base) 30%, var(--v-background-lighten5) 350%)'
            :
            'linear-gradient(175deg, var(--v-background-base) 30%, var(--v-background-darken4) 505%) !important'
      }"
    >
      <v-icon class="mr-3">mdi-vuejs</v-icon>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer />
      <v-btn :ripple="false" icon @click="snackbar = true">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>
    <!-- #endregion TOP BAR -->

    <v-snackbar
      v-model="snackbar"
      top
      info
      color="info"
      elevation="0"
      class="pt-14"
      rounded
    >
      There is nothing to search for now.
    </v-snackbar>

    <!-- #region MAIN NAVIGATION -->
    <v-navigation-drawer
      v-model="isNaviVisible" app
      :right="isMobile"
      :temporary="isTemporary"
      touchless
      mobile-breakpoint="400"
      :style="{
        'padding-top': '56px',
        'padding-bottom': '50px',
        'width': `${sidebarWidth}px`,
        'max-height': 'calc(100% - 50px)',
        'background': 'var(--v-background-lighten1)',
        'background': 'linear-gradient(45deg, var(--v-background-base) -30%, var(--v-background-lighten2) 100%)',
        'justify-content': 'flex-start'
      }"
    >
      <v-img src="pm-circle.png" width="60%" class="mx-auto mt-7" />
      <v-list :style="
        // If the drawer is on right:
        (isMobile) ?
          // it should be on bottom
          `position: absolute; bottom: 0; width: 100%`
          :
          `margin-top: 1rem`
      "
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :ripple="false"
          :to="item.to"
          :disabled="item.disabled"
          router
          exact
        >
          <v-list-item-action class="mt-2 mr-3">
            <v-icon small color="grey">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="list-item" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- #endregion MAIN NAVIGATION -->


    <!-- #region MAIN WEBSITE CONTENT -->
    <v-main :style="{
      'padding-left':
        (isMobile) ? // It it's mobile (so the navbar is right)
          0 // there should be no left padding
          :
          ( // otherwise
            (isNaviVisible) ? // if navbar is visible
              `${sidebarWidth}px` // the padding should be ...px
              :
              0 // if no navbar then padding should be 0
          ),
      'padding-right':
        (isMobile) ? ( // If it's mobile (so the navbar is right)
          (isTemporary) ? // If it's also overlaid
            0 // there should be no right padding
            :
            (isNaviVisible) ? // not overlaid but visible
              `${sidebarWidth}px` // padding length
              :
              0 // no padding
        )
          :
          0, // if no navbar on the right, right padding should be 0
    }"
    >
      <v-container>
        <v-slide-y-reverse-transition hide-on-leave>
          <nuxt />
        </v-slide-y-reverse-transition>
      </v-container>
    </v-main>
    <!-- #endregion MAIN WEBSITE CONTENT -->


    <!-- #region FOOTER -->
    <v-footer
      app
      color="background"
      class="pa-0"
      :style="{
        'border-top': `0.33px solid ${ ($vuetify.theme.dark) ? 'var(--v-secondary-darken2)' : 'var(--v-secondary-lighten5)' } !important`,
        'z-index': 100,
      }"
    >
      <!-- #region BOTTOM NAVIGATION -->
      <v-bottom-navigation
        :value="activeBtn"
        background-color="transparent"
        :class="`
          ${ (isMobile) ? 'justify-end' : 'justify-center' }
          elevation-0
        `"
      >

        <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark">
          <span>
            {{
              $vuetify.theme.dark ? "Go light" : "Go dark"
            }}
          </span>
          <v-icon>mdi-brightness-6</v-icon>
        </v-btn>

        <v-btn href="https://pawelmucha.com/upwork" target="_blank">
          <span>Upwork</span>
          <v-icon>mdi-desktop-classic</v-icon>
        </v-btn>

        <v-btn href="mailto:pawel@mucha.com">
          <span>E-mail</span>
          <v-icon>mdi-email</v-icon>
        </v-btn>

        <pm-v-btn
          hover="0" class="ma-0 pa-0 d-xl-none"
          :style="{
            'display': (isMobile) ? 'flex' : 'none',
            'min-width': ($vuetify.breakpoint.width <= 320) ? '32px' : '64px'
          }"
          @click.stop="isNaviVisible = !isNaviVisible"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </pm-v-btn>
      </v-bottom-navigation>
      <!-- #endregion BOTTOM NAVIGATION -->
    </v-footer>
    <!-- #endregion FOOTER -->
  </v-app>
</template>

/****************************************/

<script>
import PmVBtn from "../components/PmVBtn"

export default {
  components: { PmVBtn },

  data () {
    return {
      items: [
        {
          icon: "mdi-view-dashboard",
          title: "Dashboard",
          to: "/",
        },
        {
          icon: "mdi-lead-pencil",
          title: "Articles",
          to: "/articles/customizing-css",
        },
        {
          icon: "mdi-react",
          title: "React",
          to: "#",
          disabled: true,
        },
        {
          icon: "mdi-angular",
          title: "Angular",
          to: "#",
          disabled: true,
        },
        {
          icon: "mdi-laravel",
          title: "Laravel",
          to: "#",
          disabled: true,
        },
      ],
      title: "Paweł Mucha Vuetify admin template example",
      activeBtn: 1,
      isNaviVisible: false,
      sidebarWidth: 192,
      snackbar: false,
    }
  },

  // DRY values
  computed: {
    breadcrumbs() { return this.$store.state.breadcrumbs },
    isMobile() { return this.$vuetify.breakpoint.mobile },
    isTemporary() { return this.$vuetify.breakpoint.mobile && !this.$vuetify.breakpoint.smAndUp },
  },

  watch: {
    // This surprisingly works very well
    "$vuetify.breakpoint.mobile"() {
      this.isNaviVisible = true
    },
  },

  mounted() {
    if (!this.isMobile) {
      this.isNaviVisible = true
    }
  },
}
</script>

/****************************************/

<style lang="scss">
#app {
  background-color: var(--v-background-base);
}

.container {
  padding: ($spacer * 3) ($spacer * 3) 0 ($spacer * 3);
}

.topSearchColumn {
  @media #{map-get($display-breakpoints, "xs-only")} {
    &:focus-within {
      .v-input {
        position: absolute;
        right: 0; top: 10px;
        width: 90%;
      }
    }
  }
} // .topSearchColumn

.v-input {
  // Makes the magnifying glass icon in the top bar
  // a bit closer to the left.
  .v-icon.mdi-magnify {
    margin-left: -12px;
    margin-bottom: -2px;

    opacity: 0.6;
  }
}
</style>

<style scoped>
.list-item {
  text-transform: uppercase;
  font-size: 0.75em;
}
</style>
