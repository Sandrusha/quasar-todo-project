const state = {
  //all of the data will go here
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
      id: 4,
      name: 'Get more strawberries!',
      completed: false,
      dueDate: '2019/05/15',
      dueTime: '10:45'
    }
  ]
}

const mutations = {
  //contain methods which manipulate the STATE directly and instantly
  //cannot be async
}

const actions = {
  //contain methods which can be async
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
