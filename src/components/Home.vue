<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo1.png')"
          class="my-1"
          contain
          height="100"
        />
      </v-col>

      <v-col class="mb-1">
        <h3 class="display-1 font-weight-bold mb-3">
          Welcome to Vue Heroku
        </h3>

        <p class="subheading font-weight-regular">
          Checkout my 
          <a
            href="https://github.com/abhilashkulkarniofficial"
            target="_blank"
          >Github Projects</a>
          and please join my online
          <a
            href="https://discord.gg/8V624U6KXu"
            target="_blank"
          >Discord Community</a>
          to collaborate. Cheers 🍻
        </p>
      </v-col>

      <v-col
        class="mb-1"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Install and get started
        </h2>
      <v-row class="text-center">
        <v-col cols="2"></v-col>
        <v-col cols="8">
        <code-highlight language="javascript">
  <pre>
      // Fork and clone the repository
      >> git clone https://github.com/[YOUR-GITHUB-USERNAME]/vue-heroku
      // Navigate to folder and launch the project on VSCode
      >> cd vue-boilerplate
      >> code -a .
      // Install packages locally and start the project
      >> npm install
      >> npm run serve
 </pre>
</code-highlight>
</v-col>
      </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Tech Stack
        </h2>

        <v-row justify="center">
          <span
            v-for="(stack, i) in techStack"
            :key="i"
            class="subheading mx-3"
          >
            {{ stack.text }}
          </span>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/prism-tomorrow.css";
import "vue-code-highlight/themes/window.css";
  export default {
    name: 'HelloWorld',
    components:{
  CodeHighlight,
},
    data: () => ({
      techStack: [
        {
          text: 'Vue.JS',
        },
        {
          text: 'Vuetify',
        },
        {
          text: 'Vuex Store',
        },
        {
          text: 'Vue-Router',
        }
      ]
    }),
  }
</script>
