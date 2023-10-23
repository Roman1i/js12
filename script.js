/* 1) Дан массив */ const arr = [1, 5, 7, 9] /* с помощью Math.min и spread оператора,
   найти минимальное число в массиве, решение задание должно состоять из одной
   строки кода.*/

console.log(Math.min(...arr));

/* 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
   с двумя методами: increment и decrement. Метод increment должен увеличивать
   значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
   на 1. Значение счетчика должно быть доступно только через методы объекта,
   а не напрямую.*/

const createCounter = () => {
    let count = 0
    
    function counter() {
        return count;
    }

    counter.increment = () => ++count;
    counter.decrement = () => --count;

    return counter;
}

const counter1 = createCounter();
console.log(counter1());

