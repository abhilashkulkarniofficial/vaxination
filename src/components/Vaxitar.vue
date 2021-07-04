<template>
    <v-container fluid fill-height ma-0 pa-0>
        <v-card  width="100%"  height="100%">
          <v-card-title class="justify-center">Avatar</v-card-title>
          <v-card-subtitle class="justify-center pa-0">{{warrior[level-1]}} Belt Warrior</v-card-subtitle>
          <v-card-text>
              <div>
                  <v-img :src="getImgUrl()" width="60%" class="mx-auto"></v-img>
              </div>
              
          <div  class="vaxitar_credit mx-auto">Icons made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </v-card-text>
          
        </v-card>
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
    ...mapGetters({
      user:'user/getUser',
      level:'user/getLevel',
      coins:'user/getCoins',
      xp:'user/getXP'
    })
  },
  mounted(){
      //
  },
  data(){
      return{
          warrior: ['White','Yellow','Green','Blue','Purple','Red','Black'],
      } 
  },
  methods:{
      getImgUrl() {
    return require(`../assets/vaxitars/ninja_level_${this.level}.png`)
  }
  }
}
</script>
<style scoped>
.vaxitar_credit {
    font-size:6px;
}
</style>