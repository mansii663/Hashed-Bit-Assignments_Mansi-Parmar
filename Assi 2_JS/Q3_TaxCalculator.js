function findTax(income)
{
    let tax;
    switch (true)
    {
        case salary > 0 && salary <= 500000:
            tax = 0;
            break;
        
        case salary <= 1000000:
            tax = salary * 0.10;
            break;

        case salary <= 1500000:
            tax = salary * 0.20;
            break;

        default:
            tax = salary * 0.30;
    }
    return tax;
}

let salary = 1200000;
console.log("Salary:", salary);
console.log("Tax:", findTax(salary));