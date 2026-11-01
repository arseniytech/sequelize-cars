# sequelize-cars

Консольное приложение на Node.js: Sequelize + SQLite (вариант A — таблица «Автомобили»).

## Запуск

```bash
npm install
node index.js
```

При первом запуске создастся таблица `Cars` в файле `database.sqlite`, добавятся три машины, потом произойдёт выборка всех записей и вывод в консоль.

## Предметная область

Таблица «Автомобили» (cars):

| Поле | Тип | Описание |
| --- | --- | --- |
| brand | STRING | марка, обязательное |
| model | STRING | модель, обязательное |
| year | INTEGER | год выпуска |
| price | FLOAT | цена в рублях |
| isAvailable | BOOLEAN | доступен ли для продажи (по умолчанию true) |

Id, createdAt и updatedAt Sequelize добавляет автоматически.

## Что делает скрипт

1. Подключается к SQLite через диалект `sqlite` и хранилище `./database.sqlite`;
2. Проверяет подключение через `authenticate()`;
3. Синхронизирует модель (создаёт таблицу, если её нет);
4. Добавляет 3 автомобиля через `create()`;
5. Делает выборку `findAll()` и выводит результат;
6. Закрывает соединение через `close()`.

## Структура

```
db.js            — экземпляр Sequelize (dialect: sqlite, storage: ./database.sqlite)
models/Car.js    — модель Car: brand, model, year, price, isAvailable
index.js         — основной скрипт: sync → create ×3 → findAll → close
database.sqlite  — файл базы (в git не попадает, см. .gitignore)
```