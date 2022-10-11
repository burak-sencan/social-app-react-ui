import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  brand: 'Brand1',
  sidebarCollapse: '',
  sidebarLink: '',
  openSummary: false,
  openPublish: false,
  openEngage: false,
  openListen: false,
  openReport: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    choseBrand: (state, action) => {
      state.brand = action.payload
    },
    choseSidebarCollapse: (state, action) => {
      state.sidebarCollapse = action.payload
    },
    choseSidebarLink: (state, action) => {
      state.sidebarLink = action.payload
    },
    openSummaryCollapse: (state, action) => {
      state.openSummary = action.payload
    },
    openPublishCollapse: (state, action) => {
      state.openPublish = action.payload
    },
    openEngageCollapse: (state, action) => {
      state.openEngage = action.payload
    },
    openListenCollapse: (state, action) => {
      state.openListen = action.payload
    },
    openReportCollapse: (state, action) => {
      state.openReport = action.payload
    },
    // handleWelcomeButton: (state) => {
    //   state.openPublish= true,
    //   state.sidebarCollapse= "public",
    //   state.sidebarLink= "feed",
    // },
    handleWelcome: (state) => {
      state.brand = 'Brand3'
      state.openPublish = true
      state.sidebarCollapse = 'publish'
      state.sidebarLink = 'feed'
      console.log("deneme")
    },
  },
})

export const {
  choseBrand,
  choseSidebarCollapse,
  choseSidebarLink,
  openSummaryCollapse,
  openPublishCollapse,
  openEngageCollapse,
  openListenCollapse,
  openReportCollapse,
  handleWelcome,
} = sidebarSlice.actions

export default sidebarSlice.reducer
