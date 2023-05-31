import { useState } from 'react'
import './App.css'
import { FiChevronDown } from 'react-icons/fi'

import ListItem from './ListItem'
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState([])
  const data = [
    'Disease Management',
    'Disease Prevention',
    'Body Transformation',
    'Feel Better',
  ]
  const handleClick = text => {
    if (selected.includes(text)) {
      const newArr = selected.filter(t => t !== text)
      return setSelected(newArr)
    }
    setSelected([...selected, text])
    console.log(text)
  }
  console.log(selected)
  return (
    <>
      <div className='relative w-4/6  mt-6'>
        <label htmlFor=''>Select the category of your Health Goal</label>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='select-btn flex items-center justify-between h-12 px-4 mt-2 rounded-[4px] border border-[#B6B6B6]'
        >
          <span className='btn-text'>
            {selected.length > 1 ? 'Multiple Selected' : 'Select Language'}
          </span>
          <span className={`arrow-dwn ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            <FiChevronDown className='' />
          </span>
        </div>
        <ul className={`items mt-2 ${isOpen ? 'block' : 'hidden'} border`}>
          {data.map((text, index) => (
            <ListItem key={index} text={text} handleClick={handleClick} />
          ))}
        </ul>
        <ul>
          {selected.map((item, index) => (
            <li key={index}>
              {index + 1}: {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
