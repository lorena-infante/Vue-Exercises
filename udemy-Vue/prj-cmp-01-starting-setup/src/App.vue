<template>
<h1>Lista de vainas</h1>
  <ul>
    <li v-for="resource in storedResources" :key="resource.id">
      {{ resource.title }}
    </li>
  </ul>
</template>

<script>
export default{
  data() {
    return {
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
    }
  },
  
}
</script>
