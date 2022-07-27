import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/eos.svg'
import {Nav, Section} from '../shared'

function Navbar() {
  return (
    <Section className="fixed top-0 left-0 w-full bg-darkCoolGray-50">
      <Nav>
        <div className=''>
          <Link to="/" className='flex items-center w-fit'>
            <figure className='w-[35px] h-[35px]'>
                <img className='w-[100%]' src={Logo} alt="logo" />
            </figure>
            <h1 className='ml-2 text-3xl font-poppins font-bold'>EOS</h1>
          </Link>
        </div>
      </Nav>
    </Section>
  )
}

export default Navbar