
import axios from 'axios'


const httpInstall = {
  install: (Vue: any, options: any) => {
    Vue.prototype.$http = axios.create({
      baseURL: 'http://localhost:11111/admin/api'
    })
  }
}

export default httpInstall;
