# 📁 Структура проекта SoundCloud Desktop Client

```
soundcloud-client/
│
├── 📄 package.json              # Зависимости и скрипты
├── 📄 package-lock.json         # Точные версии пакетов
│
├── 🔧 Конфигурационные файлы
│   ├── main.js                  # Electron главный процесс
│   ├── preload.js               # Безопасность для renderer процесса
│   ├── electron-builder.yml     # Сборка инсталлятора
│   ├── .env.example             # Пример переменных окружения
│   ├── .gitignore               # Игнор Git
│   ├── .eslintrc.json           (опционально)
│
├── 📖 Документация
│   ├── README.md                # Основная документация
│   ├── QUICKSTART.md            # Быстрый старт
│   ├── SETUP_API.md             # Настройка API
│   ├── PROJECT_STRUCTURE.md     # Этот файл
│
├── public/                      # Статические файлы
│   ├── index.html               # HTML шаблон
│   ├── favicon.ico              # Иконка
│   └── assets/
│       ├── icon.png             # Иконка приложения
│       ├── icon.ico             # Иконка для Windows
│       └── icon.icns            # Иконка для Mac
│
└── src/                         # Исходный код React
    │
    ├── App.js                   # Главный компонент приложения
    ├── App.css                  # Основные стили (темная тема)
    ├── index.js                 # Точка входа
    ├── index.css                # Глобальные стили
    │
    ├── 🎨 components/           # React компоненты
    │   ├── Header.js            # Заголовок с поиском и авторизацией
    │   ├── Sidebar.js           # Боковая панель навигации
    │   ├── Player.js            # Плеер управления
    │   ├── SearchResults.js     # Результаты поиска
    │   └── Playlist.js          # Просмотр плейлиста
    │
    ├── 🏪 store/                # Управление состоянием (Zustand)
    │   └── store.js             # Главное хранилище приложения
    │                             # • Auth state
    │                             # • Player state
    │                             # • Offline cache
    │                             # • Favorites & History
    │
    ├── 🔌 api/                  # API интеграция
    │   └── soundcloud.js        # SoundCloud API клиент
    │                             # • Поиск треков
    │                             # • OAuth авторизация
    │                             # • Получение плейлистов
    │                             # • Like/Unlike треков
    │
    └── 💾 db/                   # Локальная база данных (Dexie)
        └── database.js          # IndexedDB управление
                                  # • Загруженные треки
                                  # • Избранное
                                  # • История
                                  # • Плейлисты
```

## 🔄 Поток данных

```
SoundCloud API
      ↓
soundcloud.js (API клиент)
      ↓
Zustand Store (store.js)
      ↓
React Components (компоненты)
      ↓
IndexedDB (database.js) ← Кеш & Офлайн
```

## 🎯 Основные компоненты

### App.js
- Главный компонент приложения
- Управление маршрутизацией (view)
- Обработка онлайн/офлайн статуса

### Header.js
- Поиск треков
- Авторизация/логаут
- Статус интернета

### Sidebar.js
- Меню навигации
- Список плейлистов
- Загруженные треки
- История прослушиваний

### Player.js
- Управление воспроизведением
- Регулировка громкости
- Прогресс трека
- Добавление в избранное
- Загрузка для офлайна

### SearchResults.js
- Отображение результатов поиска
- Запуск воспроизведения
- Быстрое добавление в избранное

### Playlist.js
- Отображение плейлиста
- Список треков
- Воспроизведение

## 📦 Зависимости

### Основные
- **electron** - десктоп приложение
- **react** - UI фреймворк
- **react-dom** - рендеринг DOM
- **zustand** - state management

### Утилиты
- **axios** - HTTP клиент
- **dexie** - IndexedDB обертка
- **react-icons** - иконки

### Dev
- **electron-builder** - сборка инсталлятора
- **electron-is-dev** - определение dev режима
- **react-scripts** - Create React App скрипты

## 🎨 Стиль и тема

### Цветовая схема (темная тема)
```css
--bg-primary: #0f0f0f    /* Основной фон */
--bg-secondary: #1a1a1a  /* Вторичный фон */
--bg-tertiary: #282828   /* Третичный фон */
--text-primary: #ffffff  /* Основной текст */
--text-secondary: #b3b3b3/* Вторичный текст */
--accent: #ff7043        /* Акцентный цвет */
--accent-hover: #ff8a5b  /* Акцент при наведении */
```

### Структура стилей
1. `index.css` - глобальные стили
2. `App.css` - основные компоненты
3. Inline стили - для специфичных элементов

## 💾 Локальное хранилище

### IndexedDB (Dexie)
- **tracks** - загруженные треки
- **recentlyPlayed** - история прослушиваний
- **favorites** - любимые треки
- **playlists** - пользовательские плейлисты
- **searchCache** - кеш результатов поиска
- **settings** - настройки приложения

### localStorage
- **sc_token** - SoundCloud OAuth токен

## 🔐 Безопасность

- Context Isolation в Electron
- Preload скрипт для безопасного доступа
- Нет nodeIntegration в renderer процессе
- Защита от XSS атак
- Локальное хранение токенов

## 🚀 Процесс сборки

```bash
npm run react-build    # Собрать React приложение
npm run build          # Собрать инсталлятор
```

Результаты:
- Windows: `dist/SoundCloud Setup 1.0.0.exe`
- Mac: `dist/SoundCloud-1.0.0.dmg`
- Linux: `dist/SoundCloud-1.0.0.AppImage`

## 📝 Внесение изменений

### Добавить новый компонент
1. Создать `src/components/NewComponent.js`
2. Добавить в `App.js`
3. Добавить в сайдбар если нужно

### Добавить API метод
1. Открыть `src/api/soundcloud.js`
2. Добавить метод в объект `soundCloudAPI`
3. Использовать в компонентах через `const { ... } = useStore()`

### Добавить новое хранилище данных
1. Добавить таблицу в `db/database.js` версию
2. Добавить методы в `dbService`
3. Использовать в компонентах

## 🧪 Тестирование

```bash
npm test               # Запустить тесты
npm run build          # Собрать для production
```

## 📊 Размер проекта

| Часть | Размер |
|-------|---------|
| node_modules/ | ~500 MB (после установки) |
| src/ | ~50 KB |
| build/ | ~200 KB (после сборки) |
| Собранное приложение | ~150 MB (в зависимости от ОС) |

## 🔗 Полезные файлы для редактирования

**Для изменения интерфейса**:
- `src/App.css` - стили
- `src/components/*.js` - компоненты

**Для изменения функциональности**:
- `src/store/store.js` - логика состояния
- `src/api/soundcloud.js` - API запросы

**Для добавления офлайн функций**:
- `src/db/database.js` - локальное хранилище

---

Готово к разработке! 🎵
