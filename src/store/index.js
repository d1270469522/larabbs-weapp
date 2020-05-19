import Vuex from '@wepy/x';
import user from './modules/user'
import notification from './modules/notification'

export default new Vuex.Store({
  modules: {
    user,
    notification
  }
})
