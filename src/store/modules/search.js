// import shop from '../../api/shop'
import axios from 'axios';

// state
const state = () => ({
    slots: [],
    pincode:null,
    states: [],
    districts: []
})

// getters
const getters = {
  getPincode:(state) => {
    return state.pincode
  },
  getSlots:(state) => {
    return state.slots
  },
  getStates:(state) => {
    return state.states
  },
  getDistricts:(state) => {
    return state.districts
  }
}

// mutations
const mutations = {
  setPincode(state,data){
    state.pincode = data
  },
  setSlots(state, data){
    state.slots = data
  },
  setStates(state, data){
    state.states = data
  },
  setDistricts(state, data){
    state.districts = data
  },

}

// actions
const actions = {
  async getStates({commit}){
    let result = await axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
    commit('setStates', result.data.states)
  },
  async getDistricts({commit},payload){
    let result = await axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${payload.state_id}`)
    commit('setDistricts', result.data.districts)
  },
  async searchCenters({commit}, filter){
    let result = null
    if(filter.searchBy[1]){
      result = await axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin',{params:filter})
    }else{
      result = await axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict',{params:filter})
    }

    let sessions = []
    for(let i=0; i<result.data.sessions.length; i++){
      if(result.data.sessions[i].available_capacity>0){
        result.data.sessions[i]['reveal'] = false
        result.data.sessions[i]['moreDetails'] = false
        sessions.push(result.data.sessions[i])
      }
      
    }
    // console.log(result.data.sessions)
    commit('setSlots', sessions)
  
    // commit('setPincode', filter.pincode)
  }
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}