import React from 'react'

import Image from './Image'

const IMAGE_SRC =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Rialto_Bridge_Grand_Canal.jpg?width=800'
const IMAGE_ALT = 'Міст Ріальто та Гранд-канал у Венеції'
const CITY_URL = 'https://www.comune.venezia.it/'

const START_WIDTH = 800
const STEP = 100
const MIN_WIDTH = 100
const MAX_WIDTH = 1600

// Компонент-клас: основний вміст сторінки (завдання 1).
// Стан: колірні схеми двох клікабельних абзаців і список зображень.
class Content extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // 0 — колір не змінювався, 1 — схема A, 2 — схема B
      birthScheme: 0,
      educationScheme: 0,
      images: [{ id: 1, width: START_WIDTH }],
      nextId: 2,
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleZoomIn = this.handleZoomIn.bind(this)
    this.handleZoomOut = this.handleZoomOut.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  // Перший клік — схема A, далі схеми A і B чергуються
  nextScheme(current) {
    return current === 1 ? 2 : 1
  }

  schemeClass(scheme) {
    if (scheme === 1) return 'clickable scheme-a'
    if (scheme === 2) return 'clickable scheme-b'
    return 'clickable'
  }

  // Додати нове зображення
  handleAdd() {
    this.setState((state) => ({
      images: [...state.images, { id: state.nextId, width: START_WIDTH }],
      nextId: state.nextId + 1,
    }))
  }

  // Змінити ширину останнього зображення
  changeLastWidth(delta) {
    // Перевірка поза setState, щоб alert не викликався двічі в StrictMode
    if (this.state.images.length === 0) {
      alert('Зображень немає. Спочатку натисніть «Додати».')
      return
    }
    this.setState((state) => {
      const images = state.images.slice()
      const last = images[images.length - 1]
      const width = Math.min(Math.max(last.width + delta, MIN_WIDTH), MAX_WIDTH)
      images[images.length - 1] = { ...last, width }
      return { images }
    })
  }

  handleZoomIn() {
    this.changeLastWidth(STEP)
  }

  handleZoomOut() {
    this.changeLastWidth(-STEP)
  }

  // Видалити останнє зображення
  handleDelete() {
    if (this.state.images.length === 0) {
      alert('Зображень для видалення немає.')
      return
    }
    this.setState((state) => ({ images: state.images.slice(0, -1) }))
  }

  render() {
    return (
      <main>
        {/* Елемент №2 — клік змінює колір фону й тексту */}
        <p
          id="birth"
          className={this.schemeClass(this.state.birthScheme)}
          onClick={() =>
            this.setState((s) => ({ birthScheme: this.nextScheme(s.birthScheme) }))
          }
        >
          Дата народження: 09.08.2006, місце народження – м. Київ.
        </p>

        {/* Елемент №3 (наступний) — клік також змінює колір фону й тексту */}
        <p
          className={this.schemeClass(this.state.educationScheme)}
          onClick={() =>
            this.setState((s) => ({ educationScheme: this.nextScheme(s.educationScheme) }))
          }
        >
          Освіта: Київський природничо-науковий ліцей № 145, м. Київ;
          <br />
          Національний технічний університет України «Київський політехнічний інститут
          імені Ігоря Сікорського», м. Київ.
        </p>

        <p>Хобі:</p>
        <ul>
          <li>Трейдинг;</li>
          <li>Комп’ютерні ігри;</li>
          <li>Їзда на велосипеді.</li>
        </ul>

        <p>Улюблені фільми:</p>
        <ol>
          <li>«Форсаж 7»;</li>
          <li>«Таксі 3»;</li>
          <li>«Термінатор».</li>
        </ol>

        <p>
          Венеція (італ. Venezia) — місто на північному сході Італії, адміністративний
          центр регіону Венето. Вона розташована на понад ста невеликих островах
          Венеціанської лагуни, з’єднаних між собою сотнями мостів. Замість звичних вулиць
          тут — канали, головний з яких, Гранд-канал, перетинає місто у формі оберненої
          літери S. Основним транспортом слугують гондоли, водні таксі та річкові
          трамвайчики-вапорето. Протягом століть Венеція була столицею могутньої морської
          республіки та важливим торговельним центром між Європою і Сходом. Сьогодні місто
          відоме площею Святого Марка, Палацом дожів, мостом Ріальто, щорічним карнавалом і
          кінофестивалем, а його історичний центр разом із лагуною внесено до Списку
          світової спадщини ЮНЕСКО.
        </p>

        <div id="image-container">
          {this.state.images.map((image) => (
            <Image
              key={image.id}
              src={IMAGE_SRC}
              alt={IMAGE_ALT}
              width={image.width}
              href={CITY_URL}
            />
          ))}
        </div>

        <div className="controls">
          <button type="button" onClick={this.handleAdd}>Додати</button>
          <button type="button" onClick={this.handleZoomIn}>Збільшити</button>
          <button type="button" onClick={this.handleZoomOut}>Зменшити</button>
          <button type="button" onClick={this.handleDelete}>Видалити</button>
        </div>
      </main>
    )
  }
}

export default Content
