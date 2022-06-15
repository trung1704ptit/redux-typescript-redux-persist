import type { AppProps } from 'next/app'

// Redux
import { Provider } from 'react-redux'
import store from '../store/configureStore'

// Style
import { CssBaseline } from "@mui/material";
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
