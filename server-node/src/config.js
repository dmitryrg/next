const isDev = process.env.NODE_ENV === 'dev'
const serverPrefix = '/public'
const backUrl = isDev ? 'http://localhost:3002' : 'http://roganov.space'
module.exports = {
  serverPrefix,
  backUrl: `${backUrl}${serverPrefix}`,
  frontUrl: isDev ? 'http://localhost:8080/#' : 'http://roganov.space/#',
  gitRepositoryUrl: 'https://github.com/dmitryrg/next',
  port: 3002
}
