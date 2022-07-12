<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
      <!-- slotProps is the name of the object that will get the props of the slot (it could be any name). -->
      <!-- <template> if the template that we are using is the default one for the slot, we can remove the <template> tag and add the #default to the component that is using that slot -->
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.another }}</p>
      <!-- </template> -->
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,


  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
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