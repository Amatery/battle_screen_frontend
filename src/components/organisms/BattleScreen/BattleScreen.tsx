import React, { ReactElement, useLayoutEffect } from 'react'
import { Card } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../hooks/appHooks'
import { teamsSelector, winnerTeam } from '../../../store/teamSlice/team.selectors'
import { getTeams } from '../../../store/teamSlice/team.thunks'
import { IPlayer } from '../../../types/types'
import { CardTitle } from '../../atoms/CardTitle/CardTitle'
import Player from '../../molecules/Player/Player'
import './styles.css'

function BattleScreen(): ReactElement {
  const dispatch = useAppDispatch()
  const teams = useAppSelector(teamsSelector)
  const winners = useAppSelector(winnerTeam)

  useLayoutEffect(() => {
    dispatch(getTeams())
  }, [dispatch])

  return (
    <div className='battle-screen'>
      {(Object.keys(teams).length > 0) && (
        <div className='teams-container'>
          <Card title={<CardTitle title='Team 1' status={winners === 'Team 1' ? 'Won' : 'Lose'} />} className='team'>
            {teams.firstTeam.map((player: IPlayer) => (
              <Player key={player._id} {...player} />
            ))}
          </Card>
          <Card title={<CardTitle title='Team 1' status={winners === 'Team 2' ? 'Won' : 'Lose'} />} className='team'>
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
