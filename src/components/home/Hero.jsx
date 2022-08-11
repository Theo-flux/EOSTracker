import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Div } from '../../shared'


export default function Hero(){
  
  return (
    <Section className={`bg-white`}>
      <Div>
        <div className='pt-16'>
            <div className='text-center'>
              <h1 className='max-w-[750px] mx-auto w-full text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-poppins font-bold'><span className='text-blue-500'>EOS</span> Transaction Tracker</h1>
              <p className='font-poppins text-xs sm:text-sm md:text-lg text-coolGray w-full mt-4 mb-12 mx-auto max-w-[500px]'>
                Get all transactions relating to an EOS account from just a click of a button. <span className='text-blue-500'>Get more by doing less.</span>
              </p>
 
              <Link className='py-4 px-8 bg-blue-500 text-xl cursor-pointer text-white rounded transition-all duration-500 ease-in-out hover:border hover:border-blue-500 hover:bg-transparent hover:text-blue-500' to="/data">Get Started</Link>
            </div>
        </div>
      </Div>
    </Section>
  )
}