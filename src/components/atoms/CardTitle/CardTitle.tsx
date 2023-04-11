import { ReactElement } from 'react'
import './styles.css'

interface ICardTitleProps {
  title: string
  status: string
}

function CardTitle({
  title,
  status,
}: ICardTitleProps): ReactElement {
  return (
    <div className='card-title'>
      <span>{title}</span>
      <span className={`team-status ${status.toLowerCase()}`}>{status}</span>
    </div>
  )
}

export default CardTitle
