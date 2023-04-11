import { createAsyncThunk } from '@reduxjs/toolkit'
import { teamsRequests } from '../../api/teams.requests'
import { ITeamsList } from './team.slice'

export const getTeams = createAsyncThunk(
  'teams/getTeams',
  async (): Promise<{ teams: ITeamsList }> => {
    const { data } = await teamsRequests.teamsGet()
    return { teams: data }
  },
)


export const PutFriend = createAsyncThunk(
  'teams/putFriend',
  async ({
    id,
    activeFriendRequest,
  }: { id: string, activeFriendRequest: boolean }): Promise<any> => {
    await teamsRequests.friendRequestPut(id, activeFriendRequest)
    return {
      id,
      activeFriendRequest,
    }
  },
)
