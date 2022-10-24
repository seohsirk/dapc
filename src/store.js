import { configureStore, createSlice } from '@reduxjs/toolkit'
import data from './data/data.js';


let item = createSlice({
  name : 'item',
  initialState : data,
  reducers: {
    changeTitle(state) {
      return console.log(state.title);
    }
  }
});




export default configureStore({
  reducer: { 
    item : item.reducer
  }
}) 