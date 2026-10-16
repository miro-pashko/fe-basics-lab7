# Лабораторна робота №7 — Пашко М. П., ІП-41, варіант 1

React-застосунок: завдання 1 (лаб. №4 на React: компоненти `Header`, `Image` — функції, `Content` — клас) і завдання 2 (галерея з 6 товарів на основі `GoodsCard` та props).

## Що потрібно встановити

[Node.js](https://nodejs.org) (версія LTS, не нижче 20.19) разом із npm. Перевірити: `node -v` і `npm -v`.

## Варіант А. Запуск готового проєкту

```bash
cd lab7
npm install
npm run dev
```

Після `npm run dev` відкрийте в браузері адресу, яку виведе термінал (зазвичай `http://localhost:5173`). Зупинити сервер: `Ctrl + C`. Наступного разу достатньо `npm run dev`.

## Варіант Б. Створення React-проєкту з нуля

Інструмент `create-react-app`, який згадується в методичці, більше не підтримується, тому проєкт створюється через Vite:

```bash
npm create vite@latest lab7 -- --template react
cd lab7
npm install
npm run dev
```

Потім замініть вміст папки `src` файлами з цього проєкту (`App.jsx`, `main.jsx`, `index.css`, папки `components` та `assets`) і файл `index.html` у корені — сторінка оновиться автоматично.

## Збірка для публікації

```bash
npm run build     # готовий сайт з’явиться в папці dist
npm run preview   # локальний перегляд зібраного сайту
```

Для GitHub Pages у файлі `vite.config.js` додайте `base: '/назва-репозиторію/'`, зберіть проєкт і опублікуйте вміст папки `dist`.

## Структура проєкту

```
index.html                  сторінка-макет із <div id="root">
src/main.jsx                точка входу, монтує <App />
src/App.jsx                 основний компонент
src/index.css               стилі
src/components/Header.jsx   компонент-функція: заголовок
src/components/Content.jsx  компонент-клас: вміст сторінки, кнопки, стан
src/components/Image.jsx    компонент-функція: зображення (props)
src/components/Gallery.jsx  галерея товарів (масив даних)
src/components/GoodsCard.jsx картка товару (props: photo, name, price)
src/assets/goods/           зображення товарів (SVG)
```
