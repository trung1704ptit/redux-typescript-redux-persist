import type { AppProps } from 'next/app'

// Redux
import { Provider } from 'react-redux'
import store from '../store/configureStore'

// Style
import { BaseCSS } from 'styled-bootstrap-grid'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <BaseCSS />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
