import { server } from '../config'

import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import Board from '../components/Board'
import ProjectList from '../components/ProjectList'

const Home = ({ tickets }) => {
  return (
      <>
          <Navbar />
          <div className={ styles.container }>
              <ProjectList />
              <Board tickets={ tickets }/>
          </div>
      </>
  )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/tickets`)
    const tickets = await res.json()

    return {
      props: {
        tickets
      }
    }
  }

export default Home