import React from 'react'
import './Header.scss'

interface HeaderProps {
  test?: string
}

export const Header: React.FC<HeaderProps> = ({ test }) => {
  return (
    <div className="Header">
      <button className="Button1">a2</button>
      <button className="Button1">a1</button>
      <button className="Button1">Stock</button>
    </div>
  )
}
