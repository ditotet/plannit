const { getAllTickets } = require('./db-utils')

export default (req, res) => {
    const tickets = getAllTickets()
    res.status(200).json(tickets)
}
  