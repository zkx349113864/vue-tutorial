import vue from 'vue'

const mutations = {
  changeAppName (state, value) {
    state.appName = value
    // state.appName = value.appName
  },
  set_app_version (state) {
    vue.set(state, 'appVersion', 'v2.0')
  },
  set_state_value (state, val) {
    state.stateValue = val
  }
}

export default mutations
