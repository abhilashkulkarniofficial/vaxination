<template>
  <v-app>
    <v-app-bar
      app
      color="#D46A6A"
      dark
    >
    <v-app-bar-title>VAXINATION</v-app-bar-title>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
    <v-avatar class="ml-2" v-bind="attrs" v-on="on">
        <v-icon color="#FFD700">mdi-numeric-{{level}}-box-multiple</v-icon>
    </v-avatar>
    </template>
      <span>Your Level</span>
    </v-tooltip>
      

      <v-spacer></v-spacer>
       <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
    <v-avatar v-bind="attrs" v-on="on" class="mr-2">
      <span>{{xp}}</span>
        <v-icon color="#FFD700">mdi-alpha-x-circle</v-icon>
    </v-avatar>
    </template>
      <span>Your XP</span>
    </v-tooltip>
     <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
    <v-avatar v-bind="attrs" v-on="on" class="mr-2">
      <span>{{coins}}</span>
        <v-icon color="#FFD700">mdi-bitcoin</v-icon>
    </v-avatar>
    </template>
      <span>Your Coins</span>
    </v-tooltip>
      <v-menu bottom offset-y ml-6>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on" icon>
                <v-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-avatar>
              </v-btn>
            </template>
            <v-list>
              <v-list-item link>
                <v-list-item-action>
                    <v-list-item-title>{{user.firstName}} {{user.lastName}}</v-list-item-title>
                </v-list-item-action>
              </v-list-item>
              <v-list-item @click="logout">
                <v-list-item-action>
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-action>
              </v-list-item>
              
            </v-list>
          </v-menu>
    </v-app-bar>

     <v-main>
      
      <router-view></router-view>
      
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed:{
    ...mapGetters({
      user:'user/getUser',
      level:'user/getLevel',
      coins:'user/getCoins',
      xp:'user/getXP'
    })
  },
  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
  mounted(){
    let user = {
      firstName: 'Abhilash',
      lastName: 'Kulkarni',
      healthCheck: null,
      dailyQuiz: null
    }
    this.$store.dispatch('user/setUserDetails', user)
    // this.$store.dispatch('user/setUserLevel', 1)
    // this.$store.dispatch('user/setUserCoins', 0)
    // this.$store.dispatch('user/setUserXP', 0)
    // console.log(this.user)
  },
  methods:{
    logout(){
      this.$store.dispatch('user/setUserDetails',{})
    }
  }

};
</script>
<style scoped>
.no-decoration {
  text-decoration: none !important;
}
</style>
