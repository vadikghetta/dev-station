// Постановка задачи:

// Напишите функцию uniqueInOrder(iterable), которая принимает в качестве параметра iterable массив элементов произвольных типов данных и возвращает новый массив, где идущие друг за другом одинаковые элементы, дублирующие друг друга, заменены одним.


function uniqueInOrder(iterable = [])
{
    return Array.from(new Set(iterable))
}


uniqueInOrder([1, 2, 2, 3, 3])
// [1, 2, 3]
uniqueInOrder(['А', 'А', 'Б', 'В', 'Г', 'Г'])
// ['А', 'Б', 'В', 'Г']


function uniqueInOrder(iterable)
{
    return iterable.filter((item, index) => item !== iterable[index - 1]);
}