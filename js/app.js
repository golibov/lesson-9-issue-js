"use strict";

// =======================> 1-rasm <=======================

// ============> 1-masala <===============
// let arr = [55, 3, 2, 11, 3, 4, 6, 7, 12];

// arr.sort((a, b) => {
//     return a - b
// });

// console.log(arr);


// ============> 2-masala <===============

// function rangeSum(arr, start, end) {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let arr = [1, 6, 9, 5, 8, 10, 15];
// console.log(rangeSum(arr, 2, 5));


// ============> 3-masala <===============

// let arr1 = [2, 4, 5, 6, 6, 3, 2, 1];
// let arr2 = [2, 4, 5, 6, 3, 1];

// let sum = arr1.concat(arr2);

// let returnArr = [];

// sum.forEach(value => {
//     if (returnArr.indexOf(value) === -1){
//         returnArr.push(value);
//     }
// })

// console.log(returnArr);


// ============> 4-masala <===============

// let arr = [1, 6, 9, 5, 15, 8, 10];

// let maxVal = Math.max(...arr);
// console.log(`Eng kichik qiyma => ${maxVal}`);

// let minVal = Math.min(...arr);
// console.log(`Eng kichik qiyma => ${minVal}`);

// ============> 5-masala <===============

// let arr = [1, 6, 9, 5, 15, 8, 10];
// arr.reverse();
// console.log(arr);


// ============> 6-masala <===============
// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];
// let count = 0;
// arr.forEach(value => {
//     if (value % 2 === 1) {
//         console.log(value);
//         count++;
//     }
// });
// console.log(`Ularning soni => ${count}`);

// ============> 7-masala <===============

// let arr = [2, 3, 4, 5, 7];

// arr.forEach(value => {
//     if (arr.indexOf(value) % 2 === 1) {
//         console.log(value);
//     }
// })

// ============> 8-masala <===============

// function maxArr(arr) {
//     let maxOddIndexValue = -Infinity;

//     arr.forEach((value, index) => {
//         if (index % 2 === 1) {
//             if (value > maxOddIndexValue) {
//                 maxOddIndexValue = value;
//             }
//         }
//     });
//     return maxOddIndexValue === -Infinity ? null : maxOddIndexValue;
// }

// let arr = [2, 3, 4, 5, 7];
// console.log(maxArr(arr));

// ============> 9-masala <===============

//  tushunmadim



// ============> 10-masala <===============

// function myFunc(n) {
//     let oddNumbers = [];
//     let currentNumber = 1;

//     for (let i = 0; i < n; i++) {
//         oddNumbers.push(currentNumber);
//         currentNumber += 2;
//     }

//     return oddNumbers;
// }
// let n = 6;
// console.log(myFunc(n));

// ============> 11-masala <===============

// let arr = [22, 3, 5, 6, 3, 2, 3];
// let reversedArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
// }

// console.log(reversedArr); 


// ============> 12-masala <===============

// let arr = [3,5,6,3,2,3];
// let emptyArr = [];
// arr.forEach(value =>{
//     if(emptyArr.indexOf(value) === -1){
//         emptyArr.push(value)

//     }

// })
// console.log(emptyArr)   


// ============> 13-masala <===============






// =======================> 2-rasm <=======================


// ============> 1-masala <===============

// let employees = [
//     {
//         id: 1,
//         name: 'John',
//         age: 20,
//         salary: 500
//     },
//     {
//         id: 2,
//         name: 'Mike',
//         age: 21,
//         salary: 600
//     },
//     {
//         id: 2,
//         name: 'Cristiano ',
//         age: 22,
//         salary: 700
//     },
// ]

// function sumSalary(employees) {
//     let sum = 0;
//     let emptyArr =[];
//     employees.forEach(employee => {
//          emptyArr.push(employee.salary)
//         sum += employee.salary;
//     })
//     console.log(`maoshlar => ${emptyArr}`);
//     console.log(sum);
// }
// sumSalary(employees)



// ============> 2-masala <===============

// let employees = [
//     {
//         id: 1,
//         name: 'John',
//         age: 20,
//         salary: 500
//     },
//     {
//         id: 2,
//         name: 'Mike',
//         age: 21,
//         salary: 600
//     },
//     {
//         id: 3, 
//         name: 'Cristiano',
//         age: 22,
//         salary: 700
//     },
// ];

// function ageEmployees(employees) {
//     let highest = employees[0];

//     employees.forEach(employee => {
//         if (employee.salary > highest.salary) {
//             highest = employee;

//         }
//     });

//     console.log(`Oyligi eng katta bo'lgan xodim: ${highest.name}`);
// }

// ageEmployees(employees);



// ============> 3-masala <===============

// tushunmadim.

// ============> 4-masala <===============


// let arr = [43,12,76,23,97,28,11];

// arr.sort((a, b) => {
//     return a - b
// });

// console.log(arr);



// ============> 5-masala <===============

// let arr = [43,12,76,23,97,28,11];

// let mixMax = Math.min(...arr);
// console.log(mixMax);


// ============> 6-masala <===============

// yecholmadm.


// ============> 7-masala <===============



// let employees = [
//     {
//         id: 1,
//         name: 'John',
//         age: 20,
//         salary: 500
//     },
//     {
//         id: 2,
//         name: 'Mike',
//         age: 21,
//         salary: 600
//     },
//     {
//         id: 3,
//         name: 'Cristiano',
//         age: 22,
//         salary: 700
//     },
// ];

// function byId(employees, id) {
//     for (let i = 0; i < employees.length; i++) {
//         if (employees[i].id === id) {
//             return { index: i, employee: employees[i] };
//         }
//     }
//     return null; 
// }

// const id = parseInt(prompt("Enter id:"), 10);
// const result = byId(employees, id);

// if (result) {
//     console.log(`Xodim indexi: ${result.index}`);
//     console.log(`Xodim objecti:`, result.employee);
// } else {
//     console.log(`No employee found with id: ${id}`);
// }
