export default {
    baseURL: process.env.GITHUB_API || 'https://api.github.com',
    headers: {
      common: {
        accept: 'application/vnd.github.v3+json'
      }
    },
    mode: {
      cors: true
    }
}
