import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../features/post/postSlice'
import sidebarReducer from '../features/sidebar/sidebarSlice'

export const store = configureStore({
  reducer: {
    post: postReducer,
    sidebar: sidebarReducer,
  },
})
