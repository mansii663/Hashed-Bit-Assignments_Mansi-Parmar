/* Q1. var, let, const - Scope Difference */

function scopeExample() 
{
    if(true)
    {
        var a = "var variable"; //function scope
        let b = "let variable"; //block scope
        const c = "const variable"; //block scope
    }
    console.log(a); //accessible
    // console.log(b); //Error (Because of block scope)
    // console.log(c); //Error (Because of block scope)
}

/* Q2. Array of fruits */

const fruits = ["Apple", "Banana", "Cherry", "Strawberry", "Blueberry"];
function getSecondFruit(arr) 
{
    return arr[1];
}
console.log("Second fruit is:", getSecondFruit(fruits));

/* Q3. Push - Pop in Array */

function modifyArray(arr)
{
    arr.push("New Element");
    arr.pop();
    return arr;
}
console.log("Modified Array is:", modifyArray([1,2,3]));

/* Q4. Square nos. using map() */

const numbers = [1, 2, 3, 4, 5];
function squareNos(arr)
{
    return arr.map(num => num * num);
}
console.log("Squared numbers are:", squareNos(numbers));

/* Q5. Filter even nos. using filter() and printing odd nos. */

function getOddNos(arr)
{
    return arr.filter(num => num % 2 !== 0);
}
console.log("Odd Numbers are:", getOddNos([1,2,3,4,5,6]));

/* Q6. Object Person & Greeting */

const person = {
    name: "Alice",
    age: 25,
    occupation: "Student"
};
function greetPerson(obj)
{
    console.log(`Hello, my name is ${obj.name}. I am ${obj.age} years old and I am a ${obj.occupation}.`);
}
greetPerson(person);

/* Q7. Rectangle area calculation using object */

function calculateArea(rect)
{
    return rect.width * rect.height;
}
console.log("Area of Rectangle is:", calculateArea({width: 20, height: 10}));

/* Q8. Object key using Object.keys() */

function getObjectKeys(obj)
{
    return Object.keys(obj);
}
console.log("Object Keys: ", getObjectKeys({a: 1, b: 2, c: 3}));

/* Q9. Merge objects using Object.assign() */

function mergeObjects(obj1, obj2)
{
    return Object.assign({}, obj1, obj2);
}
console.log("Merged Object:", mergeObjects({a: 1}, {b: 2}));

/* Q10. Sum of array using reduce() */

function sumArray(arr)
{
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of Array: ", sumArray([10, 20, 30, 40]));