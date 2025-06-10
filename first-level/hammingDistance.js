// Постановка задачи:

// Расстояние Хэмминга — количество позиций, в которых позиционно соответствующие символы двух слов одинаковой длины различны.

// Напишите функцию hammingDistance(str1, str2), которая принимает в качестве параметров две строки str1 и str2, и возвращает вычисленное значение, соответствующее расстоянию Хэмминга между этими строками.

// Если строки имеют разную длину, функция должна возвращать: "Строки должны быть одинаковой длины".

// Примеры вызова функции:

// hammingDistance('Hello', 'Hallo')
// // 1
// hammingDistance('Расстояние', 'Хэмминга')
// // "Строки должны быть одинаковой длины"
// hammingDistance('1010', '1111')
// // 2

function hammingDistance(str1 = "", str2 = "") {
	if (str1.length !== str2.length) {
		return "Строки должны быть одинаковой длины";
	}
	let count = 0;
	for (let i = 0; i < str1.length; i++) {
		if (str1[i] !== str2[i]) {
			count += 1;
		}
	}
	return count;
}

console.log(hammingDistance("Hello", "Hallo"));
function hammingDistance(str1 = "", str2 = "") {
	if (str1.length !== str2.length) {
		return "Строки должны быть одинаковой длины";
	}
	return str1
		.split("")
		.reduce((acc, char, i) => acc + (char !== str2[i] ? 1 : 0), 0);
}
// 1
// console.log(hammingDistance("Расстояние", "Хэмминга"));
// // "Строки должны быть одинаковой длины"
// console.log(hammingDistance("1010", "1111"));
