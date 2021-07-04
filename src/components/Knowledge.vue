<template>
    <v-container fill-height fluid >
        <v-card width="100%" height="100%">
          <v-card-title>Knowledge</v-card-title>
          <v-card-text>
              <v-timeline dense>
                <v-timeline-item icon="mdi-calendar" fill-dot color="red lighten-2">
                    <v-row class="pt-1">
                        <v-col cols="4">
                        <strong>13 May 2021</strong>
                        </v-col>
                        <v-col cols="8">
                        <strong>Booked Slot</strong>
                        <div class="text-caption">
                            Mobile App
                        </div>
                        </v-col>
                    </v-row>
                </v-timeline-item>
                <v-timeline-item icon="mdi-needle" fill-dot>
                    <v-row class="pt-1">
                        <v-col cols="4">
                        <strong>15 May 2021</strong>
                        </v-col>
                        <v-col cols="8">
                        <strong>First Dose</strong>
                        </v-col>
                    </v-row>
                </v-timeline-item>
                <v-timeline-item icon="mdi-needle" fill-dot>
                    <v-row class="pt-1">
                        <v-col cols="4">
                        <strong>18 June 2021</strong>
                        </v-col>
                        <v-col cols="8">
                        <strong>Second Dose</strong>
                        </v-col>
                    </v-row></v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
export default {
    
}
</script>