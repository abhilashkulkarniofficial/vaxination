// import shop from '../../api/shop'
// import axios from 'axios';

// state
const state = () => ({
    user: {},
    level: null,
    vaxicoins: null,
    vaxixp:null
})

// getters
const getters = {
  getUser:(state) => {
    return state.user
  },
  getLevel:(state) => {
    return state.level
  },
  getCoins:(state) => {
    return state.vaxicoins
  },
  getXP:(state) => {
    return state.vaxixp
  }
}

// mutations
const mutations = {
  setUser(state,data){
    state.user = data
  },
  setLevel:(state,data) => {
    state.level = data
  },
  setCoins:(state,data) => {
    state.vaxicoins = data
  },
  setXP:(state,data) => {
    state.vaxixp = data
  }
}

// actions
const actions = {
  setUserDetails({commit}, user){
    commit('setUser', user)
  },
  setUserLevel({commit}, level){
    commit('setLevel', level)
  },
  setUserCoins({commit}, coins){
    commit('setCoins', coins)
  },
  setUserXP({commit}, xp){
    commit('setXP', xp)
  },
  addUserXP({commit, getters}, xp){
    let level = getters.getLevel + parseInt((getters.getXP+xp)/100)
    commit('setLevel',level)
    commit('setXP',(getters.getXP+xp)%100)
  },
  addUserCoins({commit, getters}, coins){
    commit('setCoins',getters.getCoins+coins)
  }
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}