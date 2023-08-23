const mysql = require('mysql2');

// Создаем подключение к базе данных
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'shodon2007',
    database: 'test123' // Замените на имя вашей базы данных
});

// Подключение к базе данных
connection.connect((err) => {
    if (err) {
        console.error('Ошибка подключения:', err);
        return;
    }
    console.log('Успешное подключение к MySQL');

    // Здесь вы можете выполнять запросы к базе данных
    connection.query('SELECT * FROM names', (err, result) => {
        console.log(result);
    })
});

// Закрытие подключения при завершении работы
process.on('SIGINT', () => {
    connection.end((err) => {
        if (err) {
            console.error('Ошибка закрытия подключения:', err);
        }
        console.log('Подключение закрыто');
        process.exit();
    });
});
