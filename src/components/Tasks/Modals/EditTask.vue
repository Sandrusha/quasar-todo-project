<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
    <form @submit.prevent="submitForm">
      <q-card-section>
        <modal-task-name
          :name.sync="taskToSubmit.name"
          @updateName="updateName"
          ref="modalTaskName">
        </modal-task-name>
        <modal-due-date
          :dueDate.sync="taskToSubmit.dueDate"
          @updateDueDate="updateDueDate"
          @clear="clearDueDate">
        </modal-due-date>
        <modal-due-time
          v-if="taskToSubmit.dueDate"
          @updateDueTime="updateDueTime"
          :dueTime.sync="taskToSubmit.dueTime">
        </modal-due-time>
      </q-card-section>
      <modal-buttons></modal-buttons>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import ModalHeader from 'src/components/Tasks/Modals/Shared/ModalHeader'
import ModalTaskName from 'src/components/Tasks/Modals/Shared/ModalTaskName'
import ModalDueDate from 'src/components/Tasks/Modals/Shared/ModalDueDate'
import ModalDueTime from 'src/components/Tasks/Modals/Shared/ModalDueTime'
import ModalButtons from 'src/components/Tasks/Modals/Shared/ModalButtons'
export default {
  props: ['task', 'id'],
  components: {ModalHeader, ModalTaskName, ModalDueDate, ModalDueTime, ModalButtons},
  data() {
    return {
      taskToSubmit: {}
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
     this.updateTask({
       id: this.id,
       updates: this.taskToSubmit
     })
      this.$emit('close')
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
    },
    updateName (val) {
      this.taskToSubmit.name = val
    },
    updateDueDate(val) {
      this.taskToSubmit.dueDate = val
    },
    updateDueTime(val) {
      this.taskToSubmit.dueTime = val
    }
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task)
  }
}
</script>

<style lang="scss">
.q-dialog--modal {
  .q-card {
    background-color: #fff;
    box-shadow: none;
    .q-card__section {
      padding: 10px;
    }
  }
}
</style>
