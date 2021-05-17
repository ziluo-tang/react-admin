import JSONP from 'jsonp'
import axios from 'axios'

export const login = (param) => axios.post('/login', param)

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JSONP(
        options.url,
        {
          param: 'callback',
        },
        function (err, response) {
          if (response.status === 'success') {
            resolve(response)
          } else {
            reject(response.message)
          }
        }
      )
    })
  }
}
