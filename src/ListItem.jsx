import React, { useState } from 'react'
import { BsCheck } from 'react-icons/bs'
import { FiChevronDown, FiCheck } from 'react-icons/fi'
const ListItem = ({ text, handleClick }) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <li
      onClick={() => {
        handleClick(text)
        setIsChecked(!isChecked)
      }}
      className='relative item flex items-center cursor-pointer h-10 hover:bg-[#EFEFEF] transition-all duration-200 ease-in-out px-4'
    >
      <span className='checkbox border border-[#B6B6B6]  mr-3 h-4 w-4 flex justify-center items-center'>
        <BsCheck className=' text-white check-icon' />
      </span>
      {isChecked && (
        <span className='absolute bg-blue-500 text-white'>
          <FiCheck />
        </span>
      )}
      <span className='item-text'>{text}</span>
    </li>
  )
}

export default ListItem
