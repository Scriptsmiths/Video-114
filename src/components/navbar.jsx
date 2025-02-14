import React from 'react'

const navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-900 text-white py-1  '>
        <div className='logo'>
            <span className='font-bold text-xl mx-9'>iTASK</span>
        </div>
        <ul className="flex gap-8 pr-4">
            <li className='cursor-pointer hover:font-bold  transition-all '>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all '>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default navbar
