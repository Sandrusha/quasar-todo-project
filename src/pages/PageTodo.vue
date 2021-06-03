<template>
  <q-page class="q-pa-md">
    <q-list
      separator
      bordered
    >
    <Task
      v-for="task in tasks"
      :key="task.id"
      :task="task"
    ></Task>
    </q-list>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Task from "components/Tasks/Task";
  export default {
    computed: {
      ...mapGetters('tasks', ['tasks'])
    },
    components: {
      Task
    }
  }
</script>

<style lang="scss">

</style>
