module.exports = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/creator',
        permanent: true
      }
    ]
  }
}
