<template>
  <v-container fluid fill-height>
    <v-dialog v-model="dialog" max-width="200px">
      <v-card class=text-center>
                <v-card-title class="justify-center">Level Up!!</v-card-title>
                <v-card-subtitle class="justify-center mt-1">You're a {{warrior[level-1]}} Belt Warrior</v-card-subtitle>
                <v-card-text class=text-center>
                  <v-avatar class="mx-auto">
                    <v-icon x-large color="#FFD700">mdi-numeric-{{level}}-box-multiple</v-icon>
                  </v-avatar>
                </v-card-text>
                <v-card-actions class="justify-center">
                <v-btn small color="blue darken-1" text @click="dialog = false">
                    Close
                </v-btn>
                </v-card-actions>
            </v-card>
    </v-dialog>
    <v-row class="text-center fill-height">
      <v-col cols="8" class="mb-1">
        <v-row class="text-center">
          <v-col cols="4">
            <Vaxitar/>
          </v-col>
          <v-col cols="8">
            <Tasks @openDialog="opendialog"/>
          </v-col>
        </v-row>
        <v-row class="text-center">
            <Knowledge/>          
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
import { mapGetters } from 'vuex'
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
computed:{
    ...mapGetters({
      user:'user/getUser',
      level:'user/getLevel',
      coins:'user/getCoins',
      xp:'user/getXP'
    })
  },
    data: () => ({
      warrior: ['White','Yellow','Green','Blue','Purple','Red','Black'],
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
      dialog:false
    }),
    methods:{
      opendialog(val){
        console.log(val)
        this.dialog = true
      }
    }
  }
</script>
