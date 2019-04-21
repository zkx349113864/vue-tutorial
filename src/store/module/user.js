const state = {
  userName: 'sherlock'
}
const getters = {
  firstLetter: state => state.userName.substr(0, 1)
}
const mutations = {

}

const actions = {

}

export default {
  // namespaced: true,
  getters,
  state,
  mutations,
  actions
}
