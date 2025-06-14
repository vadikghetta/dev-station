// Постановка задачи:

// Напишите функцию numerate(array), которая принимает в качестве параметра array массив строковых значений и возвращает новый массив, где эти же элементы пронумерованы в формате n: string, начиная с единицы.

// Примеры вызова функции:

// numerate([]) // []
// numerate(["a", "b", "c"])
// // ["1: a", "2: b", "3: c"]


function numerate(array = [])
{
    const { length } = array;
    let result = [];
    if (length === 0) {
        return result;
    }
    for (let i = 0; i < length; i++) {
        result.push(`${i + 1}: ${array[i]}`);
    }
    return result;

}
const numerate = (array = []) => array.map((item, i) => `${i + 1}: ${item}`);
console.log(numerate([]))
console.log(numerate(["a", "b", "c"]))