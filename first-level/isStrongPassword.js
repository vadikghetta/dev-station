// Постановка задачи:

// Напишите функцию isStrongPassword(password), которая принимает в качестве параметра password строковое значение пароля и возвращает true, если пароль является надежным, и false в противном случае.

// Пароль является надежным, если:
// - длина пароля не менее 8 символов
// - содержит хотя бы одну строчную букву
// - содержит хотя бы одну заглавную букву
// - содержит хотя бы одну цифру


function isStrongPassword(password = "")
{
    if (password.length >= 8 && /[A-Z]/g.test(password) && /[a-z]/g.test(password) && /[0-9]/g.test(password)) return true
    return false
}


console.log(isStrongPassword("Qwerty123"))


///по лучше решение но я тоже про это думал

function isStrongPassword(password = "")
{
    if (password.length < 8) return false;

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;

    for (let ch of password) {
        if (/[A-Z]/.test(ch)) hasUpper = true;
        else if (/[a-z]/.test(ch)) hasLower = true;
        else if (/[0-9]/.test(ch)) hasDigit = true;

        if (hasUpper && hasLower && hasDigit) return true;
    }

    return false;
}
