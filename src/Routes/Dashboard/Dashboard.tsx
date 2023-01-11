import React from 'react'
import { ProductCard } from '../../Components/ProductCard/ProductCard'
import './Dashboard.scss'
// interface DashboardProps {}

export const Dashboard: React.FC = () => {
  // what should be here:
  // Search bar
  // ...

  return (
    <div className="Dashboard" style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}> Steam News Finder</h1>
      <input placeholder="semen"></input>
      <ProductCard name="semen" surname="" />
    </div>
  )
}
