import { githubApi } from '@rosey/services'
import endpoints from './endpoints'

export default Object.entries(endpoints).reduce(
    (requests, [request, url]) => ({
      ...requests,
      [request]: transformParams => {
        const hasParams = typeof transformParams === 'object' && !!Object.keys(transformParams).length

        return githubApi({
          url,
          ...(hasParams && { transformParams })
        })
      }
    }), {})
