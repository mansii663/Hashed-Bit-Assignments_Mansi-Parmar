function calculate(a, b, operation)
{
    switch(operation)
    {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        default:
            return "Invalid operation";
    }
}

console.log("Addition:", calculate(20, 8, "add"));
console.log("Subtraction:", calculate(20, 8, "subtract"));
console.log("Multiplication:", calculate(20, 8, "multiply"));
console.log("Division:", calculate(20, 8, "divide"));