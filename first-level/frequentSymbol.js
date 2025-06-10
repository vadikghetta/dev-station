// Постановка задачи:

// Напишите функцию frequentSymbol(text), которая принимает в качестве параметра строку text, находит в ней самый часто встречающийся символ и возвращает его.

// Если разные символы встречаются в строке одинаковое количество раз, функция должна вернуть тот из них, который расположен в строке левее.

// Строчная и прописная буква - это разные символы, то есть алгоритм должен зависеть от регистра символов.

// Примеры вызова функции:

// frequentSymbol('Хелоу-Бубалоу')
// // 'у'
// frequentSymbol('Ромашковый чай')
// // 'о'
// frequentSymbol('Телевидение')
// // 'е'

function frequentSymbol(text = "") {
	let temp = Object.entries(
		text.split("").reduce((acc, currentVal) => {
			if (!acc[currentVal]) {
				acc[currentVal] = 1;
			} else {
				acc[currentVal]++;
			}
			return acc;
		}, {})
	);

	return temp.sort((a, b) => b[1] - a[1])[0][0];
}

function frequentSymbol(text) {
	if (!text) {
		return null; // или можно вернуть '' в зависимости от требований
	}

	// 1) Считаем вхождения каждого символа
	const counts = Object.create(null);
	for (const ch of text) {
		counts[ch] = (counts[ch] || 0) + 1;
	}

	// 2) Проходим по строке слева направо и выбираем символ
	//    с максимально большим count; при равных — первый встреченный
	let bestChar = text[0];
	let bestCount = counts[bestChar];

	for (const ch of text) {
		const c = counts[ch];
		if (c > bestCount) {
			bestCount = c;
			bestChar = ch;
		}
		// при c === bestCount ничего не делаем,
		// т.к. нам нужен более левый символ
	}

	return bestChar;
}
frequentSymbol("Хелоу-Бубалоу");
// // 'у'
frequentSymbol("Ромашковый чай");
// // 'о'
frequentSymbol("Телевидение");
// function frequentSymbol(text) {
//     let maxCount = 0;
//     let result = '';

//     for (let i = 0; i < text.length; i++) {
//         let count = 0;
//         for (let j = 0; j < text.length; j++) {
//             if (text[i] === text[j]) {
//                 count++;
//             }
//         }

//         if (count > maxCount) {
//             maxCount = count;
//             result = text[i];
//         }
//     }

//     return result;
// }

// function frequentSymbol(text) {
//   if (!text) {
//     return null; // или можно вернуть '' в зависимости от требований
//   }

//   // 1) Считаем вхождения каждого символа
//   const counts = Object.create(null);
//   for (const ch of text) {
//     counts[ch] = (counts[ch] || 0) + 1;
//   }

//   // 2) Проходим по строке слева направо и выбираем символ
//   //    с максимально большим count; при равных — первый встреченный
//   let bestChar = text[0];
//   let bestCount = counts[bestChar];

//   for (const ch of text) {
//     const c = counts[ch];
//     if (c > bestCount) {
//       bestCount = c;
//       bestChar = ch;
//     }
//     // при c === bestCount ничего не делаем,
//     // т.к. нам нужен более левый символ
//   }

//   return bestChar;
// }
