module.exports = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/creator',
        permanent: true
      }
    ]
  },
  images: {
    domains: ['lh3.googleusercontent.com']
  }
}
