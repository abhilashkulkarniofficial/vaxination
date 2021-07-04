<template>
    <v-container fluid fill-height ma-0 pa-0>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                <span class="text-h5">Your Task</span>
                </v-card-title>
                <v-card-text>
                    <HealthCheck v-if="healthCheck" @completed="isCompleted"/>
                    <DailyQuiz v-if="!healthCheck" @completed="isCompleted"/>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                </v-btn>
                </v-card-actions>
            </v-card>

        </v-dialog>
        <v-card width="100%">
          <v-card-title class="justify-center">Daily Tasks</v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col cols="4">
            <v-card class="mx-auto" max-width="200">
                <v-avatar size="64" tile class="mt-2"> <img alt="Health Check" src="../assets/tasks/health_check.png"></v-avatar>
              <v-card-title class="justify-center">
                Health Check
              </v-card-title>
              <v-card-subtitle class="pa-0"> 
                +20 <v-icon small color="#FFD700">mdi-alpha-x-circle</v-icon>
                +10 <v-icon small color="#FFD700">mdi-bitcoin</v-icon>
              </v-card-subtitle>
              <v-card-actions class="justify-center pa-0">
                <v-btn v-if="user.healthCheck!==date"  color="#D46A6A" text @click="dialog=true;healthCheck=true" class="ma-2">
                  Start
                </v-btn>
                <v-avatar small v-if="user.healthCheck===date" class="mt-1">
                    <v-icon color="green">mdi-check-bold</v-icon>
                </v-avatar>
                <!-- <v-btn icon>
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn> -->
              </v-card-actions>
            </v-card>
              </v-col>
              
            <v-col cols="4">
            <v-card class="mx-auto" max-width="200">
                <v-avatar size="64" tile class="mt-2"> <img alt="Daily Quiz" src="../assets/tasks/daily_quiz.png"></v-avatar>
              <v-card-title class="justify-center">
               Daily Quiz
              </v-card-title>
              <v-card-subtitle class="pa-0">
                +10 <v-icon small color="#FFD700">mdi-alpha-x-circle</v-icon>
                +5 <v-icon small color="#FFD700">mdi-bitcoin</v-icon>
              </v-card-subtitle>
              <v-card-actions class="justify-center  pa-0">
                <v-btn v-if="user.dailyQuiz!==date" color="#D46A6A" text @click="dialog=true;healthCheck=false" class="ma-2">
                  Start
                </v-btn>
                <v-avatar v-if="user.dailyQuiz===date" class="mt-1">
                    <v-icon color="green">mdi-check-bold</v-icon>
                </v-avatar>
                <!-- <v-btn icon>
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn> -->
              </v-card-actions>
            </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
import HealthCheck from './basics/healthCheck.vue'
import DailyQuiz from './basics/dailyQuiz.vue'
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
    components:{
      HealthCheck,
      DailyQuiz
},
computed:{
    ...mapGetters({
      user:'user/getUser',
      level:'user/getLevel',
      coins:'user/getCoins',
      xp:'user/getXP'
    })
  },
    data () {
      return {
        dialog: false,
        healthCheck: false,
        date :null
      }
    },
    methods:{
        isCompleted(val){
            console.log(val)
            let level = this.level
            
            let user = JSON.parse(JSON.stringify(this.user))
            if(val.type==='healthCheck'){
                user.healthCheck = this.date
                this.$store.dispatch('user/addUserXP',20)
                this.$store.dispatch('user/addUserCoins',10)
            }else{
                user.dailyQuiz = this.date
                this.$store.dispatch('user/addUserXP',10)
                this.$store.dispatch('user/addUserCoins',5)
            }
            this.$store.dispatch('user/setUserDetails', user)
            console.log(this.user)
            this.dialog = false
            this.healthCheck = false
            if(level!==this.level) this.$emit('openDialog',{type:'level'})
        }
    },
    mounted(){
        let date = moment().format('L')
        this.date = moment(date).unix()
    }
}
</script>