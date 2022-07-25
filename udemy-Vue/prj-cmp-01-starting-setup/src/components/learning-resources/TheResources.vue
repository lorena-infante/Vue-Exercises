<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')">Add Resources</base-button>
  </base-card>
  <component :is="setSelectedTab"/>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components:{
    StoredResources,
    AddResource,
  },
  provide() {
      return {
        resources: this.storedResources
      };

  },
  methods: {
    setSelectedTab(tab){
      this.selectedTab = tab;
      console.log(this.storedResources);
    },
  },
}
</script>