import React from 'react'

// Компонент-функція: зображення з посиланням на сайт міста.
// Параметри передаються через props: src, alt, width, href.
function Image({ src, alt, width, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" title="Офіційний сайт міста Венеція">
      <img className="city-image" src={src} alt={alt} style={{ width: `${width}px` }} />
    </a>
  )
}

export default Image
