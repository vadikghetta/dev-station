// Постановка задачи:

// Напишите функцию likes(names), которая принимает в качестве параметра names массив с именами людей и формирует человекопонятную строку на основе этих имён.

// В зависимости от количества имён в массиве, функция должна вернуть различные варианты строки, отражающие количество человек, которым понравился контент.


function likes(names = [])
{
    const likesThis = "оценили это";
    const { length } = names;
    switch (length) {
        case 0: {
            return "никому не понравилось это";
        }
        case 1: {
            return `${names[0]} оценил это`;
        }
        case 2: {
            return `${names[0]} и ${names[1]} ${likesThis}`;
        }
        case 3: {
            return `${names.slice(0, 2).join(", ")} и ${names.slice(-1)} ${likesThis}`;
        }
        default: {
            return `${names.slice(0, 2).join(", ")} и ${length - 2} других ${likesThis}`;
        }
    }
}



console.log(likes([]))
// "никому не понравилось это"
console.log(likes(["Питер"]))
// "Питер оценил это"
console.log(likes(["Джейкоб", "Алекс"]))
// "Джейкоб и Алекс оценили это"
console.log(likes(["Макс", "Джон", "Марк"]))
// "Макс, Джон и Марк оценили это"
console.log(likes(["Алекс", "Джейкоб ", "Марк", "Макс"]))
// "Алекс, Джейкоб и 2 других оценили это"