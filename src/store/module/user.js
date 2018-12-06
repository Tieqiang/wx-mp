export default {
  state: {
    userInfo: undefined,
    jsapiSignature: undefined
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    setJsapiSignature (state, jsapiSignature) {
      state.jsapiSignature = jsapiSignature
    }
  },
  actions: {}
}
