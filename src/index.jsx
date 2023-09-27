import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import storeSlice from './store/Slice/RootReducer';
import store from './store/index';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
    {/* <Provider store={store}> */}
    <Provider store={storeSlice}>
      <App />
    </Provider>
    {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
