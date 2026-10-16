import React from 'react'

import Header from './components/Header'
import Content from './components/Content'
import Gallery from './components/Gallery'

// Основний компонент: завдання 1 (Header, Content, Image) і завдання 2 (галерея товарів)
function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Gallery />
    </div>
  )
}

export default App
