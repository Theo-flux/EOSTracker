import React from 'react'
import Logo from '../images/eos.svg'

function Navbar() {
  return (
    <nav className='py-4 fixed top-0 left-0 w-full bg-darkCoolGray-50'>
        <div className='w-11/12 mx-auto max-w-7xl flex items-center'>
            <figure className='w-[35px] h-[35px]'>
                <img className='w-[100%]' src={Logo} alt="logo" />
            </figure>
            <h1 className='ml-2 text-3xl font-poppins font-bold'>EOS</h1>
        </div>
    </nav>
  )
}

export default Navbar