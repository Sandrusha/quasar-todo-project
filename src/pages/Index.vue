<template>
  <q-page padding>
    <button class="counter-button"
            @click="counter++">{{ counter }}
    </button>
    <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      v-autofocus
      :class="{ 'error' : message.length > 23 }"
      ref="messageInput" />
    <button @click="clearMessage">Clear</button>
    <div>{{ message.length }}</div>
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
        message: 'I love Vue.js so hard!',
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
    },
    directives: {
      autofocus: {
        inserted(el) {
          el.focus()
        }
      }
    },
    mounted() {
     // console.log(this.$refs)
      this.$refs.messageInput.className = 'bg-green'
    },
  }
</script>

<style lang="scss">
  .counter-button {
    position: absolute;
    right: 20px;
  }
  .border-grey {
    border: 1px solid grey;
  }
  .error {
    color: red;
    background: pink;
  }
  input, button {
    font-size: 23px;
  }
</style>
