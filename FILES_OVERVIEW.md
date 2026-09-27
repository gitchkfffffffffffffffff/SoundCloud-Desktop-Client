# 📋 Обзор файлов проекта

## 🎯 Основные файлы приложения

### Конфигурация
```
main.js                     # Electron главный процесс
preload.js                  # Безопасный доступ к системе
electron-builder.yml        # Конфигурация сборки
package.json                # Зависимости и скрипты
```

### React приложение
```
public/
  ├── index.html            # HTML шаблон
  └── main.js               # Electron главный процесс

src/
  ├── App.js                # Главный компонент
  ├── App.css               # Основные стили (темная тема)
  ├── index.js              # Точка входа React
  └── index.css             # Глобальные стили
```

### Компоненты
```
src/components/
  ├── Header.js             # Поиск + авторизация
  ├── Sidebar.js            # Навигация + плейлисты
  ├── Player.js             # Плеер управления
  ├── SearchResults.js      # Результаты поиска
  └── Playlist.js           # Просмотр плейлиста
```

### Бизнес-логика
```
src/store/
  └── store.js              # Zustand хранилище состояния
  
src/api/
  └── soundcloud.js         # SoundCloud API клиент
  
src/db/
  └── database.js           # Dexie IndexedDB управление
```

## 📖 Документация

```
README.md                   # Полная документация
QUICKSTART.md              # Быстрый старт (5 мин)
SETUP_API.md               # Получение API ключей
PROJECT_STRUCTURE.md       # Структура проекта
FILES_OVERVIEW.md          # Этот файл
```

## 🔧 Конфигурационные файлы

```
.env.example               # Пример переменных окружения
.gitignore                 # Git ignore правила
electron-builder.yml       # Сборка для всех ОС
```

## 📊 Размеры файлов

| Файл | Размер | Описание |
|------|--------|---------|
| App.js | ~2.5 KB | Главный компонент |
| App.css | ~8 KB | Темная тема стили |
| store.js | ~5 KB | Zustand состояние |
| soundcloud.js | ~6 KB | API методы |
| database.js | ~4 KB | IndexedDB управление |
| Player.js | ~4 KB | Плеер компонент |
| Header.js | ~2 KB | Заголовок компонент |
| **Всего src/** | **~50 KB** | Весь исходный код |

## 🔑 Ключевые переменные проекта

### В store.js
```javascript
// Auth
isLoggedIn, accessToken, user

// Player
currentTrack, isPlaying, currentTime, duration, volume
queue, queueIndex

// UI
view ('home', 'search', 'playlist')

// Data
playlists, searchResults, favorites, cachedTracks
recentlyPlayed

// Status
isOnline
```

### В soundcloud.js
```javascript
CLIENT_ID = 'YOUR_CLIENT_ID'
REDIRECT_URI = 'http://localhost:3000/callback'

Методы:
- searchTracks(query)
- getCurrentUser()
- getUserPlaylists(userId)
- getTrendingTracks()
- likeTrack(trackId)
- getTrack(trackId)
```

### В database.js
```javascript
Таблицы IndexedDB:
- tracks          # Загруженные треки
- recentlyPlayed  # История
- favorites       # Любимые
- playlists       # Плейлисты
- searchCache     # Кеш поиска
- settings        # Настройки
```

## 🎨 CSS переменные

```css
--bg-primary: #0f0f0f      /* Черный фон */
--bg-secondary: #1a1a1a    /* Темносерый */
--bg-tertiary: #282828     /* Средносерый */
--text-primary: #ffffff    /* Белый текст */
--text-secondary: #b3b3b3  /* Серый текст */
--accent: #ff7043          /* Оранжевый SoundCloud */
--accent-hover: #ff8a5b    /* Светлее при наведении */
--border-color: #404040    /* Серые границы */
--scrollbar: #404040       /* Полоса прокрутки */
```

## 🚀 Скрипты для запуска

```bash
npm start                  # Запустить dev режим
npm run react-start        # Только React dev server
npm run electron-start     # Только Electron
npm run build              # Собрать для production
npm run react-build        # Собрать React
```

## 📦 Основные зависимости

```json
{
  "electron": "^27.0.0",
  "react": "^18.2.0",
  "axios": "^1.6.0",
  "dexie": "^3.2.4",
  "zustand": "^4.4.0",
  "react-icons": "^4.11.0",
  "electron-builder": "^24.6.4"
}
```

## 🔐 Где хранятся данные?

### В памяти (Zustand)
- Текущий трек
- Статус воспроизведения
- Текущий пользователь

### В localStorage
- SoundCloud OAuth токен (`sc_token`)

### В IndexedDB (Dexie)
- Загруженные треки
- История прослушиваний
- Избранные треки
- Плейлисты
- Кеш поиска
- Настройки приложения

## 🌐 API endpoints

```javascript
// SoundCloud API
GET /tracks?q=query        # Поиск треков
GET /me                    # Текущий пользователь
GET /users/:id/playlists   # Плейлисты пользователя
GET /tracks/:id            # Информация о треке
PUT /me/favorites/:id      # Добавить в избранное
DELETE /me/favorites/:id   # Удалить из избранного
```

## 💡 Примеры использования

### Поиск трека
```javascript
const results = await soundCloudAPI.searchTracks('track name');
// Returns: [{ id, title, artist, url, artwork, duration }]
```

### Добавление в избранное
```javascript
await store.addFavorite(track);
// Сохраняет в IndexedDB и Zustand
```

### Загрузка трека
```javascript
await store.downloadTrack(track);
// Сохраняет в IndexedDB для офлайна
```

### Получение загруженных
```javascript
const cached = await store.getDownloadedTracks();
// Returns: Array of tracks
```

## 🎯 Порядок загрузки приложения

1. **main.js** - Electron запускает окно
2. **index.html** - Загружает React в #root
3. **index.js** - Инициализирует React и Zustand
4. **App.js** - Основной компонент
5. **Components** - Отрисовка интерфейса
6. **Database.js** - Загрузка локальных данных

## 🔄 Поток обновления

```
API запрос
    ↓
soundcloud.js метод
    ↓
Zustand состояние обновляется
    ↓
React компоненты перерисовываются
    ↓
IndexedDB кеш обновляется
```

## 📝 Внесение изменений

### Добавить новую кнопку
1. Открыть соответствующий компонент (Header.js, Player.js и т.д.)
2. Добавить `<button>` элемент
3. Добавить обработчик onClick
4. Вызвать действие из store через `useStore()`

### Добавить новый API метод
1. Открыть `src/api/soundcloud.js`
2. Добавить метод в `soundCloudAPI` объект
3. Использовать в компонентах через store

### Изменить тему
1. Открыть `src/App.css`
2. Изменить CSS переменные в `:root`
3. Перезагрузить приложение

---

Все готово к разработке! Начните с QUICKSTART.md 🎵
