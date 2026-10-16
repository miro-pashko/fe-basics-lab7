import React from 'react'

// Картка товару. Параметри передаються через props: photo, name, price.
function GoodsCard({ photo, name, price }) {
  return (
    <article className="goods-card">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p className="price">{price} грн</p>
    </article>
  )
}

export default GoodsCard
