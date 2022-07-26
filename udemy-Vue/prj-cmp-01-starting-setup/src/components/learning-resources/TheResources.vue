<template>
  <base-card>
  <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
  <base-button @click="setSelectedTab('add-resource')">Add Resource </base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components:{
    StoredResources,
    AddResource,
  },
  data(){
    return{
      selectedTab:'stored-resources',
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
  provide(){
    return {
      resources: this.storedResources
    };
  },
  methods:{
    setSelectedTab(tab){
      this.selectedTab = tab;
    },
  },
}
</script>