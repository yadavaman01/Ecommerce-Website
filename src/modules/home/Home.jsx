import React from 'react'
import Hometop from './components/home/Hometop'
import Category from './components/category/Category'
import Limitertimeoffer from './components/home/limitedtimeoffer/Limitertimeoffer'
import Topdeal from './components/topdeal/Topdeal'
import Todayonly from './components/todayonly/Todayonly'
import Schooltoppicks from './components/schooltoppicks/Schooltoppicks'
import Lastsection from './components/lastsection/Lastsection'

function Home() {
  return (
    <div>
      <Hometop/>
      <Category/>
      <Limitertimeoffer/>
      <Topdeal/>
      <Todayonly/>
      <Schooltoppicks/>
      <Lastsection/>
    </div>
  )
}

export default Home
