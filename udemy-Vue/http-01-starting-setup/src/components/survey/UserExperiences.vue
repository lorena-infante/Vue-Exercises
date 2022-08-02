<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';
export default {
  components: {
    SurveyResult,
  },
  data(){
    return {
      results:[],

    };
  },
  methods: {
    loadExperiences(){
      axios.get('https://vue-http-demo-c7b0b-default-rtdb.firebaseio.com/survey.json')
      .then(
        (response) => {
         console.log(response.data);
         for(const id in response.data){
          this.results.push(
            { id: id, 
              name: response.data[id].name,
              rating: response.data[id].rating
            });
         }
        }
      )
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>