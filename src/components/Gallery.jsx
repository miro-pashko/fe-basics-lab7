import React from 'react'

import GoodsCard from './GoodsCard'

import helmet from '../assets/goods/helmet.svg'
import mouse from '../assets/goods/mouse.svg'
import keyboard from '../assets/goods/keyboard.svg'
import headset from '../assets/goods/headset.svg'
import gloves from '../assets/goods/gloves.svg'
import bottle from '../assets/goods/bottle.svg'

// Дані товарів (завдання 2): фото, назва, ціна
const goods = [
  { id: 1, photo: helmet, name: 'Велосипедний шолом', price: 1450 },
  { id: 2, photo: mouse, name: 'Ігрова миша', price: 1190 },
  { id: 3, photo: keyboard, name: 'Механічна клавіатура', price: 2890 },
  { id: 4, photo: headset, name: 'Ігрова гарнітура', price: 2150 },
  { id: 5, photo: gloves, name: 'Велосипедні рукавиці', price: 620 },
  { id: 6, photo: bottle, name: 'Велосипедна пляшка', price: 240 },
]

// Галерея товарів: для кожного товару створюється компонент GoodsCard
function Gallery() {
  return (
    <section className="gallery">
      <h2>Галерея товарів</h2>
      <div className="gallery-grid">
        {goods.map((item) => (
          <GoodsCard key={item.id} photo={item.photo} name={item.name} price={item.price} />
        ))}
      </div>
    </section>
  )
}

export default Gallery
