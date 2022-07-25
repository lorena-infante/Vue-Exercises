<template>
  <the-header :title="'Lista de recursos para aprender 🤓👩🏻‍💻 '" />
  <stored-resources :resources="storedResources" />
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import StoredResources from './components/learning-resources/StoredResources.vue';


export default{
  components: {
    TheHeader,
    StoredResources,
    
  },
  data(){
    return {
      selectedTab: 'stored-resources',
      storedResources:[
        { id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue documentation',
          link: 'https://vuejs.org'
        },
        { id: 'google',
          title: 'Google',
          description: 'Learn how to google',
          link: 'https://google.com'
        },
        { id: 'udemy',
          title: 'Udemy',
          description: 'Learn everything',
          link: 'https://udemy.com'
        },
      ],
    };
  },
  
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
  }
</style>