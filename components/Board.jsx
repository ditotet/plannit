import boardStyles from '../styles/Board.module.css'

import TicketContainer from './TicketContainer'

const Board = ({ tickets }) => {
    return (
        <div className={ boardStyles.container }>
            <h2>Board</h2>
            <TicketContainer tickets={ tickets }/>
        </div>
    )
  }
  
  export default Board
  