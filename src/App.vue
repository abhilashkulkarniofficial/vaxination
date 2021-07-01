<template>
  <v-app>
    <v-app-bar
      app
      color="#D46A6A"
      dark
    >
    <v-app-bar-title>VAXINATION</v-app-bar-title>
      

      <v-spacer></v-spacer>
    <v-btn href="https://github.com/abhilashkulkarniofficial/vue-boilerplate" target="_blank" text>
      <span class="no-decoration">Level</span>
        <v-icon small>mdi-numeric-2-box-multiple</v-icon>
      </v-btn>
    
    <v-btn href="https://github.com/abhilashkulkarniofficial/vue-boilerplate" target="_blank" text>
      <span>20</span>
        <v-icon small>mdi-alpha-x-circle</v-icon>
      </v-btn>
    <v-btn href="https://github.com/abhilashkulkarniofficial/vue-boilerplate" target="_blank" text>
      <span>10</span>
        <v-icon small>mdi-bitcoin</v-icon>
      </v-btn>
      <v-btn href="https://github.com/abhilashkulkarniofficial/vue-boilerplate" target="_blank" icon>
        <v-icon>mdi-account</v-icon>
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
<style scoped>
.no-decoration {
  text-decoration: none !important;
}
</style>
