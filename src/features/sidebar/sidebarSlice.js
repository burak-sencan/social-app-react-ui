import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  brand: 'Brand1',
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    choseBrand: (state, action) => {
      state.brand = action.payload
    },
  },
})

export const { choseBrand } = sidebarSlice.actions

export default sidebarSlice.reducer
