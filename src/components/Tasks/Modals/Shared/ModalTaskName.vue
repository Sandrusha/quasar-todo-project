<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :value="name"
      @input="updateName"
      label="Task name"
      :rules="[val => !!val || 'Field is required']"
      autofocus
      ref="name"
      class="col">
      <template v-slot:append>
        <q-icon
          v-if="name"
          @click="$emit('updateName', '')"
          name="close"
          class="cursor-pointer" />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: "ModalTaskName.vue",
  props: ['name'],
  methods: {
    updateName (val) {
      this.$emit('updateName', val)
    }
  }
}
</script>

<style scoped>

</style>
