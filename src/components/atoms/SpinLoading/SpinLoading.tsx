import React, { ReactElement } from 'react'
import { Spin } from 'antd'
import './styles.css'

function SpinLoading(): ReactElement {
  return (
    <div className='loader-container'>
      <Spin tip='Loading...' size='large' />
    </div>
  )
}

export default SpinLoading
