<template>
  <q-page class="q-pa-md">
    <q-list
      separator
      bordered
    >
      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        clickable
        v-ripple>
        <q-item-section side>
          <q-checkbox v-model="task.completed" />
        </q-item-section>
        <q-item-section>
          <q-item-label
          :class="{ 'text-strike' : task.completed }">
            {{ task.name }}
          </q-item-label>
        </q-item-section>
        <q-item-section side top>
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
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        tasks: [
          {
            id: 1,
            name: 'Get more bananas!',
            completed: false,
            dueDate: '2019/05/12',
            dueTime: '18:30'
          },
          {
            id: 2,
            name: 'Get more oranges!',
            completed: false,
            dueDate: '2019/05/13',
            dueTime: '20:30'
          },
          {
            id: 3,
            name: 'Get more apples!',
            completed: false,
            dueDate: '2019/05/14',
            dueTime: '12:50'
          },
          {
            id: 1,
            name: 'Get more strawberries!',
            completed: false,
            dueDate: '2019/05/15',
            dueTime: '10:45'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">

</style>
