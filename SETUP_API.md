# 🔑 Настройка SoundCloud API

## Шаг 1: Создание приложения SoundCloud

1. Перейти на https://soundcloud.com/you/apps
2. Если вы еще не залогинены, залогиниться в аккаунт SoundCloud
3. Нажать кнопку "Register a new application"

## Шаг 2: Заполнение формы

Заполнить следующие поля:

- **Application name**: `SoundCloud Desktop Client` (или любое другое имя)
- **Application description**: Описание вашего приложения
- **Application website**: `http://localhost:3000` (для development)
- **Redirect URI**: `http://localhost:3000/callback`

## Шаг 3: Получение ключей

После создания приложения вы получите:
- **Client ID** - используется для всех запросов к API
- **Client Secret** - используется для получения токена доступа

## Шаг 4: Добавление ключей в проект

### Вариант 1: Через .env файл (РЕКОМЕНДУЕТСЯ)

1. Скопировать `.env.example` в `.env`:
```bash
cp .env.example .env
```

2. Открыть файл `.env` и заполнить:
```
REACT_APP_SOUNDCLOUD_CLIENT_ID=your_client_id_here
REACT_APP_SOUNDCLOUD_CLIENT_SECRET=your_client_secret_here
```

### Вариант 2: Прямое редактирование кода

Открыть `src/api/soundcloud.js` и заменить:

```javascript
const CLIENT_ID = 'YOUR_SOUNDCLOUD_CLIENT_ID';
// на
const CLIENT_ID = 'ваш_client_id_здесь';
```

## 🔐 Безопасность

⚠️ **ВАЖНО**: 

- **НИКОГДА** не коммитьте `.env` файл с реальными ключами
- Используйте `.gitignore` чтобы исключить `.env`
- Для production используйте переменные окружения на сервере
- Защищайте ваш Client Secret

## 🧪 Проверка подключения

После добавления ключей:

1. Запустить приложение:
```bash
npm start
```

2. Попробовать поиск трека
3. Если поиск работает - API настроена правильно ✅

## 🚨 Решение проблем

### Ошибка: "Unauthorized (401)"
- Проверьте правильность Client ID
- Убедитесь, что переменные окружения загружены (перезагрузите приложение)

### Ошибка: "CORS error"
- Убедитесь, что Redirect URI совпадает в приложении и в коде
- Проверьте настройки CORS на SoundCloud

### Поиск не работает
- Проверьте интернет соединение
- Убедитесь, что API ключи верны
- Посмотрите консоль браузера (F12) для ошибок

## 📚 Документация

- [SoundCloud API Docs](https://developers.soundcloud.com/docs)
- [OAuth 2.0](https://developers.soundcloud.com/docs/api/guide#oauth-2-authorization)
- [API Reference](https://developers.soundcloud.com/docs/api/reference)

## 🔗 Полезные ссылки

- Apps dashboard: https://soundcloud.com/you/apps
- Аккаунт SoundCloud: https://soundcloud.com/settings/profile
- Developer documentation: https://developers.soundcloud.com/

---

Если все еще есть проблемы, создайте Issue на GitHub!
