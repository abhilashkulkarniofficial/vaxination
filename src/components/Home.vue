<template>
  <v-container fluid fill-height>
    <v-row class="text-center fill-height">
      <v-col cols="8" class="mb-1">
        <v-row class="text-center">
          <v-col cols="4">
            <Vaxitar/>
          </v-col>
          <v-col cols="8">
            <Tasks/>
          </v-col>
        </v-row>
        <v-row class="text-center">
          <v-card width="100%" height="100%">
            <Knowledge/>
          </v-card>
          
        </v-row>

      
      </v-col>
      <v-col cols="4">
        
        <Progress/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/prism-tomorrow.css";
import "vue-code-highlight/themes/window.css";
import Vaxitar from './Vaxitar.vue'
import Tasks from './Tasks.vue'
import Progress from './Progress.vue'
import Knowledge from './Knowledge.vue'
  export default {
    name: 'Home',
    components:{
      Vaxitar,
      Tasks,
      Progress,
      Knowledge
  // CodeHighlight,
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
      ],
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    }),
  }
</script>
