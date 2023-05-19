import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import './Components/NavBar/NavBar.css'
import RowPost from './Components/RowPost/RowPost'
import {Action,Originals,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from './urls'


function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost url={Originals} title='Netflix Originals'/>
      <RowPost url={Action} title='Action' isSmall/>
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall/>
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall/>
      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall/>
      <RowPost url={Documentaries} title='Documentaries' isSmall/>
    </>
  )
}

export default App
