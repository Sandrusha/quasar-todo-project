<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      label="Due Date"
      :value="dueDate"
      @input="$emit('updateDueDate', $event)">
      <template v-slot:append>
        <q-icon
          v-if="dueDate"
          @click="$emit('clear')"
          name="close"
          class="cursor-pointer" />
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy>
            <q-date
              :value="dueDate"
              @input="$emit('updateDueDate', $event)" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: "ModalDueDate.vue",
  props: ['dueDate']
}
</script>

<style scoped>

</style>
