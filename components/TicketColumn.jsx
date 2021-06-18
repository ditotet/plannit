import ticketColumnStyles from '../styles/TicketColumn.module.css'

import TicketCard from './TicketCard'
import { Draggable, Droppable } from 'react-beautiful-dnd'


const TicketColumn = ({ title, ticketColumn, columnId }) => {
  return (
    <div className={ ticketColumnStyles.container }>
      <h3>{ title }</h3>
      <Droppable droppableId={ columnId } key={ columnId }>
        { (provided, snapshot) => (
          <div
            { ...provided.droppableProps }
            ref={ provided.innerRef }
          >
            { ticketColumn.map((ticket, index) => (
              <Draggable
                key={ ticket.id }
                draggableId={ ticket.id }
                index={ index }
              >
                { (provided, snapshot) => (
                  <div
                    ref={ provided.innerRef }
                    { ...provided.draggableProps }
                    { ...provided.dragHandleProps }
                  >
                    <TicketCard
                      title={ ticket.title }
                      description={ ticket.description }
                      assignee={ ticket.assignee }
                    />
                  </div>
                )}
              </Draggable> ))}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TicketColumn
