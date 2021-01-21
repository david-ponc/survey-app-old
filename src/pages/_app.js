import { GlobalStyle } from 'styles/globals'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <div id="modal-container" />
    </>
  )
}

export default MyApp
