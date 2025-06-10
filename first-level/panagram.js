// Постановка задачи:

// Панграмма - это предложение, содержащее все буквы английского алфавита.

// Напишите функцию isPangram(text), которая принимает в качестве параметра text строку и возвращает true, если она является панграммой, и в противном случае - false.

function isPangram(text = "")
{
    console.log(new Set(text))
    const letters = new Set(text.toLowerCase().match(/[a-z]/g));
    return letters.size === 26;
}

isPangram("The quick brown fox jumps over the lazy dog")