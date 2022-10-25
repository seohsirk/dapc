import { createSlice } from '@reduxjs/toolkit'
import data from '../data/data.js';


let item = createSlice({
  name : 'item',
  initialState : data,
  reducers: {
    increase(state, action) {
      state.find( e => e.article_id === action.payload).title = 'unknown'
    }
  }
});


export let { increase } = item.actions;

export default item;