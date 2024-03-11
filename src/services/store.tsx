import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from "./reducers"
import { RTKSlice } from "./RTK"

export const store = configureStore({
  reducer: {
    CounterReducer,
    [RTKSlice.reducerPath]: RTKSlice.reducer,
  },
  middleware: (getAllMiddleware) =>
    getAllMiddleware().concat(RTKSlice.middleware),
})
