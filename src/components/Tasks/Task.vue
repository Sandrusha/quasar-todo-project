<template>
  <q-item
    @click="updateTask({ id: task.id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-ripple>
    <q-item-section side>
      <q-checkbox
      :value="task.completed"
      class="no-pointer-events"
      />
    </q-item-section>
    <q-item-section>
      <q-item-label
        :class="{ 'text-strike' : task.completed }">
        {{ task.name }}
      </q-item-label>
    </q-item-section>
    <q-item-section
      v-if="task.dueDate"
      side
      top>
      <div class="row">
        <div class="column justify-center">
          <q-icon
            name="event"
            size="18px"
            class="q-mr-xs"
          />
        </div>
        <div class="column">
          <q-item-label
            class="row justify-end"
            caption>{{ task.dueDate }}</q-item-label>
          <small>
            <q-item-label
              class="row justify-end"
              caption>{{ task.dueTime }}</q-item-label>
          </small>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditTask = true"
          flat
          round
          dense
          color="primary"
          icon="edit"/>
        <q-btn
          @click.stop="promptToDelete(id)"
          flat
          round
          dense
          color="red"
          icon="delete"/>
      </div>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task
        :task="task"
        :id="id"
        @close="showEditTask = false"/>
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'
import EditTask from "components/Tasks/Modals/EditTask";
export default {
  name: "Task.vue",
  props: ['task', 'id'],
  data() {
    return {
      showEditTask: false
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete(id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  },
  components: {
    EditTask
  }
}
</script>

<style scoped>

</style>
