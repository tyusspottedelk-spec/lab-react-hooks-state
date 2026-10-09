import React from 'react'

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button type="button" onClick={onToggle}>
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle
