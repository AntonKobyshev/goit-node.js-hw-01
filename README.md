# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"
![alt text](https://github.com/AntonKobyshev/goit-node.js-hw-01/blob/main/screenshots/1.JPG?raw=true)

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
![alt text](https://github.com/AntonKobyshev/goit-node.js-hw-01/blob/main/screenshots/2.JPG?raw=true)

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
![alt text](https://github.com/AntonKobyshev/goit-node.js-hw-01/blob/main/screenshots/3.JPG?raw=true)

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id wMEJA1CKizC3cyfXtuv68
![alt text](https://github.com/AntonKobyshev/goit-node.js-hw-01/blob/main/screenshots/4.JPG?raw=true)
