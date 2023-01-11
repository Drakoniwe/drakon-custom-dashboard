import React from 'react'
import './ProductCard.scss'

interface ProductCardProps {
  test?: number
  name: string
  surname: string
}

export const ProductCard: React.FC<ProductCardProps> = ({ test }) => {
  return (
    <div className="ProductCard">
      <img
        className="ProductCard-Image"
        src="https://picsum.photos/id/27/300/300"
      />
      <div className="ProductInfo">name price additional</div>
      <button>accept</button>
      <button>cancel</button>
    </div>
  )
}
