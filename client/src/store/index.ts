import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {loggerMiddleware} from './middlewares/logger'
import rootReducer from './reducers/rootReducer'


export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    enhancers: []
  })
  return store
}
