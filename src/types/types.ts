export interface IPlayer {
  _id: string
  nickname: string
  score: number
  kills: number
  deaths: number
  state: string
  activeFriendRequest: boolean
}

export interface ITeamsList {
  firstTeam: IPlayer[]
  secondTeam: IPlayer[]
}
