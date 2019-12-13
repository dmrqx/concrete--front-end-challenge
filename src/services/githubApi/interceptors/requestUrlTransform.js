export default function requestUrlTransform ({ transformParams, url, ...request }) {
  const transformUrl = () => url.match(/\/:[a-z0-9-_]+/gi).reduce((newUrl, match) => {
    return newUrl.replace(match, `/${transformParams[match.substring(2)]}`)
  }, url)

  return {
    ...request,
    ...(transformParams && { url: transformUrl() })
  }
}
