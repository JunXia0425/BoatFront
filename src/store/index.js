import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    choice: [],
    pChoice: [],
    yachtName: ''
  },
  mutations: {
    add (state, item) {
      state.choice.push(item)
      Vue.set(state, 'choice', state.choice)
    },
    remove (state, index) {
      state.choice.splice(index, 1)
      Vue.set(state, 'choice', state.choice)
    },
    addP (state, item) {
      state.pChoice.push(item)
      Vue.set(state, 'choice', state.pChoice)
    },
    removeP (state, index) {
      state.pChoice.splice(index, 1)
      Vue.set(state, 'choice', state.pChoice)
    },
    putYachtName (state, name) {
      state.yachtName = name
    }
  },
  getters: {
    getPChoice (state) {
      let type
      let region
      state.pChoice.find(
        item => {
          if (item.index === 'type') {
            type = item.val.val
          }
          if (item.index === 'region') {
            region = item.val.subTitle
          }
        }
      )
      return {
        type,
        region
      }
    },
    getChoice (state) {
      let price
      let length
      let classification
      let region
      state.choice.find(
        item => {
          if (item.index === 'price') {
            price = {
              max: item.val.val.max,
              min: item.val.val.min
            }
          }
          if (item.index === 'length') {
            length = {
              max: item.val.val.max,
              min: item.val.val.min
            }
          }
          if (item.index === 'classification') {
            classification = item.val.id
          }
          if (item.index === 'region') {
            region = item.val.subTitle
          }
        }
      )
      return {
        price,
        length,
        classification,
        region
      }
    }
  }
})

export default store
