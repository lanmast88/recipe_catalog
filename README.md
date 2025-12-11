# Каталог рецептов (React + Vite + Express)

Это учебное приложение для управления рецептами с фронтендом на React и backend на Express. Пользователь может добавлять, просматривать и удалять рецепты через веб-интерфейс и API.

## Основные возможности

- Добавление рецептов через форму
- Отображение всех рецептов в списке
- Просмотр отдельного рецепта по ID (`GET /api/recipes/:id`)
- Удаление рецепта по ID (`DELETE /api/recipes/:id`)
- Работа с API через JSON
- Фильтрация рецептов через query-параметр `?search=`

## Структура проекта

```
/server.js                        - основной сервер Express
/routes/recipes.js                - маршруты API
/controllers/recipesController.js - логика работы с рецептами
/middleware/logger.js             - простой middleware для логов
/src                               - фронтенд React (Vite)
/dist                              - сборка фронтенда (production)
/package.json                      - зависимости и скрипты
/vite.config.js                    - конфигурация Vite
```

## Как запустить проект

```bash
# Установить зависимости
npm install

# Запуск фронтенда (Vite)
npm run dev

# Запуск backend (Express)
npm run serve

# В продакшн режиме:
npm run build  # сборка фронтенда
npm run serve  # запуск Express + отдача сборки
```

## Примеры API

```bash
# Получить все рецепты
GET /api/recipes

# Добавить новый рецепт
POST /api/recipes
Body: { "title": "Борщ", "desc": "Очень вкусный" }

# Получить рецепт по ID
GET /api/recipes/1

# Удалить рецепт
DELETE /api/recipes/1

# Поиск рецептов по названию
GET /api/recipes?search=борщ
```

## Вывод

В ходе работы я закрепил навыки:

- Создание React-приложения с использованием Vite
- Работа с состоянием через useState и хуки
- Разделение логики фронтенда и backend
- Реализация API на Express (GET, POST, DELETE)
- Использование query-параметров и req.params
- Раздача фронтенда через Express
- Создание собственного middleware
<img width="1936" height="2368" alt="image" src="https://github.com/user-attachments/assets/4670839c-d91a-4cca-ae25-7ef5b31ee14f" />
