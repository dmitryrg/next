module.exports = {
  backUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3002/public'
      : 'http://roganov.space/public',
  gitRepositoryUrl: 'https://github.com/dmitryrg/next'
}
