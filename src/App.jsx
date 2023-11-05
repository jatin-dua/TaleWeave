import './index.css'
import GameScreen from './pages/GameScreen'
import HomePage from './pages/HomePage'
import RoomAccessPage from './pages/RoomAccessPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/access' element={<RoomAccessPage />}></Route>
        <Route path='/game' element={<GameScreen />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App