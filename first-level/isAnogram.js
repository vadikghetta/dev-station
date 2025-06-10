// Напишите функцию isAnagram(a, b), которая принимает в качестве параметров строки a и b, и возвращает true или false в зависимости от того, являются ли они анаграммами по отношению друг к другу.

// Регистр букв не имеет значения.


function isAnagram(a = "", b = "")
{
    const arr = a.toLocaleLowerCase();
    const brr = b.toLocaleLowerCase();
    if (arr.length !== b.length) {
        return false
    }
    for (let i = 0; i < arr.length; i++) {
        if (!brr.includes(arr[i])) return false
    }
    return true;
}


isAnagram('Гора', 'РоГа')
// true
isAnagram('Клоун', 'кулон')
// true
isAnagram('Восемь', 'Семя')
// false
isAnagram('дерево', 'самолет')
// false