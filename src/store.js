import { configureStore, createSlice } from '@reduxjs/toolkit'
// import data from './data/data.js';
import item from './store/itemSlice.js';

// let item = createSlice({
//   name : 'item',
//   initialState : data,
//   reducers: {
//     increase(state, action) {
//       state.find( e => e.article_id === action.payload).title = 'unknown'
//     }
//   }
// });



export default configureStore({
  reducer: { 
    item : item.reducer
  }
}) 