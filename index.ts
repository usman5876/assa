// 1. Write a program that uses filter to remove all negative numbers from an array of numbers.
/*
var entries:number[] = [1,3,-5,6,-1,-4,7];
entries = entries.filter((eleme)=>{
    if (eleme > 0) {
        return eleme;
    }
});
console.log(entries);
*/


// 2. Given an array of numbera [1,2,3,4,5] use the map method to create a new array where each number is multiplied by 2
/*
const numeral:number[] = [1,2,3,4,5];
let  numeralmultpl = numeral.map((entry)=>{
    return entry*2;
});
console.log(numeralmultpl);
*/


// 3.Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method
//   to create a new array containing only the fruits with more than 5 characters.
/*
let fruit:string[] = ["apple", "banana", "cherry", "date", "grape"];
let fruitUpdate = fruit.filter((elem)=>{
    if (elem.length > 5){
        return elem;
    }
});
console.log(fruitUpdate);
*/


// 4. Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and
//    filter methods together to create a new array containing the squares of even numbers.

/*
let numeral:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squareEven = numeral.filter((element)=> element%2 === 0).map ((element)=> element**2);
console.log(squareEven);
*/


// 5. Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where
//    each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

/*
const tempC:number[]= [0, 10, 20, 30, 40];
let tempF = tempC.map((elem)=>{
    return (elem *9/5) + 32;
});
console.log(tempF);
*/


// 6. Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to 
//    create a new array containing the doubled values of odd numbers.

/*
let numeral:number[] = [3,6,9,12,15,18];
let doubleNumeral = numeral.filter((elem) => elem %2 !== 0).map((elem)=> elem*2);
console.log(doubleNumeral
);
*/


// 7. Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to 
//    log each name with an exclamation mark at the end, e.g., "Alice!".

/*
const names:string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach((elem)=>{
    console.log(elem + "!");
});
*/