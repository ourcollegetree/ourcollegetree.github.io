import 'semantic-ui-css/semantic.min.css'
import '../public/static/css/styles.css';
import { Container } from 'semantic-ui-react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from '../libs/redux/Reducers'

export default function MyApp({ Component, pageProps }) {
   // const { reduxStore } = this.props;
   const store = createStore(reducers)
    return (
      <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
    
  )
}