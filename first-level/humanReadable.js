// Постановка задачи:

// Напишите функцию humanReadable(seconds), которая принимает в качестве параметра seconds неотрицательное целое число, обозначающее количество секунд, и возвращает время в формате HH:MM:SS, соответствующее этому количеству секунд.

// Функция должна вернуть строку.

// HH - часы, до двух цифр диапазоном 00-99.
// MM - минуты, до двух цифр диапазоном 00-59.
// SS - секунды, до двух цифр диапазоном 00-59.
// humanReadable(0)
// // '00:00:00'
// humanReadable(59)
// // '00:00:59'
// humanReadable(60)
// // '00:01:00'
// humanReadable(3599)
// // '00:59:59'

function humanReadable(seconds = 0)
{
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const pad = (num) => String(num).padStart(2, '0');

    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}


console.log(humanReadable(0))
// '00:00:00'
console.log(humanReadable(59))
// '00:00:59'
console.log(humanReadable(60))
// '00:01:00'
console.log(humanReadable(3599))
// '00:59:59'