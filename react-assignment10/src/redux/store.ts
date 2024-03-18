import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import logger from "redux-logger"

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  
  