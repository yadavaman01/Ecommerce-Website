import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './modules/home/Home'
import Contact from './modules/contact/Contact'
import Nav from './modules/nav/Nav'

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
