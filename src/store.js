import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      title: 'My custom Title',
      links: [
        'http://google.com',
        'http://coursetro.com',
        'http://youtube.com'
      ]
  },
  getters: {
    countLinks: state => {
          return state.links.length
    }
  },
  mutations: {
      ADD_LINK: (state, link) =>{   //synchronous mutations are called directly in componets
          state.links.push(link)
      },
      REMOVE_LINK: (state, link) =>{ //Aysnc are called via actions
        state.links.splice(link, 1)
      },
      REMOVE_ALL: (state) =>{
        state.links = []
      }
  },
  actions: {
      removeLink: (context, link) =>{
        context.commit("REMOVE_LINK", link)
      },
      removeAll({ commit }){  //Call an action using argument distructuring
        return new Promise((resolve, reject) =>{
          setTimeout( ()=>{
            commit('REMOVE_ALL')
            resolve()
          }, 1500)
        }) 
      }
  }
})
