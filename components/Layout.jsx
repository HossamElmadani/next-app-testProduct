import React from 'react'
import Navbar from './Navbar'

function Layout(props) {
  return (
    <>
        <Navbar/>
        {props.children}
        <footer className='bg-dark text-white p-2 text-center '>Footer &copy; 2023</footer>
    </>
  )
}

export default Layout