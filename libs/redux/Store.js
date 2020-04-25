import { configureStore } from '@reduxjs/toolkit';
import reducers from './Reducers';
// import { isProd } from '../../config/Config';

 const store = configureStore({
  reducer: reducers,
});

export default store;

export default function configureAppStore(preloadedState = {}) {
  return configureStore({
    reducer: reducers,
    preloadedState,
 //   devTools: !isProd,
  });
}
