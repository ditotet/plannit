import ticketContainerStyles from '../styles/TicketContainer.module.css'

import TicketColumn from './TicketColumn'

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'


const TicketContainer = ({ tickets }) => {
    const groupTicketsByStatus = (tickets) => {
        const ticketsGrouped = [
            [],
            [],
            [],
            []
        ]
        
        tickets.forEach((ticket) => {
            const { status } = ticket 
            ticketsGrouped[status].push(ticket)
        })
        
        return ticketsGrouped
    }
    
    const [ ticketsGrouped, setTicketsGrouped ] = useState(groupTicketsByStatus(tickets))
    
    const onDragEnd = (result, tickets, setTickets) => {
        const { source, destination } = result
    
        console.log('result', result)
        console.log('tickets', tickets)
    
        if (destination) {
            const sourceId = parseInt(source.droppableId)
            const sourceIndex = source.index
            const destinationId = parseInt(destination.droppableId)
            const destinationIndex = destination.index

            const [ deleted ] = ticketsGrouped[sourceId].splice(sourceIndex, 1)
            console.log(sourceIndex, destinationIndex)
            ticketsGrouped[destinationId].splice(destinationIndex, 0, deleted)

            setTicketsGrouped(ticketsGrouped)
        }
        
    }

    return (
        <div className={ ticketContainerStyles.container }>
            <DragDropContext
                onDragEnd={result => onDragEnd(result, tickets, null)}
            >
                <TicketColumn columnId='0' title='To Do' ticketColumn={ ticketsGrouped[0] }/>
                <TicketColumn columnId='1' title='In Progress' ticketColumn={ ticketsGrouped[1] } />
                <TicketColumn columnId='2' title='QA' ticketColumn={ ticketsGrouped[2] } />
                <TicketColumn columnId='3' title='Done' ticketColumn={ ticketsGrouped[3] } />
            </ DragDropContext>
        </div>
    )
}
  
  export default TicketContainer
  