<template>
  <v-app>
    <v-app-bar
      app
      color="#D46A6A"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../public/favicon.svg')"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/abhilashkulkarniofficial/vue-boilerplate"
        target="_blank"
        text
      >
        <span class="mr-2">Project</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

     <v-main>
      
      <router-view></router-view>
      
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
