<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="!isLoading && error">
        {{ error }}
      </p>
      <p v-else-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No data found. Please answer the survey at least once.</p>
      <ul v-else>
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
      isLoading: false,
      error: null,

    };
  },
  methods: {
    loadExperiences(){
      this.isLoading = true;
      axios.get('https://vue-http-demo-c7b0b-default-rtdb.firebaseio.com/survey.json')
      .then(
        (response) => {
          this.error = false;
          this.isLoading = false;
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
      .catch((error) => {
        this.isLoading = false;
        this.error = 'Failed to fetch data. Please retry again later.';
        console.log(error);

      });
    },
  },
  mounted(){
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>