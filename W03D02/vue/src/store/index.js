import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {tools : []}

const actions = {
  addTool({commit}, tool){
    return new Promise (resolve => {
      setTimeout(() => {
        tool.id = Date.now()
        commit('addTool', tool)
        resolve(tool)
      }, 1000)
    })
  },

  removeTool({commit}, tool){
    commit('removeTool', tool)
  }
}

const mutations = {
  addTool(state, payload){
    state.tools.push(payload)
  },

  removeTool(state, payload){
    console.log('payload', payload.tool.id)

    state.tools = state.tools.filter(item => item.id != payload.tool.id)
  }
}

const store = new Vuex.Store({ state, actions, mutations })

export default store