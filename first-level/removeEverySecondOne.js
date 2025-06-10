// Постановка задачи:

// Напишите функцию removeEverySecondOne(arr), которая принимает в качестве параметра массив arr и возвращает построенный на основе него новый массив, где удалён каждый второй элемент.

// Примеры вызова функции:

function removeEverySecondOne(arr = [])
{
    let count = 0;
    let result = [];
    while (count < arr.length) {
        result.push(arr[count]);
        count += 2;
    }
    return result;
}

function removeEverySecondOne(arr = [])
{
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
}
function removeEverySecondOne(arr = [])
{
    return arr.filter((_, index) => index % 2 === 0);
}

console.log(removeEverySecondOne([
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10
]))
// [1, 3, 5, 7, 9]
console.log(removeEverySecondOne([
    "Оставить",
    "Убрать",
    "Оставить",
    "Убрать",
    "Оставить"
]))
// ["Оставить", "Оставить", "Оставить"]