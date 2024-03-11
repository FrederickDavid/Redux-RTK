import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  count: 0,
}

const reducers = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, {payload}) => {
      state.count += payload
    },
  },
})

export const { increment } = reducers.actions

export default reducers.reducer
