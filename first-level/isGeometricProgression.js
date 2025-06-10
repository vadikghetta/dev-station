// Постановка задачи:

// Геометрическая прогрессия - это последовательность чисел, где каждый последующий элемент получается умножением предыдущего на одно и то же число, называемое знаменателем или коэффициентом прогрессии.

// Напишите функцию isGeometricProgression(arr), которая принимает в качестве параметра массив чисел arr и возвращает true, если последовательность чисел, которую образуют элементы массива, является геометрической прогрессией, и false в противном случае.


function isGeometricProgression(arr = [])
{
    if (arr.length <= 2) return true;

    const ratio = arr[1] / arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] / arr[i - 1] !== ratio) {
            return false;
        }
    }

    return true;
}

// console.log(isGeometricProgression([2, 4, 8, 16]))
console.log(isGeometricProgression([1, 2, 3, 4]))