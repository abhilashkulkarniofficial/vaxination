<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Question 1
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">
        Question 2
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 3" step="3">
        Completed
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card flat class="mb-12" height="200px">
          <v-card-text>
          <v-select v-model="data[0]" :label="questionBank[0].question" :items="questionBank[0].options" 
        item-text="name" item-value="id"  outlined ></v-select>
        </v-card-text>
        </v-card>

        <v-btn :disabled="!data[0]" color="primary" @click="e1 = 2"> Continue</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card flat class="mb-12" height="200px">
          <v-card-text>
          <v-select v-model="data[1]" :label="questionBank[1].question" :items="questionBank[1].options" 
        item-text="name" item-value="id"  outlined ></v-select>
        </v-card-text>
        </v-card>
        <v-btn :disabled="!data[1]" color="primary" @click="e1 = 3"> Continue</v-btn>

        <v-btn text @click="e1 = 1"> Back</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card flat class="mb-12" height="200px">
          <v-card-title>Yaay! You completed Daily Quiz today!</v-card-title>
        </v-card>
        <v-btn color="primary" @click="submit">Submit</v-btn>
        <v-btn text @click="e1 = 2">Back</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
export default {
  mounted(){
    this.e1 = 1
  },
    data () {
      return {
        e1: 1,
        questionBank:[
                {
                    question:'Are you currently experiencing any of the following symptoms?',
                    type: 'select',
                    options: [
                        {id:'cough',name:'Cough'},
                        {id:'fever',name:'Fever'},
                        {id:'sore_throat',name:'Sore Throat'},
                        {id:'congestion',name:'Chest Congestion or Runny Nose'},
                        {id:'body_ache',name:'Body Ache'},
                        {id:'none',name:'None of the above'},
                    ]
                },
                {
                    question:'Do you have any of the following pre-existing conditions?',
                    type: 'select',
                    options: [
                        {id:'diabetes',name:'Diabetes'},
                        {id:'hypertension',name:'Hypertension'},
                        {id:'lung_disease',name:'Lung Disease'},
                        {id:'heart_disease',name:'Heart Disease'},
                        {id:'kidney_disorder',name:'Kidney Disorder'},
                        {id:'asthama',name:'Asthama'},
                        {id:'none',name:'None of the above'},
                    ]
                }
            ],
        data:[null, null]
      }
    },
    methods:{
      submit(){
        console.log(this.data)
        this.$emit('completed',{data:this.data, type:'healthCheck'})
        this.data = [null, null]
        this.e1 = 1
      }
    }
}
</script>