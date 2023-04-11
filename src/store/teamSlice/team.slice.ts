import { createSlice, current } from '@reduxjs/toolkit'
import { IPlayer } from '../../types/types'
import { getTeams, PutFriend } from './team.thunks'

export interface ITeamsList {
  firstTeam: IPlayer[]
  secondTeam: IPlayer[]
}

export interface IPlayerState {
  teamsList: ITeamsList
  isTeamsLoading: boolean
  isFriendRequestPending: boolean
}

const initialState: IPlayerState = {
  teamsList: {
    firstTeam: [],
    secondTeam: [],
  },
  isTeamsLoading: false,
  isFriendRequestPending: false,
}

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getTeams.pending, (state: IPlayerState) => {
      state.isTeamsLoading = true
    })
    addCase(getTeams.fulfilled, (state: IPlayerState, { payload }) => {
      state.teamsList = { ...state.teamsList, ...payload.teams }
      state.isTeamsLoading = false
    })
    addCase(getTeams.rejected, (state: IPlayerState) => {
      state.isTeamsLoading = false
    })
    addCase(PutFriend.pending, (state: IPlayerState) => {
      state.isFriendRequestPending = true
    })
    addCase(PutFriend.fulfilled, (state: IPlayerState, { payload }) => {
      const foundPlayer = current(state.teamsList.firstTeam)
        .concat(current(state.teamsList.secondTeam)).map(player => {
          if (player._id === payload.id) {
            return {
              ...player,
              activeFriendRequest: payload.activeFriendRequest,
            }
          }
          return player
        })
      state.teamsList =
        {
          ...state.teamsList,
          firstTeam: foundPlayer.slice(0, 50),
          secondTeam: foundPlayer.slice(50, 100),
        }
      state.isFriendRequestPending = false
    })
    addCase(PutFriend.rejected, (state: IPlayerState) => {
      state.isFriendRequestPending = false
    })
  },
})

export default teamsSlice.reducer
