import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Slider from './components/slider/Slider'

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Homepage />} />
        <Route path='/slider' element={<Slider />} />
      </Routes>
    </>
  )
}

export default App
