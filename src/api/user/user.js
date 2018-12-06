
import axios from '../../lib/api.request'

export const userApi = {
  getUserInfo: function (urlData) {
    return axios.request({
      method: 'post',
      data: urlData,
      url: 'get-user-info'
    })
  }
}
