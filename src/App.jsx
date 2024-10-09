import React, { useState } from 'react'
import Header from './components/header'
import Hero from './components/hero'

const App = () => {
  return (
    <section className='w-full h-[100vh] p-7 px-20 before:!opacity-40 select-none' id='main-bg'>
      <Header/>
      <Hero/>
    </section>
  )
}

export default App