import type { AppProps } from 'next/app'

// Redux
import { Provider } from 'react-redux'
import store from '../store/configureStore'

// Style
import { CssBaseline } from "@mui/material";
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  )
}

export default MyApp
