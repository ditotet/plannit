const tickets = [
    {
        id: '0',
        creationTimestamp: 1622538041,
        assignee: 'dito',
        title: 'Fix bug A',
        description: 'We need to fix bug A',
        status: 2
    },
    {
        id: '1',
        creationTimestamp: 1622538090,
        assignee: 'bajo',
        title: 'Fix bug B',
        description: 'We need to fix bug B',
        status: 2
    },
    {
        id: '2',
        creationTimestamp: 1622538097,
        assignee: 'apkhaza',
        title: 'Add feature C',
        description: 'We need to add feature C',
        status: 2
    }
]

const getAllTickets = () => {
    return tickets
}

const getTicketById = (id) => {
    const ticketsFiltered = tickets.filter(ticket => ticket.id === id)

    if (ticketsFiltered.length === 1) {
        return ticketsFiltered[0]
    } else {
        return null
    }
}

const createTicket = (ticketInfo) => {
    const ticket = ticketInfo
    ticket.id = (Math.round(Math.random() * 1000)).toString()
    tickets.push(ticket)
    return ticket
}

const updateTicket = (id, ticketInfo) => {
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === id) {
            const updatedTicket = {
                id,
                ...ticketInfo
            }
            tickets[i] = updatedTicket
            return updatedTicket
        }
    }
    return null
}

const deleteTicket = (id) => {
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === id) {
            const ticketToDelete = tickets[i]
            tickets.splice(i, 1)
            return ticketToDelete
        }
    }
    return null
}

module.exports = {
    getAllTickets,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket
}