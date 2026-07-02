import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import cartApp from './reducers/reducers.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';


let myStore = createStore(cartApp, composeWithDevTools());
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
