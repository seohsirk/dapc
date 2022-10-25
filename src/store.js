import { configureStore, createSlice } from '@reduxjs/toolkit'
import data from './data/data.js';

let user = createSlice({
  name: 'user',
  initialState: 'kim',
  reducers: {
    changeName(state) {
      return 'john' + state
    },
  }
})

export let { changeName } = user.actions

let stock = createSlice({
  name: 'stock',
  initialState: [10,20,30]
})

let item = createSlice({
  name: 'item',
  initialState: data
})

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    item: item.reducer,
  }
}) 