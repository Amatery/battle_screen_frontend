import React, { ReactElement, useLayoutEffect } from 'react'
import { Card } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../hooks/appHooks'
import { teamsSelector } from '../../../store/teamSlice/team.selectors'
import { getTeams } from '../../../store/teamSlice/team.thunks'
import { IPlayer } from '../../../types/types'
import Player from '../../molecules/Player/Player'
import './styles.css'

function BattleScreen(): ReactElement {
  const dispatch = useAppDispatch()
  const teams = useAppSelector(teamsSelector)

  useLayoutEffect(() => {
    dispatch(getTeams())
  }, [dispatch])

  return (
    <div className='battle-screen'>
      {(Object.keys(teams).length > 0) && (
        <div className='teams-container'>
          <Card title='Team 1' className='team'>
            {teams.firstTeam.map((player: IPlayer) => (
              <Player key={player._id} {...player} />
            ))}
          </Card>
          <Card title='Team 2' className='team'>
            {teams.secondTeam.map((player: any) => (
              <Player key={player._id} {...player} />
            ))}
          </Card>
        </div>
      )}
    </div>
  )
}

export default BattleScreen
