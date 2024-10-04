import React from 'react'
import Hometop from './components/home/hometop'
import Category from './components/category'
import Limitertimeoffer from './components/home/limitedtimeoffer/limitertimeoffer'
import Topdeal from './components/topdeal/topdeal'
import Todayonly from './components/todayonly/todayonly'
import Schooltoppicks from './components/schooltoppicks/schooltoppicks'
import Lastsection from './components/lastsection/lastsection'

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
