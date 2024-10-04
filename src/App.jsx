import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './modules/home/home'
import Contact from './modules/contact/contact'
import Nav from './modules/nav/nav'

function App() {


  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/' element={<Contact/>}/> */}
      </Routes>
      
    </>
  )
}

export default App
