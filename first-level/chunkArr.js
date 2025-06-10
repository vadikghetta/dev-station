// Постановка задачи:

// Напишите функцию chunkArray(array, size), которая принимает в качестве параметров array и size, где array - массив значений произвольных типов данных, а size - положительное целое число, и возвращает новый массив, построенный путём разбиения array на части, вмещающие в себя не более size элементов.


function chunkArray(array = [], size = 0)
{
    let result = [];
    let flag = 0;
    while (array.length > flag) {
        result.push(array.slice(flag, (size + flag)));
        flag += size;
    }
    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 4))