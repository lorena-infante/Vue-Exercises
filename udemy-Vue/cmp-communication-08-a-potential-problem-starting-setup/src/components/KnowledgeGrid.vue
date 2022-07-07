<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  //inject works like props BUT only with components in a HIGHER UP level (parents)
  inject: ['topics'],
};
</script>