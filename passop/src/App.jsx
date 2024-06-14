import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Navbar />
      <div className='bg-green-50'>


      <Manager />
      </div>
     
      <Footer />
    </>
  )
}

export default App
