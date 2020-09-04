// //1
// const fizzBuzz = num => {
//     for (let i = 1; i <= num; i++) {
//         // Проверяем, кратно ли число 3 и 5
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz')
//         } // Проверяем, кратно ли число 3
//         else if (i % 3 === 0) {
//             console.log('fizz')
//         } // Проверяем, кратно ли число 5
//         else if (i % 5 === 0) {
//             console.log('buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }

// //2
// const clothes = ['jacket', 't-shirt'];
// clothes.length = 0;
// clothes[0]; // => ??
// // Из-за этого поведения length, когда JavaScript выполняет clothes.length = 0, все элементы массива clothes будут удалены.

// // Таким образом clothes[0] имеет значение undefined, потому что массив clothes был очищен.

// //--3
// // Область видимости

// var a = 0;
// let b = 0;
// const c = 0;
// if (true) {
//     var a = 1;
//     let b = 1;
//     const c = 1;
// }
// console.log(a); // 1
// console.log(b); // 0
// console.log(c); // 0

// //--4
// const fibonacci = num => {
//     // Сохраняем последовательность Фибоначчи, которую собираемся сгенерировать,
//     // внутри массива и инициализируем массив первыми двумя числами последовательности
//     const result = [0, 1]

//     for (let i = 2; i <= num; i++) {
//         // Поместим сумму двух чисел, предшествующих позиции i в массиве результатов, 
//         // в конец этого массива
//         const prevNum1 = result[i - 1]
//         const prevNum2 = result[i - 2]
//         result.push(prevNum1 + prevNum2)
//     }
//     // Вернём последнее значение из массива результатов
//     return result[num]
// }

///--5
// const findVowels = str => {
//     let count = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++
//         }
//     }
//     return count
// }
// console.log(findVowels('hello'));

///--6
// let i;
// for (i = 0; i < 3; i++) {
//     const log = () => {
//         console.log(i);
//     }
//     setTimeout(log, 3000);
// }

///--7
// const input = {
//     ' ': [5],
//     d: [10],
//     e: [1],
//     H: [0],
//     l: [2, 3, 9],
//     o: [4, 7],
//     r: [8],
//     w: [6]
// };
// const buildString = (o = {}) => {
//     const result = [];

//     ///---1Й Спосіб
//     // for (let i in o) {
//     //     for (let j of o[i]) {

//     //         result[j] = i
//     //     }

//     // }
//     ///---2Й Спосіб
//     return Object.keys(o).reduce((acc, key) => {
//         o[key].forEach(j => {
//             acc[j] = key
//         })
//         return acc
//     }, []).join('')
// };

// 'Hello world' === buildString(input) && console.log('First Case')
// '' === buildString() && console.log('Second Case')

///---8
///вивести числа які під діагоналлю
// const matrix = [
//         [1, 4, 8, 9],
//         [6, 2, 11, 1],
//         [8, 0, 3, -5],
//         [-2, 10, 8, 1]
//     ]
//     ///1-way
//     // for (let i = 1; i < matrix.length; i++) {
//     //     for (let j = 0; j < i; j++) {
//     //         console.log(matrix[i][j]);
//     //     }
//     // }
//     ///2-way
// matrix.forEach(function(row, inIndex) {
//     row.forEach(function(num, outIndex) {
//         if (inIndex < outIndex) {
//             console.log(num);
//         } else {
//             return;
//         }

//     })
// })

////----9
//Розвернути масив
// const arr = [-2, 5, 33, 4, 12];
// for (let i = arr.length - 1; i >= 0; i--) {
//     arr.push(arr[i]);
// }
// arr.splice(0, arr.length / 2)
// console.log(arr);

///---10
///MAx Number
// const nums = [3, 0, -2, 9, 5];
// let max = nums[0];
// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//         max = nums[i]
//     }
// }
// console.log(max)

///---11
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}