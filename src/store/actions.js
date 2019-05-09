import { getAppName } from '@/api/app.js'

const actions = {
  /* updateAppName ({ commit }) {
    getAppName().then((res) => {
      console.log(res)
      const { info: { appName } } = res
      commit('changeAppName', appName)
      // commit('changeAppName', res.info.appName)
    }).catch(err => {
      console.log(err)
    })
  } */
  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('changeAppName', appName)
    } catch (err) {
      console.log(err)
    }
  }
}

export default actions
