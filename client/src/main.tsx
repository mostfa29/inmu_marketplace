import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/main.css'
import { Provider } from "react-redux";
import  configureAppStore  from './store/index.ts';

const store=configureAppStore()
console.log(store)



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
)
