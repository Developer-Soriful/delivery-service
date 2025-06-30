import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div >
      <header className='w-11/12 mx-auto'>
        <Header />
      </header>
      <main className='w-11/12 mx-auto'>
        <Outlet />
      </main>
      <footer className='w-11/12 mx-auto'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
