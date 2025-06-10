// Постановка задачи:

// Арифметическая прогрессия - это последовательность чисел, одинаково возрастающая от числа к числу на одну и ту же величину.

// Напишите функцию isArithmeticProgression(arr), которая принимает в качестве параметра массив чисел arr и возвращает true, если последовательность чисел, которую образуют элементы массива, является арифметической прогрессией, и false в противном случае.


function isArithmeticProgression(arr = [])
{
    let i = 0;
    let j = 1;
    let progress = arr[1] - arr[0];
    while (j < arr.length) {
        if ((arr[i] - arr[j]) !== progress) {
            return false;
        }
        i++;
        j++;
    }
    return true;
}

// рефакторинг
function isArithmeticProgression(arr = [])
{
    if (arr.length <= 2) return true; // 0, 1, 2 элемента — всегда прогрессия

    const diff = arr[1] - arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return false;
        }
    }

    return true;
}
console.log(isArithmeticProgression([3, 6, 9, 12, 15]))
// console.log(isArithmeticProgression([1, 2, 4, 7, 11]))

//best practice

function isArithmeticProgression(arr = [])
{
    if (arr.length <= 2) return true;

    const diff = arr[1] - arr[0];

    return arr.every((val, i, array) =>
        i === 0 || val - array[i - 1] === diff
    );
}