import { AxiosResponse } from 'axios'
import { compile } from 'path-to-regexp'
import { axiosInstance } from './config/axiosInstance'
import { endpoints } from './config/endpoints'

export const teamsRequests = {
  async teamsGet(): Promise<AxiosResponse> {
    return await axiosInstance.get(endpoints.teams)
  },
  async friendRequestPut(id: string, activeFriendRequest: boolean): Promise<AxiosResponse> {
    return await axiosInstance.put(compile(endpoints.player)({ id }), {
      activeFriendRequest,
    })
  },
}
