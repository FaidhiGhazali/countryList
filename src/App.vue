<template>
  <v-app>
    <v-app-bar app>
      <div class="d-flex align-center text-lg-h6">Where in the world?</div>

      <v-spacer></v-spacer>

      <v-switch :label="themeStatus" v-model='themeDark' class="mt-6 ml-3"></v-switch>
    </v-app-bar>

    <v-main>
      <router-view :key="$route.path"></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    themeDark: false,
    themeStatus: 'Dark Mode',
  }),

  methods: {},
  watch: {
      themeDark(val) {
        if(val == false) {
      this.$vuetify.theme.dark = false
      } else {
         this.$vuetify.theme.dark = true
        

      }
      }
    }
};
</script>

<style scoped>

</style>
