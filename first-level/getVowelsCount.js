// Постановка задачи:

// Напишите функцию getVowelsCount(str), принимающую строку str в качестве параметра и возвращающую количество гласных, содержащихся в этой строке.

// Гласными являются А, Е, Ё, О, У, Ы, Э, И, Ю, Я.

// Регистр символов не имеет значения.


function getVowelsCount(str = "")
{
    const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
    let count = 0;
    const lower = str.toLowerCase();
    for (let i = 0; i < lower.length; i++) {
        if (vowels.includes(lower[i])) {
            count += 1;
        }
    }
    return count;
}