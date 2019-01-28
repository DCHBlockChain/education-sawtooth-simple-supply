import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types';
import * as userStore from './userStore';
import * as marketplaceStore from './marketplaceStore';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
  ...userStore.state,
  ...marketplaceStore.state,
  added: [],
  sessionActive: false
};

// getters
const getters = {
  ...userStore.getters,
  ...marketplaceStore.getters,
  sessionActive: state => state.sessionActive
};

// actions
const actions = {
  ...userStore.actions,
  ...marketplaceStore.actions,
};

// mutations
const mutations = {
  ...userStore.mutations,
  ...marketplaceStore.mutations,
  setSessionActive (state, payload) {
    state.sessionActive = payload.flag;
  }
};

// one store for entire application
export default new Vuex.Store({
	state,
	strict: debug,
	getters,
	actions,
	mutations
})
