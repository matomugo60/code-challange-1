//Challenge 1: Student Grade Generator (Toy Problem)

// Defining a function (gradeCalculator) to set it as a function for the arguments score and total.

let gradeCalculator = function (score, total) {
    // Setting the letter grades to be used for different scores.

    let percentage = (score / total) * 100
    let letterGrade = " "

    // Using if-else and else-if statements to return different grade scores.

    if (percentage >= 79) {
        letterGrade = "A"
    } else if (percentage >= 60) {
        letterGrade = "B"
    } else if (percentage >= 59) {
        letterGrade = "C"
    } else if (percentage >= 40) {
        letterGrade = "D"
    } else { 
        letterGrade = "F"
    }
    // A return message indicating the letter grade, score obtained and the string ('You have scored'). (+) symbol is used to join the string to the letter grade and score.
    return 'You have scored' + " " + letterGrade + " " + '(' + percentage + ')' + '%'
}

// Using variable result to call gradeCalculator by using 54 as the score obtained and 100 as the total score.
let result = gradeCalculator (54, 100)

// Using console.log to display the result.
console.log (result)

// Challenge 2: Speed Detector (Toy Problem)

// Defining variable carSpeedDetector and setting it as a function for argument carSpeed 

function carSpeedDetector(carSpeed) {
    const speedLimit = 70
    const speedRate = 5

// If statement to print Ok if carspeed is below or equal to 70
    if (carSpeed <= 70) {
        return "OK"
    }
// Variable declaration for excessCarSpeed to be used in the function declaration that prints License Suspended
    const excessCarSpeed = carSpeed - speedLimit;

    let demeritPoints = 0;
    //Using for loop statement to set values to be used in excessSpeed and setting an increment operator
    for( let i=0; i < excessCarSpeed; i+= speedRate ) {
        demeritPoints += 1
        // If statement to return License Suspended using demeritPoints > 12
        if(demeritPoints > 12) {
            return "Licence Suspended"; 
        }
    }
     // A return message indicating the Points value
    return `Points: ${demeritPoints}`;
}

// Using console.log to print the result
console.log (carSpeedDetector (157));

// Challenge 3: Net Salary Calculator (Toy Problem)

// Setting values for calculating grossSalary
var grossSalary = basicSalary + benefits
var basicSalary = 32000
var benefits = 10000

// Setting nssf as a function to get amount from grossSalary
const nssf = function (grossSalary) {
    // Using if else statements to create different outcomes
    if (grossSalary > 6000) {
        return 6000 * 0.06
    } else if (grossSalary <= 6000) {
        return grossSalary *  0.06
    } else {
        return 0
    }
}

// Using nhif as a function to set amount from grossSalary
const nhif = function (grossSalary) {
    // Using if else statements to provide outcomes for different conditions
    if (grossSalary < 6000) {
        return 150
    } else if ( grossSalary >= 6000 && grossSalary < 8000 ) {
        return 300
    } else if (grossSalary >= 8000 && grossSalary < 12000) {
        return 400
    } else if (grossSalary >= 12000 && grossSalary < 15000) {
        return 500
    } else if (grossSalary >= 15000 && grossSalary < 20000) {
        return 600
    } else if (grossSalary >= 20000 && grossSalary < 25000) {
        return 750
    } else if (grossSalary >= 25000 && grossSalary < 30000) {
        return 850 
    } else if (grossSalary >= 30000 && grossSalary < 35000) {
        return 900
    } else if (grossSalary >= 35000 && grossSalary < 40000) {
        return 950
    } else if (grossSalary >= 40000 && grossSalary < 45000) {
        return 1000
    } else if (grossSalary >= 45000 && grossSalary < 50000) {
        return 1100
    } else if (grossSalary >= 50000 && grossSalary < 60000) {
        return 1200
    } else if (grossSalary >= 60000 && grossSalary < 70000) {
        return 1300
    } else if (grossSalary >= 70000 && grossSalary < 80000) {
        return 1400 
    } else if (grossSalary >= 80000 && grossSalary < 90000) {
        return 1500
    } else if (grossSalary >= 90000 && grossSalary < 100000) {
        return 1600
    } else {
        return 1700
    }
}

// Setting a value for taxableIncome
const taxableIncome = grossSalary - nssf

//Setting value for kra
const kra = function (taxableIncome) {
    if (taxableIncome <= 24000) {
        return taxableIncome * 0.1
    } else if (taxableIncome <= 32333) {
        return taxableIncome * 0.25
    } else {
        return taxableIncome * 0.3
    }
    
}
// Calculating netIncome
var payeTax = kra - (personalRelief + insuranceRelief)
var personalRelief = 2400
var insuranceRelief = nhif * 0.15


const netIncome = grossSalary - (taxableIncome + nssf + nhif)

const netSalary = netIncome
// printing message
console.table(netSalary)


















