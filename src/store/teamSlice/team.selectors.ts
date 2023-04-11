import { RootState } from '../store'
import { ITeamsList } from './team.slice'

export const teamsSelector = (state: RootState): ITeamsList => {
  return state.teams.teamsList
}

export const isFriendRequestLoading = (state: RootState): boolean => {
  return state.teams.isFriendRequestPending
}


export const winnerTeam = (state: RootState): string => {
  return state.teams.winnerTeam
}


export const isTeamsLoading = (state: RootState): boolean => {
  return state.teams.isTeamsLoading
}
