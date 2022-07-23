import React from 'react'

export const H1 = ({text, className}) => {
  return (
    <h1 className={`font-poppins font-bold text-xl md:text-4xl ${className}`}>{text}</h1>
  )
}
