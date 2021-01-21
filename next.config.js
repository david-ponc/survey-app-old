module.exports = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/statistics',
        permanent: true
      }
    ]
  }
}
