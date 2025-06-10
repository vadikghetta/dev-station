// Постановка задачи:

// Напишите функцию squareOrSquareRoot(array), которая принимает в качестве параметра array целочисленный массив и возвращает новый массив, образованный путём осуществления некоторых операций над каждым элементом array.

// А именно: если число является полным квадратом, извлечь его корень, иначе возвести число в квадрат.

function squareOrSquareRoot(array = [])
{
    return array.map(item =>
    {
        if (item === 1) {
            return item;
        } else if (Math.sqrt(item) && (item % Math.sqrt(item) === 0)) {
            return Math.sqrt(item)
        } else {
            return Math.pow(item, 2)
        }
    })
}

function squareOrSquareRoot(array = [])
{
    return array.map(item =>
    {
        const temp = Math.sqrt(item);
        return Number.isInteger(temp) ? root : item * item;
    });
}

squareOrSquareRoot([4, 3, 9, 7, 2, 1])
// [2, 9, 3, 49, 4, 1]
squareOrSquareRoot([1, 2, 3, 4, 5, 6])