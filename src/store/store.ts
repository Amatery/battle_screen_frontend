import { configureStore } from '@reduxjs/toolkit'
import teamsReducer from './teamSlice/team.slice'

const initialState = {}
export const store = configureStore({
  reducer: {
    teams: teamsReducer,
  },
  preloadedState: initialState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
