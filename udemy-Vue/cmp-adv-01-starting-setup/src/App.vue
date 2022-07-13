<template>
  <div>
    <the-header />
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if=" selectedComponent === 'active-goals' "/>
    <manage-goals v-if=" selectedComponent === 'manage-goals' "/> -->
    <!--DYNAMIC COMPONENTS: always use a <component> tag, and the key :is-->
      <!--Keep-alive mantains alive the life of the component-->
      <keep-alive>
    <component :is="selectedComponent" />
     </keep-alive>
    <!-- SLOTS
      <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps"> -->
      <!-- slotProps is the name of the object that will get the props of the slot (it could be any name). -->
      <!-- <template> if the template that we are using is the default one for the slot, we can remove the <template> tag and add the #default to the component that is using that slot -->
        <!-- <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.another }}</p> -->
      <!-- </template> -->
    <!-- </course-goals> -->
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ManageGoals from './components/ManageGoals.vue'
import ActiveGoals from './components/ActiveGoals.vue'

export default {
  components: {
    TheHeader,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      selectedComponent:'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp){
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style >
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>