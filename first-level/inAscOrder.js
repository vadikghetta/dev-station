// Постановка задачи:

// Напишите функцию inAscOrder(arr), которая принимает в качестве параметра arr массив целых чисел и возвращает true, если элементы массива расположены в порядке возрастания, и false в противном случае.

// Массивы из одного или нуля элементов функция должна считать в качестве упорядоченных по возрастанию.

function inAscOrder(arr = [])
{
    const { length } = arr;
    let flag = true;
    for (let i = 1; i < length; i++) {
        if (arr[i] > arr[i + 1]) {
            flag = false;
        }
    }
    return flag;
}


console.log(inAscOrder([1, 2, 4, 7, 19]))
// true
console.log(inAscOrder([1, 2, 3, 4, 5]))
// true
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))
// fals