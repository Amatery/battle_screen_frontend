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
  winnerTeam: string
}

const initialState: IPlayerState = {
  teamsList: {
    firstTeam: [],
    secondTeam: [],
  },
  isTeamsLoading: false,
  isFriendRequestPending: false,
  winnerTeam: '',
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
      const checkTeamOne = state.teamsList.firstTeam.filter(player => player.state === 'dead').length
      const checkTeamTwo = state.teamsList.secondTeam.filter(player => player.state === 'dead').length
      state.winnerTeam = checkTeamOne > checkTeamTwo ? 'Team 1' : 'Team 2'
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
