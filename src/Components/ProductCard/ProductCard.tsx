import React from 'react'
import './ProductCard.scss'

interface ProductCardProps {
  semen?: number
}

export const ProductCard: React.FC<ProductCardProps> = ({ semen }) => {
  console.log(typeof semen)

  return (
    <div className="ProductCard">
      <img src="https://picsum.photos/id/27/1000/1000" />
    </div>
  )
}
