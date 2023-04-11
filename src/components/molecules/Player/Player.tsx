import React, { ReactElement } from 'react'
import { Tooltip } from 'antd'
import './styles.css'
import TooltipContent from '../../atoms/TooltipContent/TooltipContent'

interface IPlayerProps {
  _id: string;
  nickname: string;
  score: number;
  kills: number;
  deaths: number;
  state: string;
  activeFriendRequest: boolean
}

function Player({
  _id,
  nickname,
  score,
  kills,
  deaths,
  state,
  activeFriendRequest,
}: IPlayerProps): ReactElement {

  return (

    <Tooltip title={<TooltipContent
      id={_id} nickname={nickname}
      kills={kills}
      deaths={deaths}
      activeFriendRequest={activeFriendRequest} />}
    >
      <div className={`player ${state}`} key={nickname}>
        <div className='player-nickname'>{nickname}</div>
        <div className='player-score'>Score: {score}</div>
        <div className={`player-state ${state}`}>{state}</div>
      </div>
    </Tooltip>
  )
}

export default Player
