import axios from 'axios'

import CONFIG from '@rosey/services/githubApi/config'
import { requestUrlTransform } from '@rosey/services/githubApi/interceptors'

const instance = axios.create(CONFIG)

instance.interceptors.request.use(requestUrlTransform)

export default instance
