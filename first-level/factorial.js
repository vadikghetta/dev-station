// Напишите функцию factorial(n), которая принимает в качестве параметра n натуральное число и возвращает вычисленный по нему факториал.

// Факториал от нуля равен единице.

function factorial(n = 0)
{
    // if (n === 0) {
    //     return 1
    // }
    let result = 1;
    let count = 1;
    while (count <= n) {
        result *= count;
        count += 1
    }
    return result;
}

console.log(factorial(0))

function factorial(n)
{
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function factorial(n)
{
    if (n === 0) return 1;
    return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, val) => acc * val, 1);
}
