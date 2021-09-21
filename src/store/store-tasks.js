import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  //all of the data will go here
  tasks: {
    'ID1': {
      name: 'Get more bananas!',
      completed: false,
      dueDate: '2019/05/12',
      dueTime: '18:30'
    },
    'ID2': {
      name: 'Get more oranges!',
      completed: false,
      dueDate: '2019/05/13',
      dueTime: '20:30'
    },
    'ID3': {
      name: 'Get more apples!',
      completed: false,
      dueDate: '2019/05/14',
      dueTime: '12:50'
    },
    'ID4': {
      name: 'Get more strawberries!',
      completed: false,
      dueDate: '2019/05/15',
      dueTime: '10:45'
    }
  }
}

const mutations = {
  //contain methods which manipulate the STATE directly and instantly
  //cannot be async
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  //contain methods which can be async
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask({ commit }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

const getters = {
  //methods which get the data from the STATE which can then be used by the components within your app
  tasks: (state) => {
    return state.tasks
  }
}

//we need to export all of these objects above by adding export default
export default {
  namespaced: true, //this allows us to have multiple store module within our app
  state,
  mutations,
  actions,
  getters
}
