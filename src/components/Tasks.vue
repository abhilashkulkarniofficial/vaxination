<template>
    <v-container fluid fill-height ma-0 pa-0>
        <v-card width="100%" color="#808080">
          <v-card-title>Daily Tasks</v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col cols="4">
            <v-card class="mx-auto" max-width="200">
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="100px"></v-img>
              <v-card-title>
                Health Check
              </v-card-title>
              <v-card-subtitle>
                +10 <v-icon small>mdi-alpha-x-circle</v-icon>
                +5 <v-icon small>mdi-bitcoin</v-icon>
              </v-card-subtitle>
              <v-card-actions>
                <v-btn color="orange lighten-2" text>
                  Start
                </v-btn>
                <v-spacer></v-spacer>
                <!-- <v-btn icon>
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn> -->
              </v-card-actions>
            </v-card>
              </v-col>
            <v-col cols="4">
            <v-card class="mx-auto" max-width="200">
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="100px"></v-img>
              <v-card-title>
                Daily Quiz
              </v-card-title>
              <v-card-subtitle>
                +10 <v-icon small>mdi-alpha-x-circle</v-icon>
                +5 <v-icon small>mdi-bitcoin</v-icon>
              </v-card-subtitle>
              <v-card-actions>
                <v-btn color="orange lighten-2" text>
                  Start
                </v-btn>
                <v-spacer></v-spacer>
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
export default {
    
}
</script>