<template>
  <q-page padding>
    <button @click="counter++">{{ counter }}</button>
    <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
    />
    <button @click="clearMessage">Clear</button>
    <h5 class="border-grey" v-if="message.length">{{ message }}</h5>
    <h6 v-else>No message entered</h6>
    <hr>
    <p>Uppercase message: {{ messageUppercase }}</p>
    <p>Lowercase message: {{ message | messageLowercase }}</p>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        message: 'I love Vue so hard.js',
        counter: 0
      }
    },
    methods: {
      clearMessage() {
        this.message = ''
      },
      alertMessage() {
        alert(this.message)
      }
    },
    computed: {
      messageUppercase() {
        return this.message.toUpperCase()
      }
    },
    //in filters, we don't have access to data properties, we don't have access to methods, we don't have access to computed properties. we only have access to the value
    filters: {
      messageLowercase(value) {
        return value.toLowerCase()
      }
    }
  }
</script>

<style lang="scss">
  .border-grey {
    border: 1px solid grey;
  }
</style>
