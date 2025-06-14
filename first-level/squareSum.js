// Постановка задачи:

// Напишите функцию squareSum(numbers), которая принимает в качестве параметра numbers массив чисел и возводит каждое число в квадрат, а затем складывает все полученные значения вместе и возвращает результат в виде числа. 

// Примеры вызова функции:

// squareSum([1, 2, 2]) // 9
// squareSum([3, 3]) // 18

function squareSum(numbers = [])
{
    return numbers.reduce((acc, curr) => acc + Math.pow(curr, 2), 0)
}

console.log(squareSum([1, 2, 2]))
console.log(squareSum([3, 3]))