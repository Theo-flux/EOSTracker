import React from 'react'
import { H1 } from '../shared'

export default function Header(){
  return (
    <header className="w-4/5 mx-auto mt-24 max-w-[400px] bg-blue-500 border border-blue-500 p-6 mb-4">
        <div className="bg-white">
            <H1 className={`text-center p-2`} text="EOS TRX TRACKER" />
        </div>
    </header>
  )
}
