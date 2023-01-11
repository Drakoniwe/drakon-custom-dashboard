import React from 'react'
import { Outlet } from 'react-router-dom'

interface MainProps {
  test?: string
}

export const Main: React.FC<MainProps> = ({ test }) => {
  // Header goes here before outlet
  return (
    <>
      <Outlet />
    </>
  )
}
