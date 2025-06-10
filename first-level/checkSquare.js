// Постановка задачи:

// Двумерный массив - это массив, элементами которого являются другие массивы. Он формирует таблицу с рядами и столбцами, где каждый элемент имеет два индекса: для строки и столбца.

// Напишите функцию checkSquare(square), которая принимает в качестве параметра двумерный массив square и проверяет уникальность каждого элемента массива - числа. Функция должна вернутьtrue, если каждое число является уникальным, и false в противном случае.

// Массив square, получаемый в качестве параметра, всегда имеет три дочерних массива, то есть состоит из трёх строк и трёх стобцов.


function checkSquare(square = [[]])
{
    let temp = square.flat(1);
    let count = new Set(temp);
    if (temp.length === count.size) {
        return true
    }
    return false;
}



// через цикл
function checkSquare(square = [[]])
{
    const seen = [];

    for (let i = 0; i < square.length; i++) {
        for (let j = 0; j < square[i].length; j++) {
            const num = square[i][j];

            if (seen.includes(num)) {
                return false;
            }

            seen.push(num);
        }
    }

    return true;
}


console.log(checkSquare([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))