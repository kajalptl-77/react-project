import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './views/Login'
import Home from './views/Home'
import Signup from './views/Signup'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />


      </Routes>




    </>
  )
}

export default App
