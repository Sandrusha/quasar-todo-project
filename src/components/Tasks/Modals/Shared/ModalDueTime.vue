<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      label="Due Time"
      :value="dueTime"
      @input="$emit('updateDueTime', $event)"
      class="col">
      <template v-slot:append>
        <q-icon
          v-if="dueTime"
          @click="$emit('updateDueTime', '')"
          name="close"
          class="cursor-pointer" />
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time
              :value="dueTime"
              @input="$emit('updateDueTime', $event)">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: "ModalDueTime.vue",
  props: ['dueTime']
}
</script>

<style scoped>

</style>
