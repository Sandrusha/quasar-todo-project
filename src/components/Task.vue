<template>
  <li>
    <div>{{ task.name }} {{ index }}</div>
    <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
    <button @click="deleteTask(index)">X</button>
  </li>
</template>

<script>
export default {
  name: "Task.vue",
  props: ['task', 'index']
}
</script>

<style scoped>

</style>
