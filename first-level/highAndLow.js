// Постановка задачи:

// Напишите функцию highAndLow(numbers), которая принимает в качестве параметра строку numbers, состоящую из ряда чисел, разделённых пробелом, находит среди них наибольшее и наименьшее значения, и возвращает их.

// Возвращаемое значение должно представлять собой строку, состоящую из наибольшего и наименьшего чисел из numbers, разделенных пробелом.


function highAndLow(numbers = "")
{
    const separator = " ";
    let temp = [];
    let item = "";
    // решил сделать свой split
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === separator) {
            temp.push(Number(item));
            item = "";
        } else {
            item += numbers[i];
        }
    }
    if (item !== "") {
        temp.push(Number(item));
    }

    return `${Math.max(...temp)} ${Math.min(...temp)}`
}


console.log(highAndLow("1 2 3 4 5"))
// "5 1"
console.log(highAndLow("1 2 -3 4 5"))
// "5 -3"
console.log(highAndLow("10 20"))
// "20 10"


function highAndLow(numbers = "")
{
    const nums = numbers.split(" ").map(Number);
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
}



function highAndLow(numbers = "")
{
    let max = -Infinity;
    let min = Infinity;
    let item = "";

    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] === " " || i === numbers.length) {
            const num = Number(item);
            if (!isNaN(num)) {
                if (num > max) max = num;
                if (num < min) min = num;
            }
            item = "";
        } else {
            item += numbers[i];
        }
    }

    return `${max} ${min}`;
}

// Если нужна максимальная производительность, можно не хранить массив, а сразу искать max и min в одном проходе:


