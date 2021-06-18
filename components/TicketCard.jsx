import ticketCardStyles from '../styles/TicketCard.module.css'

const TicketCard = ({ title, assignee }) => {
    return (
      <div className={ ticketCardStyles.container }>
        <h4>{ title }</h4>
        <p>Assigned to { assignee }</p>
      </div>
    )
  }
  
  export default TicketCard
  