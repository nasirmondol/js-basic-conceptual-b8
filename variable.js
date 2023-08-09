// const name = 'javed';
// let num = 10;
// num = 22;
// console.log(name);
/**
 * 1. array theke kono 1ta parts kete nite hole amra slice use korbo..
 */

const array = ['Rasel', 'Jabed', 'Omur', 'Hamid', 'Nabila', 'Shahriar'];

// const sliced = array.splice(2, 0, "Arman")
// console.log(sliced);
// console.log(array);



// find the negetive data and return it by declaring function.

// const arra = [10, -5, 20, 45, -9, -8, 25];
// function findBadDate(numbers) {
//     let bedDate = [];
//     for (let i = 0; i < numbers.length; i++) {
//         const number = numbers[i];
//         if (number >= 0) {
//             console.log(number, 'Good data')
//         }
//         else if (number < 0) {
//             bedDate.push(number)
//             console.log(number, 'Bed data');
//         }

//     }
//     return bedDate;
// }

// const data = findBadDate(arra);
// console.log(data);

const identity = {
    name: "Sagor",
    age: 13,
    roll: 3,
    height: 5,
    color: 'red',
    hair: 'Black'
}


for (let i in identity) {
    console.log(identity[i])
}
// for (let i in identity) {
// console.log(typeof i, i);
// console.log(identity[i]);
// }


// const keys = Object.keys(identity);
// console.log(keys);
// for (let i = 0; i < keys.length; i++) {
//     const element = keys[i];
//     console.log(element);
// }
// for (const key of keys) {
//     console.log(identity[key]);
// }

const findObj = identity.height;
// console.log(findObj);
// console.log(identity['hair']);
const agefind = 'age';
// console.log(identity[agefind]);
