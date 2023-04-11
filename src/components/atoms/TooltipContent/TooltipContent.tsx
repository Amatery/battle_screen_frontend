import React, { ReactElement } from 'react'
import { Button } from 'antd'
import './styles.css'
import { useAppDispatch, useAppSelector } from '../../../hooks/appHooks'
import { isFriendRequestLoading } from '../../../store/teamSlice/team.selectors'
import { PutFriend } from '../../../store/teamSlice/team.thunks'

interface ITooltipContentProps {
  id: string
  nickname: string;
  kills: number;
  deaths: number;
  activeFriendRequest: boolean
}

export function TooltipContent({
  id,
  kills,
  deaths,
  activeFriendRequest,

}: ITooltipContentProps): ReactElement {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(isFriendRequestLoading)
  const handleFriendRequest = (): void => {
    dispatch(PutFriend({
      id,
      activeFriendRequest: true,
    }))
  }
  return (
    <div className='tooltip-container'>
      <span>Kills: {kills}, Deaths: {deaths}</span>
      <Button
        className='friend-request-button'
        onClick={handleFriendRequest}
        loading={isLoading}
        disabled={activeFriendRequest}
        ghost
      >
        {!activeFriendRequest ? 'Send Friend Request' : 'Friend Request Pending'}
      </Button>
    </div>
  )
}
