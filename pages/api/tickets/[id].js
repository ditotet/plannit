const {
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket
} = require('./db-utils')

export default (req, res) => {
    const {
        query: { id },
        method
    } = req

    const { body } = req
    
    switch (method) {
        case 'GET': {
            console.log(id)
            const ticket = getTicketById(id)
            if (ticket) {
                res.status(200).json(ticket)
            } else {
                res.status(404).json({ message: `Ticket with ID: ${id} was not found` })
            }
            break
        }
        case 'POST': {
            const {
                assignee,
                title,
                description,
                status
            } = body

            const ticketInfo = {
                assignee,
                title,
                description,
                status
            }
            
            const ticket = createTicket(ticketInfo)

            res.status(200).json(ticket)
            break
        }
        case 'PUT': {
            const {
                assignee,
                title,
                description,
                status
            } = body

            let ticketInfo = {
                assignee,
                title,
                description,
                status
            }

            ticketInfo = Object.keys(ticketInfo).filter(param => ticketInfo[param] !== undefined).reduce((obj, key) => {
                obj[key] = ticketInfo[key]
                return obj
            }, {})
            console.log(ticketInfo)

            const ticket = updateTicket(id, ticketInfo)

            if (ticket) {
                res.status(200).json(ticket)
            } else {
                res.status(404).json({ message: `Ticket with ID: ${id} was not found` })
            }
            break
        }
        case 'DELETE': {
            const ticket = deleteTicket(id)

            if (ticket) {
                res.status(200).json(ticket)
            } else {
                res.status(404).json({ message: `Ticket with ID: ${id} was not found` })
            }
            break
        }
    }
}
