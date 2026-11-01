const sequelize = require("./db");
const Car = require("./models/Car");

async function main() {
    try {
        await sequelize.authenticate();
        console.log("Подключение к базе данных установлено");

        await sequelize.sync();
        console.log("Таблица Cars создана");

        await Car.create({ brand: "Toyota", model: "Camry", year: 2021, price: 2500000, isAvailable: true });
        await Car.create({ brand: "Lada", model: "Vesta", year: 2018, price: 750000, isAvailable: true });
        await Car.create({ brand: "BMW", model: "X5", year: 2019, price: 3200000, isAvailable: false });

        const cars = await Car.findAll();
        console.log("Автомобили в базе:");
        cars.forEach(car => {
            console.log(`- ${car.brand} ${car.model}, ${car.year} год, ${car.price} руб, доступен: ${car.isAvailable}`);
        });
    } catch (error) {
        console.error("Ошибка:", error.message);
    } finally {
        await sequelize.close();
        console.log("Соединение закрыто");
    }
}

main();