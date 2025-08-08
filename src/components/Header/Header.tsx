import React, { useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

interface IHeaderProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  datesArray: string[];
}

const Header: React.FC<IHeaderProps> = ({ selectedDate, setSelectedDate, datesArray }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value)
  }

  return (
    <header className='sticky top-0 z-50 w-full bg-[var(--header-bg-light)] transition-colors duration-[var(--transition-speed)] ease-in-out dark:bg-[var(--header-bg-dark)] shadow-md'>
      <div className='max-w-[1300px] mx-auto px-4'>
        <div className='flex justify-between items-start flex-col sm:flex-row sm:items-center gap-4'>
          {/* Title */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-3xl font-bold text-[var(--text-light)] m-0 transition-colors duration-[var(--transition-speed)] ease-in-out dark:text-[var(--text-dark)]">
              Portfolio Snapshot
            </h1>
          </div>
          {/* Date Picker */}
          <div className='flex flex-row w-full justify-between md:w-auto sm:flex-row items-start sm:items-center gap-4'>
            <div className="flex items-center justify-center gap-2">
              <span className='text-sm text-[var(--muted-foreground)] hidden md:block'>As on Date:</span>
              <select
                className="w-[150px] p-2 rounded hover:bg-[var(--hover-bg-light)] dark:hover:bg-[var(--hover-bg-dark)] cursor-pointer"
                value={selectedDate}
                onChange={(e) => handleDateChange(e)}
              >
                {datesArray.map((date) => (
                  <option className='dark:bg-[var(--header-bg-dark)]' key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>
            {/* Download PDF Button */}
            <div className=' justify-center'>
              <button className='p-2 bg-transparent rounded-md hover:bg-[var(--hover-bg-light)] dark:hover:bg-[var(--hover-bg-dark)] cursor-pointer'>Donwload PDF</button>
            </div>
            {/* Dark Mode Toggle */}
            <div className='w-8 flex justify-end'>
              <button
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                onClick={toggleDarkMode}
                className="p-1 rounded-md text-[var(--text-light)] bg-transparent border-none cursor-pointer transition-all duration-[var(--transition-speed)] ease-in-out hover:bg-[var(--hover-bg-light)] dark:text-[var(--text-dark)] dark:hover:bg-[var(--hover-bg-dark)]"
              >
                {darkMode ? (
                  <FiSun className="w-6 h-6" />
                ) : (
                  <FiMoon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header