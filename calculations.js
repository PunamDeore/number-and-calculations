

// Addition
function addition(num1, num2) {
    return num1 + num2;
}

// Subtraction
function subtraction(num1, num2) {
    return num1 - num2;
}

// Multiplication
function multiplication(num1, num2) {
    return num1 * num2;
}

// Division
function division(num1, num2) {
    if (num2 === 0) {
        return "Error: Cannot divide by zero!";
    }
    return num1 / num2;
}

// Sum of Array
function sumOfArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Parsed Value
function parsedValue(value) {
    return parseFloat(value);
}

// Tax Calculator
function taxCalculator(inputAmount, taxPercentage) {
    const taxAmount = (inputAmount * taxPercentage) / 100;
    return {
        taxAmount,
        totalAmount: inputAmount + taxAmount
    };
}

// Interest Calculator
function interestCalculator(principle, period, rateOfInterest, roiOn) {
    let interest = 0;
    switch (roiOn) {
        case 'day':
            interest = (principle * rateOfInterest * period) / 365;
            break;
        case 'month':
            interest = (principle * rateOfInterest * period) / 12;
            break;
        case 'year':
            interest = principle * rateOfInterest * period;
            break;
        case 'quarter':
            interest = (principle * rateOfInterest * period) / 4;
            break;
        case 'half-year':
            interest = (principle * rateOfInterest * period) / 2;
            break;
        case 'week':
            interest = (principle * rateOfInterest * period) / 52;
            break;
        default:
            interest = 0;
    }
    return {
        interest,
        totalAmount: principle + interest
    };
}

// Vertical Sum of Array
function verticalSumArray(dataArray, fieldName) {
    const result = {};
    dataArray.forEach(obj => {
        result[fieldName] = (result[fieldName] || 0) + obj[fieldName];
    });
    return result;
}

// Random Number Generator
function generateRandomNumber(digits) {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Compound Interest Calculation
function compoundInterestCalculation(principle, period, rateOfInterest, numOfTimes) {
    const interest = principle * Math.pow((1 + rateOfInterest / numOfTimes), numOfTimes * period) - principle;
    const totalAmount = principle + interest;
    const interestBreakdown = [];
    for (let i = 1; i <= numOfTimes; i++) {
        const interestPerTime = principle * Math.pow((1 + rateOfInterest / numOfTimes), i * period) - principle;
        interestBreakdown.push(interestPerTime.toFixed(2));
    }
    return {
        interest,
        totalAmount,
        interestBreakdown
    };
}

